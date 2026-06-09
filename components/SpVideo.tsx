"use client"

import React from "react"
import { Download } from "lucide-react"

export default function SpVideo() {
  const videoer = [
    { name: "Animationsvideo", file: "ukr-animatedvideo.mp4" },
    { name: "Vera Introduktion", file: "vera-introduktionsvideo.mp4" },
    { name: "Ukrainsk video", file: "ukr-vid.mp4" },
  ]

  return (
    <section id="video" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* TITEL */}
        <div className="pb-6 border-b border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
            Videoer
          </h2>
          <p className="text-gray-800 text-sm mt-1">
            Download de ønskede videofiler herunder.
          </p>
        </div>

        {/* GRID AF VIDEOER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {videoer.map((video) => (
            <div key={video.file} className="flex flex-col gap-4">
              
              {/* Videoviser */}
              <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <video controls className="w-full h-full object-cover">
                  <source src={`/video/${video.file}`} type="video/mp4" />
                  Din browser understøtter ikke video-tagget.
                </video>
              </div>

              {/* Titel og Download knap */}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-[#000c2e]">{video.name}</p>
                <a
                  href={`/video/${video.file}`}
                  download={video.file}
                  className="flex items-center gap-2 text-sm text-[#7C4BFF] hover:underline w-fit"
                >
                  <Download size={16} />
                  Download video
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}