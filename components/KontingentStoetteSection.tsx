"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function KontingentStoetteSection() {
  const { language } = useLanguage()

  return (
    <section className="w-full bg-white md:py-15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-12 md:px-16">
        
        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-8">

          {/* VENSTRE SIDE (IKON + MOBIL OVERSKRIFT) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">

            {/* MOBIL OVERSKRIFT */}
            <h2 className="block md:hidden text-navy text-2xl font-kbh leading-tight text-left w-full">
              Фінансова підтримка для дозвілля
              <br />
              <span className="text-xl font-normal block mt-1">
                Kontingent støtte til fritidsaktiviteter
              </span>
            </h2>

            {/* IKON */}
            <div className="flex flex-1 items-center justify-center md:-mt-15">
              <div className="relative w-52 h-52 md:w-84 md:h-84">
                <Image
                  src="/image/kontigent-ikon.png"
                  alt="Kontingent støtte ikon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>

          {/* HØJRE SIDE */}
          <div className="w-full md:w-1/2 text-left flex flex-col items-start">

            {/* DESKTOP OVERSKRIFT */}
            <h2 className="hidden md:block text-navy text-3xl font-kbh leading-tight text-left w-full mb-6">
              Фінансова підтримка для дозвілля
              <br />
              <span className="text-2xl font-normal block mt-1">
                Kontingent støtte til fritidsaktiviteter
              </span>
            </h2>

            {/* 🔥 ORIGINAL TEKST (IKKE KORTET NED) */}
            <p className="font-kbhtekst text-navy text-base opacity-80 leading-relaxed text-left md:mr-8 -mt-10 md:mt-0">
              {language === "ua"
                ? "Місто Копенгаген (Københavns Kommune) надає фінансову підтримку, щоб діти та молодь віком від 3 до 30 років могли брати участь i позашкільних та спортивних заходах незалежно від фінансового стану сім'ї. Допомога може покривати членські внески, обладнання та участь у змаганнях і насамперед призначена для сімей з обмеженими фінансовими ресурсами, а також для дітей і молоді зі статусом біженця i kommunen."
                : "Københavns Kommune tilbyder økonomisk støtte, så børn og unge i alderen 3–30 år kan deltage i fritidsaktiviteter, uanset familiens økonomiske situation. Støtten kan dække kontingent, udstyr og deltagelse i stævner og er især målrettet familier med begrænsede økonomiske ressourcer samt børn og unge med flygtningebaggrund i kommunen."
              }
            </p>

            {/* KNAP */}
            <div className="w-full mt-8 flex justify-end md:pr-12 mb-15">
              <button
                onClick={() =>
                  window.open(
                    "https://fritidsguiderne.kk.dk/til-foraeldre/oekonomiske-stoettemuligheder",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 text-navy text-lg font-bold hover:text-secondary-purple transition-all group cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

                {language === "ua" ? "Дізнатися більше" : "Læs mere"}
              </button>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  )
}