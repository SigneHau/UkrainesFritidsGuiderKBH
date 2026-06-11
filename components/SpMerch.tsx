"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

interface MerchItem {
  navn: string;
  imgSrc: string;
  isHero?: boolean;
}

export default function SpMerch() {
  // Vi samler alle 6 ting i ét array, så de kan køre i det samme 3-kolonne grid
  const merchTing: MerchItem[] = [
    { navn: 'Goodiebag', imgSrc: '/image/merch.png', isHero: true }, // Det samlede billede først
    { navn: 'Drikkedunk', imgSrc: '/image/drikkedunk.png' },
    { navn: 'Mulepose', imgSrc: '/image/mulepose.png' },
    { navn: 'Notesblok', imgSrc: '/image/notesblok.png' },
    { navn: 'Stickers', imgSrc: '/image/stickers.png' },
    { navn: 'T-shirt', imgSrc: '/image/tshirt.png' },
  ];

  return (
    <section id="merch" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP BAR: TITEL & DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
              Merchandise
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Her kan du se og hente design-materiale til vores officielle merchandise.
            </p>
          </div>

          {/* Hoved-downloadknap */}
          <a
            href="/download/merch_alle.zip"
            download="De_Ukrainske_Fritidsguider_Merch_Alle.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-none font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* DET RENE 3-KOLONNE GRID (Giver 2 snorlige rækker med 3 billeder i hver) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-4">
          {merchTing.map((item) => (
            <div key={item.navn} className="flex flex-col items-center text-center group">
              
              {/* Rent og stort produktbillede uden kasser og rammer */}
              <div className="w-full h-64 flex items-center justify-center mb-4">
                <Image
                  src={item.imgSrc}
                  alt={item.navn}
                  width={item.isHero ? 280 : 240} // Gør goodiebag en lille smule større i skalaen
                  height={item.isHero ? 280 : 240}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority={item.isHero}
                />
              </div>

              <span className={`text-sm tracking-wide text-[#000c2e] ${item.      isHero ? 'text-base' : 'font-normal'}`}>
               {item.navn}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}