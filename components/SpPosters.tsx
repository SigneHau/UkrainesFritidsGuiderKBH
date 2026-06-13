"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

interface PlakatItem {
  navn: string
  imgSrc: string
}

export default function SpPlakater() {

  const grafiskePlakater: PlakatItem[] = [

    { navn: 'Fodbold (DK)', imgSrc: '/image/plakat1-dk.png' },
    { navn: 'Kampsport (DK)', imgSrc: '/image/plakat2-dk.png' },
    { navn: 'Basket (DK)', imgSrc: '/image/plakat3-dk.png' },
    { navn: 'Gymnastik (DK)', imgSrc: '/image/plakat4-dk.png' },

    { navn: 'Футбол', imgSrc: '/image/plakat1.png' },
    { navn: 'Бойові мистецтва', imgSrc: '/image/plakat2.png' },
    { navn: 'Баскетбол', imgSrc: '/image/plakat3.png' },
    { navn: 'Гімнастика', imgSrc: '/image/plakat4.png' },

  ]

  const infoPlakater: PlakatItem[] = [
    { navn: 'Dansk udgave', imgSrc: '/image/plakat7-info-dk.png' },
    { navn: 'Ukrainsk udgave', imgSrc: '/image/plakat6-info.png' },
    
  ]

  const invitationes: PlakatItem[] = [
    { navn: 'Standard design', imgSrc: '/image/standard-dk.png' },
    { navn: 'Jule design', imgSrc: '/image/jul-dk.png' },
    { navn: 'Sommer design', imgSrc: '/image/sommer-dk.png' },
    { navn: '', imgSrc: '/image/standard-uk.png' },
    { navn: '', imgSrc: '/image/jul-uk.png' },
    { navn: '', imgSrc: '/image/sommer-uk.png' },
    
  ]

  const ImageBox = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative w-full aspect-[3/4] mb-4 bg-white overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )

  return (
    <section id="plakater" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* TOP */}
        < div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-[#000c2e]">Plakater</h2>
            <p className="text-sm text-gray-700 mt-1">
              Officielle plakater og informationsmaterialer til projektet.
            </p>
          </div>

          <a
            href="/download/plakater_alle.zip"
            download
            className="flex items-center gap-2 px-5 py-3 font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition"
          >
          
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* GRAFISKE PLAKATER */}
        <div className="space-y-6">
          <div className="pl-4">
            <h3 className="text-lg font-bold text-[#000c2e]">Kampagneplakater</h3>
            <p className="text-xs text-gray-400">Profil og branding</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {grafiskePlakater.map((p) => (
              <div key={p.imgSrc} className="text-center group">
                <ImageBox src={p.imgSrc} alt={p.navn} />
                <span className="text-sm text-[#000c2e]">{p.navn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INFO PLAKATER - centreret i midten */}
        <div className="space-y-6">
          <div className="pl-4">
            <h3 className="text-lg font-bold text-[#000c2e]">Informationsplakater</h3>
            <p className="text-xs text-gray-400">Indkvarteringssteder</p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {infoPlakater.map((p) => (
              <div key={p.imgSrc} className="text-center group w-full sm:w-64">
                <ImageBox src={p.imgSrc} alt={p.navn} />
                <span className="text-sm text-[#000c2e]">{p.navn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INVITATIONER - 3 og 3 i rækkerne */}
        <div className="space-y-6">
          <div className="pl-4">
            <h3 className="text-lg font-bold text-[#000c2e]">Invitationer</h3>
            <p className="text-xs text-gray-400">Skabeloner til events</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {invitationes.map((p, i) => (
              <div key={p.imgSrc + i} className="text-center group">
                <ImageBox src={p.imgSrc} alt={p.navn || `invitation ${i}`} />
                {p.navn && (
                  <span className="text-sm text-[#000c2e]">{p.navn}</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}