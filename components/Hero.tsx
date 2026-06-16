"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"

export default function Hero() {
  const router = useRouter()
  const { language } = useLanguage()

  // STYRER hvilket hero-billede der vises
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // HERO BILLEDER (slideshow)
  const heroImages = [
    { src: "/image/hero-trampolin.jpg", alt: "Trampolin", className: "object-cover object-right md:object-right" },
    { src: "/image/hero-faellesskab.jpg", alt: "Faellesskab", className: "object-cover object-center" },
    { src: "/image/hero-sv.jpg", alt: "Svømme", className: "object-cover object-center" },
    { src: "/image/cykel.jpg", alt: "Cykel", className: "object-cover object-right md:object-top" },
    { src: "/image/hero-dans.jpg", alt: "Dans", className: "object-cover object-right md:object-center" },
    { src: "/image/basket2.jpg", alt: "Basketball", className: "object-cover object-right md:object-center" }
  ]

  // AUTOMATISK SKIFT AF HERO BILLEDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section className="relative w-full h-96 md:h-175 overflow-visible z-20">

      {/* HERO BILLEDER (fade effekt) */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={image.className}
            priority={index === 0}
          />
        </div>
      ))}

      {/* CONTAINER TIL TEKSTBOKS */}
      <div className="relative mx-auto max-w-7xl h-full w-full">

        {/* BLÅ TEKSTBOKS */}
        <div className="absolute -bottom-88 md:-bottom-64 left-0 z-30 w-full md:max-w-3xl bg-primary-blue p-6 md:p-10 shadow-1xl flex flex-col justify-start gap-3 md:gap-8 h-130 md:h-130">

          <div>

            {/* OVERSKRIFT */}
            <h1 className="text-3xl md:text-5xl mb-2 font-kbh text-navy">
              Допомога з пошуком дозвілля та спільноти в Копенгагені <br />
              <span className="text-2xl md:text-3xl">
                Få hjælp til fritidsaktiviteter og oplev fællesskabet
              </span>
            </h1>

            {/* BRØDTEKST */}
            <p className="text-base md:text-xl font-kbhtekst text-navy/70 min-h-[120px] md:min-h-0">

              {/* UKRAINSK + DANSK TEKST (SKIFTER MED LANGUAGE CONTEXT) */}
              {language === "ua"
                ? "У Копенгагені є багате дозвілля з 489 клубами та спільнотами. FritidsGuiderne допомагають вам знайти заняття, яке вам підходить, і підтримують вас на шляху до нової спільноти. Ми також можемо допомогти вам подати заявку на фінансову підтримку для оплати членського внеску. Разом ми створюємо гарні враження та можливості для розвитку."
                : "København har et rigt fritidsliv med 489 klubber og fællesskaber. FritidsGuiderne hjælper dig med at finde en aktivitet, der passer til dig, og støtter dig på vejen ind i et nyt fællesskab. Vi kan også hjælpe dig med at søge økonomisk støtte til at betale kontingent. Sammen skaber vi gode oplevelser og muligheder for udvikling."
              }
            </p>

          </div>

          {/* KNAP SEKTION */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-2">

            {/* CTA KNAP */}
            <Button 
              variant="purple" 
              size="xl" 
              onClick={() => router.push('/blank/registration')}
              className="mx-auto md:ml-auto cursor-pointer"
            >
              {language === "ua" ? "Отримати контакт" : "Bliv kontaktet"}
            </Button>

          </div>

        </div>
      </div>
    </section>
  )
}


// Denne komponent er et hero-banner med et automatisk skiftende slideshow af billeder.
// useState styrer hvilket billede der vises, og useEffect skifter billede hvert 5. sekund.
// Hero-sektionen indeholder en tekstboks med overskrift, brødtekst og CTA-knap.
// Teksten skifter sprog dynamisk via language context (dansk/ukrainsk).
// Next.js Image bruges til optimeret visning af billeder med forskellige object-position styles.
// Knappen navigerer brugeren til registreringssiden via router.push().
// Komponenten fungerer som landing-page introduktion til siden og FritidsGuiderne.