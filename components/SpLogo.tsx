"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

export default function SpLogo() {
  return (
    <section id="logo" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* TITEL & DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Logo
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Her kan du se og hente de logovarianter som png eller svg filer til projektet.
            </p>
          </div>

          {/* DOWNLOAD ZIP KNAP (Rettet med ren Tailwind og korrekt sti) */}
          <a
            href="/download/logo.zip" 
            download="De_Ukrainske_Fritidsguider_Logoer.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-none font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download alle (.ZIP)
          </a>
        </div>

        {/* LOGO-GRID (DE TO VERSIONER) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* VERSION 1: Primært Logo på lys baggrund */}
          <div className="flex flex-col rounded-none border border-gray-100 overflow-hidden shadow-sm">
            <div 
              className="flex items-center justify-center p-12 min-h-[260px] bg-[#BEE2FE]" // Lavet om til Tailwind arbitrary class
            >
              <Image
                src="/image/logomand.png" 
                alt="Primært logo"
                width={450}
                height={250}
                className="object-contain h-auto w-[260px]"
              />
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <span className="font-semibold text-sm text-gray-700 block">Primær version</span>
              <span className="text-xs text-gray-400">Bruges på lyse overflader og officielle dokumenter</span>
            </div>
          </div>

          {/* VERSION 2: Sekundært Logo / Negativ version */}
          <div className="flex flex-col rounded-none border border-gray-100 overflow-hidden shadow-sm">
            <div 
              className="flex items-center justify-center p-12 min-h-[260px] bg-[#7C4BFF]" // Lavet om til Tailwind arbitrary class
            >
              <Image
                src="/image/logomand.png" 
                alt="Sekundært logo"
                width={450}
                height={250}
                className="h-65 w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <span className="font-semibold text-sm text-gray-700 block">Sekundær version (Hvid / Negativ)</span>
              <span className="text-xs text-gray-400">Bruges på mørke baggrunde, billeder eller merchandise</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}