"use client"

import React from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

// "category": "B2B"

export default function SpFlyerRollup() {
  return (
    <section id="flyver-rollup" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* TITEL & DOWNLOAD-KNAP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
              Flyver & Roll-up
            </h2>
            <p className="text-gray-800 text-sm mt-1">
              Kampagnematerialer til fysisk distribution og events.
              Inkluderer flyver og roll-up til De Ukrainske Fritidsguider.
            </p>
          </div>

          {/* DOWNLOAD ZIP KNAP */}
          <a
            href="/download/folder.zip"
            download="De_Ukrainske_Fritidsguider_Flyver_Rollup.zip"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-none font-medium text-white bg-[#7C4BFF] hover:bg-[#D8C9FF] hover:text-[#000c2e] transition-all duration-200 shadow-sm self-start md:self-auto"
          >
            <Download size={18} />
            Download (.ZIP)
          </a>
        </div>

        {/* FLYVER & ROLL-UP VISNING */}
        <div className="flex justify-center items-start gap-8 md:gap-24 py-8 flex-wrap">

          {/* Flyver UK */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/image/flyver-uk.png"
              alt="De Ukrainske Fritidsguider Flyver"
              width={240}
              height={340}
              className="w-[200px] md:w-[240px] h-auto object-contain shadow-md"
              priority
            />
            <p className="text-sm text-gray-500 font-medium">Flyver ukrainsk</p>
            
            <a
              href="/download/flyver-uk.png"
              download="De_Ukrainske_Fritidsguider_Flyver_UK.png"
              className="flex items-center gap-2 text-xs text-[#7C4BFF] hover:underline"
            >
              <Download size={14} />
              Download
            </a>
          </div>


          {/* Flyver DK */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/image/flyver-dk.png"
              alt="De Ukrainske Fritidsguider Flyver"
              width={240}
              height={340}
              className="w-[200px] md:w-[240px] h-auto object-contain shadow-md"
              priority
            />
            <p className="text-sm text-gray-500 font-medium">Flyver dansk</p>

            <a
              href="/download/flyver-dk.png"
              download="De_Ukrainske_Fritidsguider_Flyver_DK.png"
              className="flex items-center gap-2 text-xs text-[#7C4BFF] hover:underline"
            >
              <Download size={14} />
              Download
            </a>
          </div>

          
          {/* Roll-up */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/image/roolups.png"
              alt="De Ukrainske Fritidsguider Roll-up"
              width={160}
              height={400}
              className="w-[140px] md:w-[160px] h-auto object-contain shadow-md"
            />
            <p className="text-sm text-gray-500 font-medium">Roll-up</p>

            <a
              href="/download/roolups.png"
              download="De_Ukrainske_Fritidsguider_Rollup.png"
              className="flex items-center gap-2 text-xs text-[#7C4BFF] hover:underline"
            >
              <Download size={14} />
              Download
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}