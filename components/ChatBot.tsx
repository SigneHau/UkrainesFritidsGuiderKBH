"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const { language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 500)
        }
      },
      { threshold: 1.0 }
    )
    if (triggerRef.current) observer.observe(triggerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessages: Message[] = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok) throw new Error(`API fejl: ${res.status}`)

      const data = await res.json()

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.message }
      ])

    } catch (error) {
      console.error("Chat fejl:", error)

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            language === "ua"
              ? "Вибачте, щось пішло не так. Спробуйте ще раз."
              : "Beklager, noget gik galt. Prøv igen."
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <>
      <div ref={triggerRef} className="h-1 w-full" />

      <div
        className={`relative h-44 flex flex-col items-end justify-end w-fit overflow-visible transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >

        {/* CHAT MODAL */}
        {open && (
          <div className="absolute bottom-44 right-5 w-72 md:w-80 bg-white border border-gray-200 shadow-lg flex flex-col overflow-hidden z-50 max-h-[70vh]">

            {/* HEADER */}
            <div className="bg-navy text-white px-4 py-3 flex items-center justify-between">
              <span className="font-bold text-sm tracking-wide">Vera</span>
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* MESSAGES (SCROLL FIX) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              
              {messages.length === 0 && (
                <p className="text-xs text-gray-400 text-center">
                  {language === "ua"
                    ? "Привіт! Напишіть мені питання 👋"
                    : "Hej! Spørg mig om fritidsguiderne 👋"}
                </p>
              )}

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

              {loading && (
                <div className="bg-gray-100 text-gray-400 text-sm px-3 py-2 max-w-[85%]">
                  ...
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* INPUT */}
            <div className="border-t border-gray-200 flex items-center px-3 py-2 gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === "ua" ? "Напишіть повідомлення..." : "Skriv en besked..."}
                className="flex-1 text-sm outline-none text-gray-700 placeholder:text-gray-400"
              />
              <button onClick={handleSend} disabled={loading}>
                <Send size={18} />
              </button>
            </div>

          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center gap-1"
        >
          <div className={`flex flex-col items-end gap-1 mb-2 mr-2 transition-opacity duration-200 ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
            <div className="relative bg-white border border-gray-200 shadow-sm text-navy text-xs px-3 py-1.5 rounded-full">
              {language === "ua" ? "Чат з Верою 👋" : "Chat med Vera 👋"}
              <span className="absolute -bottom-1.5 right-4 w-2 h-2 bg-white border-b border-r border-gray-200 rotate-45" />
            </div>
          </div>

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