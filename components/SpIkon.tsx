"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

export default function SpIkon() {
  return (
    <section id="ikoner" className="bg-white py-16 px-6 ">
      <div className="max-w-7xl mx-auto  space-y-10">
        
        {/* TITEL & DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
              Ikon
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Kompasset symboliserer de mange sportsgrene og fungerer som et ikon for <br /> De Ukrainske Fritidsguider.
            </p>
          </div>

          {/* DOWNLOAD ZIP KNAP */}
          <a
            href="/download/ikon.zip"
            download="De_Ukrainske_Fritidsguider_Ikon.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-none font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* IKON-VISNING */}
<div className="flex justify-center items-center gap-8 md:gap-48 py-8 flex-wrap">
  
  <Image
    src="/image/kompas.png"
    alt="De Ukrainske Fritidsguider Ikon"
    width={240}
    height={240}
    className="w-[240px] h-auto object-contain"
    priority
  />

  <Image
    src="/image/compass-purple.png"
    alt="De Ukrainske Fritidsguider Ikon i lilla"
    width={240}
    height={240}
    className="w-[240px] h-auto object-contain"
  />

</div>

      </div>
    </section>
  )
}