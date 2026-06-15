"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Download, ExternalLink, Play } from "lucide-react"

export default function SpVideo() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const videoer = [
    { 
      name: "Animationsvideo", 
      file: "ukr-animatedvideo.mp4",
      cover: "/image/ukr-animatedvideo-Cover.jpg",
      isExternal: true,
      link: "https://www.youtube.com/watch?v=uGIoVd1YOxw"
    },
    { 
      name: "Landingpage", 
      file: "ukr-vid.mp4",
      cover: "/image/lpvideo-ukr-Cover.jpg"
    },
    { 
      name: "Vera Introduktion", 
      file: "vera-introduktionsvideo.mp4",
      cover: "/image/vera-lancering2.png"
    },
  ]

  return (
    <section id="video" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="pb-6 border-b border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000c2e]">
            Videoer
          </h2>
          <p className="text-gray-800 text-sm mt-1">
            Se og download de ønskede videofiler herunder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {videoer.map((video, index) => (
            <div key={video.file} className="flex flex-col gap-4">
              
              <div className="w-full aspect-video bg-gray-100 overflow-hidden border border-gray-200 relative group">
                
                {video.isExternal ? (
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full h-full"
                  >
                    <Image 
                      src={video.cover} 
                      alt={video.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="text-white w-10 h-10" />
                    </div>
                  </a>
                ) : playingIndex === index ? (
                  <video controls autoPlay className="w-full h-full object-contain bg-black">
                    <source src={`/video/${video.file}`} type="video/mp4" />
                    Din browser understøtter ikke video-tagget.
                  </video>
                ) : (
                  <div
                    onClick={() => setPlayingIndex(index)}
                    className="w-full h-full cursor-pointer relative"
                  >
                    <Image 
                      src={video.cover} 
                      alt={video.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                   {/* PLAY KNAP OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-gray-300/90 rounded-full p-6 flex items-center justify-center">
                     <Play className="w-12 h-12 text-white" strokeWidth={2} />
                  </div>
                </div>

                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#000c2e]">
                  {video.name}
                </p>

                <a
                  href={video.isExternal ? video.link : `/video/${video.file}`}
                  download={!video.isExternal}
                  target={video.isExternal ? "_blank" : undefined}
                  className="flex items-center gap-2 text-sm text-[#7C4BFF] hover:underline w-fit"
                >
                  <Download size={16} />
                  {video.isExternal ? "Se video på YouTube" : "Download video"}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}