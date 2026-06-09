"use client"

import React from "react"
import Image from "next/image"

export default function SpIntro() {
  const links = [
    { name: "Logo", id: "logo" },
    { name: "Farver", id: "color" },
    { name: "Plakater", id: "plakater" },
    { name: "Ikon", id: "ikoner" },
    { name: "Flyvers & Roll-ups", id: "flyver-rollup" },
    { name: "Nyhedsbrev", id: "skabeloner" },
    { name: "Merchandise", id: "merch" },
    { name: "Animerede figurer", id: "figurer" },
    { name: "Video", id: "video" },
    { name: "Instagram Prototype", id: "instagram" },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-6 font-kbhtekst">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* INDHOLDSFORTEGNELSE */}
        <div className="order-2 md:order-1 flex-1 w-full space-y-4">
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

        {/* BILLEDE - Justeret med mt-10 for at skubbe det ned og centrere det */}
        <div className="order-1 md:order-2 flex-1 flex justify-center mt-15">
          <div className="relative w-full max-w-[480px] aspect-square overflow-hidden">
            <Image
              src="/image/kompas.png"
              alt="De Ukrainske Fritidsguider - Samarbejde"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}