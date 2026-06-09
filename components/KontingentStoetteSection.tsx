"use client"

import React from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function KontingentStoetteSection() {
  const { language } = useLanguage()

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Container der styrer den maksimale bredde og centrering af hele blokken */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Overskrift centreret på desktop */}
        <h2 className="text-navy text-2xl md:text-3xl font-kbh leading-tight mb-6 md:text-center">
          Фінансова підтримка для дозвілля
          <br />
          <span className="text-xl md:text-2xl font-normal block mt-1 md:text-center">
            Kontingent støtte til fritidsaktiviteter
          </span>
        </h2>

        {/* Tekst og knap begrænset i bredde på desktop via max-w-2xl */}
        <div className="max-w-2xl mx-auto">
          <p className="font-kbhtekst text-navy text-base opacity-80 leading-relaxed mb-8 text-left">
            {language === "ua"
              ? "Місто Копенгаген (Københavns Kommune) надає фінансову підтримку, щоб діти та молодь віком від 3 до 30 років могли брати участь у позашкільних та спортивних заходах незалежно від фінансового стану сім'ї. Допомога може покривати членські внески, обладнання та участь у змаганнях і насамперед призначена для сімей з обмеженими фінансовими ресурсами, а також для дітей і молоді зі статусом біженця в громаді."
              : "Københavns Kommune tilbyder økonomisk støtte, så børn og unge i alderen 3–30 år kan deltage i fritidsaktiviteter, uanset familiens økonomiske situation. Støtten kan dække kontingent, udstyr og deltagelse i stævner og er især målrettet familier med begrænsede økonomiske ressourcer samt børn og unge med flygtningebaggrund i kommunen."
            }
          </p>

          <div className="flex justify-end mb-15">
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
    </section>
  )
}