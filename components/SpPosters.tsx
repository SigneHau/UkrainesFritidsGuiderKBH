"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

interface PlakatItem {
  navn: string;
  imgSrc: string;
}

export default function SpPlakater() {
  // De 4 grafiske plakater
  const grafiskePlakater: PlakatItem[] = [
    { navn: 'Plakat 1', imgSrc: '/image/plakat1.png' },
    { navn: 'Plakat 2', imgSrc: '/image/plakat2.png' },
    { navn: 'Plakat 3', imgSrc: '/image/plakat3.png' },
    { navn: 'Plakat 4', imgSrc: '/image/plakat4.png' },
  ];

  // De 2 teksttunge informationsplakater
  const infoPlakater: PlakatItem[] = [
   
    { navn: 'Ukrainsk udgave', imgSrc: '/image/plakat6-info.png' },
     { navn: 'Dansk udgave', imgSrc: '/image/plakat7-info-dk.png' },
  ];

  return (
    <section id="plakater" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP BAR: HOVEDTITEL & SAMLET DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
              Plakater
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Her kan du se de officielle plakater og informationsmaterialer. Download den samlede pakke for at få alle PDF-filer i høj trykkvalitet.
            </p>
          </div>

          {/* Fælles download-knap til ALT plakatmateriale */}
          <a
            href="/download/plakater_alle.zip"
            download="De_Ukrainske_Fritidsguider_Plakater_Alle_PDF.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-none font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* DEL 1: DE 4 GRAFISKE PLAKATER (4-kolonne grid) */}
        <div className="space-y-6">
          <div className=" pl-4">
            <h3 className="text-lg font-bold text-[#000c2e]">Kampagneplakater</h3>
            <p className="text-xs text-gray-400">Officielle profil- og brandingplakater</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {grafiskePlakater.map((plakat) => (
              <div key={plakat.navn} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-[3/4] flex items-center justify-center mb-4 overflow-hidden bg-white">
                  <Image
                    src={plakat.imgSrc}
                    alt={plakat.navn}
                    width={300}
                    height={400}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
                <span className="font-semibold text-sm text-[#000c2e] tracking-wide">
                  {plakat.navn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DEL 2: DE 2 INFORMATIONS PLAKATER (Større 2-kolonne grid underneden) */}
        <div className="space-y-6 pt-4">
          <div className=" pl-4">
            <h3 className="text-lg font-bold text-[#000c2e]">Informationsplakater (Indkvarteringssteder)</h3>
            <p className="text-xs text-gray-400">Detaljerede oplysninger om aktiviteter på stederne</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {infoPlakater.map((plakat) => (
              <div key={plakat.navn} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-[3/4] flex items-center justify-center mb-4 overflow-hidden bg-white">
                  <Image
                    src={plakat.imgSrc}
                    alt={plakat.navn}
                    width={450}
                    height={600}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                    priority
                  />
                </div>
                <span className="font-semibold text-sm text-[#000c2e] tracking-wide">
                  {plakat.navn}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}