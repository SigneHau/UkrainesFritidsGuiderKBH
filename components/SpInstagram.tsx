"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function SpInstagram() {
  return (
    <section id="instagram" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* TITEL OMRÅDE */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-gray-100">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
             Instagram prototype og kommunikationskanal
            </h2>
            <p className="text-gray-800 text-sm mt-3 leading-relaxed">
              Denne prototype er selve kernen i vores løsning. Det er den centrale kanal, som kommunen skal bruge til at sikre, at vigtig og relevant information når direkte ud til de ukrainske fordrevne. Designet er skabt med fokus på tryghed og tilgængelighed, så borgerne nemt kan navigere i de informationer, de har brug for.
            </p>
          </div>

          <a
            href="https://www.figma.com/proto/k4fzNLhkL61o3JgwyLl3By/Hovedopgave---Design?node-id=1123-1275&t=8PA3fnD5cyCqm6MR-0&scaling=scale-down&content-scaling=fixed&page-id=1123%3A1272"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-5 py-3 font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm"
          >
            Prototypen i Figma
            <ArrowRight size={18} />
          </a>
        </div>

        {/* BILLEDE SEKTION - Centreret */}
        <div className="flex justify-center pt-4">
          <div className="relative w-full max-w-[300px] aspect-[9/16]">
            <Image 
              src="/image/instra.png" 
              alt="Instagram prototype preview" 
              fill 
              className="object-contain" // object-contain sikrer at hele billedet vises
            />
          </div>
        </div>

      </div>
    </section>
  )
}