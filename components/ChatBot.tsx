"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X, Send } from 'lucide-react'

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  
  const bottomRef = useRef<HTMLDivElement>(null)

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

      if (!res.ok) {
        throw new Error(`API fejl: ${res.status}`)
      }

      const data = await res.json()
      setMessages([...newMessages, { role: "assistant", content: data.message }])

    } catch (error) {
      console.error("Chat fejl:", error)
      setMessages([...newMessages, { role: "assistant", content: "Вибачте, щось пішло не так. Спробуйте ще раз." }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <div className="relative flex flex-col items-center justify-end">

      {/* Chatboks - åbner opad */}
      {open && (
        <div className="absolute bottom-30 right-0 w-80 bg-white border border-gray-200 shadow-lg flex flex-col overflow-hidden z-50">
          
          {/* Header */}
          <div className="bg-navy text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-sm tracking-wide">Vera</span>
            <button onClick={() => setOpen(false)} aria-label="Luk chat">
              <X size={18} />
            </button>
          </div>

          {/* Besked-område */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 h-72">
            {messages.length === 0 && (
              <p className="text-xs text-gray-400 text-center">
                Привіт! / Hej! 
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

          {/* Input felt */}
          <div className="border-t border-gray-200 flex items-center px-3 py-2 gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Skriv en besked..."
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

      {/* Billede af Vera med blå cirkel bagved */}
      <button 
        onClick={() => setOpen(!open)} 
        aria-label="Åbn chat med Vera"
        className="flex flex-col items-center gap-1"
      >
        {/* Blå cirkel med billede ovenpå */}
        <div className="relative flex items-end justify-center">
          <div className="absolute bottom-0 w-20 h-20 rounded-full bg-secondary-light" />
          <Image
            src="/image/verachat.png"
            alt="Chat med Vera"
            width={80}
            height={140}
            className="relative hover:scale-105 transition-transform drop-shadow-lg"
          />
        </div>
        {/* Tekst under billedet */}
        <span className="text-xs text-navy font-medium tracking-wide">Chat med Vera</span>
      </button>

    </div>
  )
}