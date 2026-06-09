"use client"

import React from "react"
import Image from "next/image"
import { Download } from "lucide-react"

export default function SpAnimeredeFigurer() {
  // Listen over figurer (Victor 1 er fjernet)
  const figurer = [
    
    { name: "Vera", file: "vera1.png" },
    { name: "Vera Chat", file: "vera-chat.png" },
    { name: "Victor", file: "victor-2.png" },
    { name: "Nikolaj", file: "nikolaj.png" },
  ]

  return (
    <section id="figurer" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* TITEL & SAMLET DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
              Animerede figurer
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Download alle animerede figurer som en samlet mappe.
            </p>
          </div>

          <a
            href="/download/figurer.zip"
            download="figurer.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* GRID AF FIGURER (Uden download knapper) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-8">
          {figurer.map((figur) => (
            <div key={figur.file} className="flex flex-col items-center gap-4">
              <div className="w-50 h-50 relative">
                <Image
                  src={`/image/${figur.file}`}
                  alt={figur.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{figur.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}