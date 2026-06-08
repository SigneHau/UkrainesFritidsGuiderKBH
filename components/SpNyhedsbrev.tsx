"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

export default function SpNyhedsbrev() {
  return (
    <section id="skabeloner" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP BAR: TITEL & DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
              Nyhedsbrev
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Her kan du se designet af vores nyhedsbrev til både desktop og mobil, samt skabelonen til vores invitationer.
            </p>
          </div>

          {/* Fælles download-knap */}
          <a
            href="/download/nyhedsbrev_og_invitation.zip"
            download="De_Ukrainske_Fritidsguider_Materiale.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-none font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4 items-start">
          
          {/* VENSTRE SIDE: WEB-VERSION (Fyldningsgrad: 8 ud af 12 kolonner) */}
          <div className="md:col-span-8 flex flex-col group">
            <div className="pl-4 mb-6 border-l-4 border-[#7C4BFF]">
              <h3 className="text-lg font-bold text-[#000c2e]">Web-version</h3>
              <p className="text-xs text-gray-400">Layout til desktop og computer-skærme</p>
            </div>
            
            <div className="w-full flex justify-center bg-white">
              <Image
                src="/image/nyhedsbrev.png" 
                alt="Nyhedsbrev - Web-version"
                width={800}
                height={1600}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </div>

          {/* HØJRE SIDE: MOBIL-VERSION & INVITATION (Fyldningsgrad: 4 ud af 12 kolonner) */}
          <div className="md:col-span-4 flex flex-col space-y-16">
            
            {/* MOBIL-VERSION */}
            <div className="flex flex-col group">
              <div className="pl-4 mb-6 border-l-4 border-[#7C4BFF]">
                <h3 className="text-lg font-bold text-[#000c2e]">Mobil-version</h3>
                <p className="text-xs text-gray-400">Layout tilpasset smartphones</p>
              </div>
              
              <div className="w-full flex justify-center bg-white">
                <Image
                  src="/image/nyhedsbrev-mobil.png" 
                  alt="Nyhedsbrev - Mobil-version"
                  width={360}
                  height={1200}
                  className="w-full max-w-[320px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>

            {/* INVITATION (Ligger nu solidt i bunden og skaber balance) */}
            <div className="flex flex-col group pt-4">
              <div className="pl-4 mb-6 border-l-4 border-[#7C4BFF]">
                <h3 className="text-lg font-bold text-[#000c2e]">Invitation</h3>
                <p className="text-xs text-gray-400">Officiel skabelon til invitationer og events</p>
              </div>
              
              <div className="w-full flex justify-center bg-white">
                <Image
                  src="/image/invitation.png" 
                  alt="Officiel Invitation"
                  width={360}
                  height={500}
                  className="w-full max-w-[320px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}