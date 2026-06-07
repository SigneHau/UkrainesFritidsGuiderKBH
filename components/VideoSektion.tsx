"use client"

import { useLanguage } from "@/context/LanguageContext"

export default function VideoSektion() {
  const { language } = useLanguage()

  return (
    <section className="w-full py-18 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-10 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* TEKST-SEKTION */}
        <div className="w-full lg:w-2/5 text-left flex flex-col items-start">
          
          {/* OVERSKRIFT */}
          <h2 className="text-navy text-2xl mb-6 md:text-3xl">
            Співпраця з організаціями Копенгагена <br /> 
            <span className="text-xl md:text-2xl">
              Samarbejde med foreninger i København
            </span>
          </h2>
          
          {/* BRØDTEKST */}
          <p className="text-navy text-base opacity-80 leading-relaxed">
            {language === "ua"
              ? "Ми співпрацюємо з місцевими об’єднаннями та клубами по всьому місту, щоб було легше отримати огляд можливостей у активному громадському житті. Це означає, що ти легко можеш знайти щось, що підходить твоїм інтересам і тому, що тобі хочеться спробувати."
              : "Vi samarbejder med lokale foreninger og klubber i hele byen, så det er nemmere at få overblik over de mange muligheder i det aktive foreningsliv. Det betyder, at du let kan finde noget, der passer til dine interesser og det, du har lyst til at prøve."
            }
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-full lg:w-3/5 aspect-video shadow-sm overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/video/ukr-vid.mp4#t=1"
            controls
            preload="metadata"
            playsInline
            title={language === "ua" ? "Відео про співпрацю" : "Video om samarbejde"}
          >
            {language === "ua"
              ? "Ваш браузер не підтримує відео."
              : "Din browser understøtter ikke videoelementet."
            }
          </video>
        </div>

      </div>
    </section>
  )
}