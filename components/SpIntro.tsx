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
    <section className="bg-white px-6 font-kbhtekst ">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">

        {/* VENSTRE KOLONNE */}
        <div className="order-2 md:order-1 flex-1 w-full space-y-4">

          <h1 className="text-2xl font-semibold tracking-wider text-navy mb-6">
            Materiale oversigt
          </h1>

          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group flex items-center justify-between p-3 border border-sky-100 bg-sky-50/50 hover:bg-[#D8C9FF] hover:border-[#D8C9FF] transition"
              >
                <span className="font-medium text-navy">
                  {link.name}
                </span>

                <span className="text-sm group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            ))}
          </nav>

        </div>

        {/* HØJRE KOLONNE (KOMPAS CENTRERET) */}
        <div className="order-1 md:order-2 flex-1 flex items-center justify-center">

          <div className="w-2/3 md:w-full max-w-[420px] aspect-square flex items-center justify-center md:mt-8">
            <Image
              src="/image/kompas.png"
              alt="kompas"
              width={480}
              height={480}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  )
}