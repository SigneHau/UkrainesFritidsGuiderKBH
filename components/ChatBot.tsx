"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

// Definerer typen for en besked
type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatBot() {
  // Styrer om chatboksen er åben eller lukket
  const [open, setOpen] = useState(false)
  // Gemmer alle beskeder i samtalen
  const [messages, setMessages] = useState<Message[]>([])
  // Gemmer hvad brugeren skriver i inputfeltet
  const [input, setInput] = useState("")
  // Viser loading indikator mens vi venter på svar fra OpenAI
  const [loading, setLoading] = useState(false)
  // Styrer om Vera er synlig - starter skjult og animerer ind
  const [visible, setVisible] = useState(false)
  
  // Bruges til at scrolle ned til nyeste besked automatisk
  const bottomRef = useRef<HTMLDivElement>(null)
  // Reference til det usynlige trigger element vi observer med IntersectionObserver
  const triggerRef = useRef<HTMLDivElement>(null)

  // Henter det valgte sprog fra LanguageContext
  const { language } = useLanguage()

  // IntersectionObserver - viser Vera når brugeren scroller ned til footeren
  // threshold: 1.0 betyder at hele trigger elementet skal være synligt
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 500ms forsinkelse så det føles mere naturligt
          setTimeout(() => setVisible(true), 500)
        }
      },
      { threshold: 1.0 }
    )
    if (triggerRef.current) observer.observe(triggerRef.current)
    // Rydder op når komponenten unmountes
    return () => observer.disconnect()
  }, [])

  // Scroller automatisk ned til nyeste besked
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Tilføjer brugerens besked til samtalen
    const newMessages: Message[] = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      // Sender beskeden til vores API route som kalder OpenAI
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok) throw new Error(`API fejl: ${res.status}`)

      const data = await res.json()
      // Tilføjer Veras svar til samtalen
      setMessages([...newMessages, { role: "assistant", content: data.message }])

    } catch (error) {
      console.error("Chat fejl:", error)
      // Viser fejlbesked på ukrainsk eller dansk afhængig af sprog
      setMessages([...newMessages, { 
        role: "assistant", 
        content: language === "ua" 
          ? "Вибачте, щось пішло не так. Спробуйте ще раз." 
          : "Beklager, noget gik galt. Prøv igen." 
      }])
    } finally {
      setLoading(false)
    }
  }

  // Sender beskeden når brugeren trykker Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <>
      {/* Usynligt trigger element - når dette bliver synligt på skærmen dukker Vera op */}
      <div ref={triggerRef} className="h-1 w-full" />

      {/* Vera container - animerer ind med opacity og translateY når visible bliver true */}
       <div className={`relative h-44 flex flex-col items-end justify-end w-fit overflow-visible transition-all duration-700 ${
         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
}`    }>

        {/* Chatboks - åbner opad med absolute positionering så den ikke rykker layoutet */}
        {open && (
          <div className="absolute bottom-44 right-5 w-72 md:w-80 bg-white border border-gray-200 shadow-lg flex flex-col overflow-hidden z-50">
            
            {/* Chat header med navn og luk-knap */}
            <div className="bg-navy text-white px-4 py-3 flex items-center justify-between">
              <span className="font-bold text-sm tracking-wide">Vera</span>
              <button onClick={() => setOpen(false)} aria-label="Luk chat">
                <X size={18} />
              </button>
            </div>

            {/* Besked-område */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 h-72 chat-scroll">
              
              {/* Velkomstbesked skifter sprog afhængig af LanguageContext */}
              {messages.length === 0 && (
                <p className="text-xs text-gray-400 text-center">
                  {language === "ua" 
                    ? "Привіт! Напишіть мені питання 👋" 
                    : "Hej! Spørg mig om fritidsguiderne 👋"}
                </p>
              )}

              {/* Viser alle beskeder - brugerens beskeder til højre, Veras til venstre */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-navy text-white ml-auto"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {/* Loading indikator mens vi venter på svar fra OpenAI */}
              {loading && (
                <div className="bg-gray-100 text-gray-400 text-sm px-3 py-2 max-w-[85%]">
                  ...
                </div>
              )}

              {/* Usynligt element vi scroller ned til */}
              <div ref={bottomRef} />
            </div>

            {/* Input felt med send knap */}
            <div className="border-t border-gray-200 flex items-center px-3 py-2 gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                // Placeholder skifter sprog afhængig af LanguageContext
                placeholder={language === "ua" ? "Напишіть повідомлення..." : "Skriv en besked..."}
                className="flex-1 text-sm outline-none text-gray-700 placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                aria-label="Send besked"
                className="text-navy hover:text-navy/70 disabled:opacity-40"
              >
                <Send size={18} />
              </button>
            </div>

          </div>
        )}

        {/* Vera knap med taleeboble og lyselilla cirkel bagved */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Åbn chat med Vera"
          className="flex flex-col items-center gap-1"
        >
          {/* Taleboble - usynlig når chatten er åben men holder stadig plads */}
        <div className={`flex flex-col items-end    gap-1 mb-2 mr-2 transition-opacity duration-200 ${
        open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
         <div className="relative bg-white border border-gray-200 shadow-sm text-navy text-xs px-3 py-1.5 rounded-full">
    {language === "ua" ? "Чат з Верою 👋" : "Chat med Vera 👋"}
    <span className="absolute -bottom-1.5 right-4 w-2 h-2 bg-white border-b border-r border-gray-200 rotate-45" />
  </div>
</div>
          

          {/* Lyselilla cirkel bagved Vera billedet */}
          <div className="relative flex items-end justify-center">
            <div className="absolute bottom-0 w-21 h-21 rounded-full bg-secondary-light" />
            <Image
              src="/image/verachat.png"
              alt="Chat med Vera"
              width={90}
              height={140}
              className="relative hover:scale-105 transition-transform drop-shadow-lg"
            />
          </div>

        </button>

      </div>
    </>
  )
}