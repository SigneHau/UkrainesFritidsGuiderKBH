"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function FritidsguiderSection() {
  const { language } = useLanguage()

  return (
    <section className="w-full bg-white py-14 md:py-15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-12 md:px-16">
        
        {/* CONTAINER FOR KOLONNER (Fejlede før pga. manglende div-tag) */}
        <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-8">

          {/* VENSTRE SIDE */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center">

            {/* MOBIL OVERSKRIFT */}
            <h2 className="block md:hidden text-navy text-2xl font-kbh leading-tight text-left w-full mb-6">
              Fritidsguiderne допоможуть вам
              <br />
              <span className="text-xl font-normal block mt-1">
                Fritidsguiderne er klar til at hjælpe jer
              </span>
            </h2>

            {/* KOMPAS (Centreret lodret på desktop) */}
            <div className="flex flex-1 items-center justify-center">
              <div className="relative w-52 h-52 md:w-60 md:h-60">
                <Image
                  src="/image/kompas.png"
                  alt="Kompas grafik"
                  fill
                  className="object-contain transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                />
              </div>
            </div>

          </div>

          {/* HØJRE SIDE */}
          <div className="w-full md:w-1/2 text-left flex flex-col items-start">
            
            {/* DESKTOP OVERSKRIFT */}
            <h2 className="hidden md:block text-navy text-3xl font-kbh leading-tight text-left w-full mb-6">
              Fritidsguiderне допоможуть вам
              <br />
              <span className="text-2xl font-normal block mt-1">
                Fritidsguiderne er klar til at hjælpe jer
              </span>
            </h2>

            {/* BRØDTEKST (Stopper en smule før kanten via md:mr-8) */}
            <p className="font-kbhtekst text-navy text-base opacity-80 leading-relaxed text-left md:mr-8">
              {language === "ua"
                ? "FritidsGuiderne KBH допомагає дітям і молоді віком від 3 до 30 років у Копенгагенській муніципалітеті добре розпочати заняття у вільний час. Разом ми знаходимо щось, що відповідає твоїм інтересам, і підтримуємо тебе на всьому шляху, щоб ти почувався/почувалася впевнено з самого початку. Ми відвідуємо місця тимчасового проживання та надаємо персональне консультування на рівних умовах, щоб зробити перший крок простим і безпечним. Перевір наступну дату на плакаті там, де ти живеш. Ми з нетерпінням чекаємо на зустріч з тобою."
                : "FritidsGuiderne KBH hjælper børn og unge i alderen 3–30 år i Københavns Kommune med at komme godt i gang med en fritidsaktivitet. Sammen finder vi noget, der passer to dine interesser, og vi støtter dig hele vejen, så du føler dig tryg fra start. Vi besøger indkvarteringssteder og giver personlig vejledning i øjenhøjde, så det er nemt og trygt at tage det første skridt. Tjek næste dato på plakaten der, hvor du bor. Vi glæder os til at møde dig."
              }
            </p>

            {/* KNAP (Placeret efter p-tagget med god afstand (mt-8), men flugter 100% under tekstkanten via md:pr-8) */}
            <div className="w-full mt-8 flex justify-end md:pr-12">
              <button
                onClick={() =>
                  window.open("https://fritidsguiderne.kk.dk/", "_blank")
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

        </div> {/* SLUT PÅ CONTAINER FOR KOLONNER */}
        
      </div>
    </section>
  )
}


// Denne komponent viser en informationssektion om FritidsGuiderne.
// Layoutet er opdelt i to kolonner med et ikon/illustration til venstre og tekst + knap til højre.
// Teksten skifter dynamisk mellem dansk og ukrainsk via language context.
// Der er separate overskrifter til mobil og desktop for at sikre responsivt design.
// Next.js Image bruges til at optimere og vise kompas-illustrationen.
// Knappen åbner et eksternt link i en ny fane med mere information om FritidsGuiderne.
// Komponenten fungerer som en introduktion til hjælpetilbuddet for brugeren.