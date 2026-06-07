"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "ua" | "dk"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Siden starter altid på "ua" (Ukrainsk) som standard
  const [language, setLanguageState] = useState<Language>("ua")

  // Henter sproget fra localStorage, hvis det findes. 
  // Ingen synkron setState herinde = intet hop og ingen hydration fejl!
  useEffect(() => {
    const savedLanguage = localStorage.getItem("app-language") as Language
    if (savedLanguage === "ua" || savedLanguage === "dk") {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Gemmer sproget permanent, når brugeren skifter det (så det huskes til registreringssiden)
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("app-language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage skal bruges inden for en LanguageProvider")
  }
  return context
}