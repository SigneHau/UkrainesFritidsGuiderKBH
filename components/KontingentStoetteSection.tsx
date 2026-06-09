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

        {/* COLUMN CONTAINER */}
        <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-8">

          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center">

            {/* MOBILE HEADING */}
            <h2 className="block md:hidden text-navy text-2xl font-kbh leading-tight text-left w-full">
              Фінансова підтримка для дозвілля
              <br />
              <span className="text-xl font-normal block mt-1">
                Kontingent støtte til fritidsaktiviteter
              </span>
            </h2>

            

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 text-left flex flex-col items-start">

            {/* DESKTOP HEADING */}
            <h2 className="hidden md:block text-navy text-3xl font-kbh leading-tight text-left w-full mb-6">
              Фінансова підтримка для дозвілля
              <br />
              <span className="text-2xl font-normal block mt-1">
                Kontingent støtte til fritidsaktiviteter
              </span>
            </h2>

            {/* BODY TEXT */}
            <p className="font-kbhtekst text-navy text-base opacity-80 leading-relaxed text-left md:mr-8">
              {language === "ua"
                ? "Місто Копенгаген (Københavns Kommune) надає фінансову підтримку, щоб діти та молодь віком від 3 до 30 років могли брати участь у позашкільних та спортивних заходах незалежно від фінансового стану сім'ї. Допомога може покривати членські внески, обладнання та участь у змаганнях і насамперед призначена для сімей з обмеженими фінансовими ресурсами, а також для дітей і молоді зі статусом біженця в громаді."
                : "Københavns Kommune tilbyder økonomisk støtte, så børn og unge i alderen 3–30 år kan deltage i fritidsaktiviteter, uanset familiens økonomiske situation. Støtten kan dække kontingent, udstyr og deltagelse i stævner og er især målrettet familier med begrænsede økonomiske ressourcer samt børn og unge med flygtningebaggrund i kommunen."
              }
            </p>

            {/* BUTTON */}
            <div className="w-full mt-8 mb-10 flex justify-end md:pr-12">
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
                {language === "ua"
                  ? "Дізнатися більше"
                  : "Læs mere"}
              </button>
            </div>

          </div>

        </div> {/* END COLUMN CONTAINER */}

      </div>
    </section>
  )
}
