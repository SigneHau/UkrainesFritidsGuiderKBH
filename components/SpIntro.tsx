"use client"

import React from "react"
import Image from "next/image"

export default function SpIntro() {
  const links = [
    { name: "Logo", id: "logo" },
    { name: "Farver", id: "color" },
    { name: "Plakater", id: "plakater" },
    { name: "Ikon", id: "ikoner" },
    { name: "Flyvers & Roll-ups", id: "flyvers" },
    { name: "Nyhedsbrev", id: "skabeloner" },
    { name: "Merchandise", id: "merch" },
    { name: "Video", id: "video" },
    { name: "Instagram Prototype", id: "instagram" },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-6 font-kbhtekst">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* BILLEDE - ØVERST PÅ MOBIL, TIL HØJRE PÅ DESKTOP */}
<div className="order-1 md:order-2 relative w-2/3 md:w-[480px] mx-auto aspect-square overflow-hidden shadow-sm">
  <Image
    src="/image/kompas.png"
    alt="De Ukrainske Fritidsguider - Samarbejde"
    fill
    className="object-contain"
    priority
  />
</div>

        {/* INDHOLDSFORTEGNELSE */}
        <div className="order-2 md:order-1 space-y-4">
          <h1 className="text-2xl font-semibold tracking-wider text-navy">
            Materiale oversigt
          </h1>

          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group flex items-center justify-between p-3 border border-sky-100 bg-sky-50/50 hover:bg-[#D8C9FF] hover:border-[#D8C9FF] transition-all duration-200"
              >
                <span className="font-medium text-navy group-hover:text-navy transition-colors duration-200">
                  {link.name}
                </span>

                <span className="text-navy group-hover:text-navy group-hover:translate-x-1 transition-all duration-200 text-sm">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>

      </div>
    </section>
  )
}