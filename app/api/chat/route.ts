import OpenAI from "openai"
import { NextRequest, NextResponse } from "next/server"

// Opretter en OpenAI klient med vores API nøgle fra .env.local
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// POST funktion der modtager beskeder fra vores chatbot komponent
export async function POST(req: NextRequest) {
  
  // Henter beskederne fra request body
  const { messages } = await req.json()

  // Sender beskederne til OpenAI og beder om et svar
  const response = await openai.chat.completions.create({
    
    // Vi bruger gpt-4o-mini som er hurtig og billig
    model: "gpt-4o-mini",
    
    messages: [
      {
        // System prompten definerer hvem chatbotten er og hvordan den opfører sig
        // Dette er den rolle vi giver vores karakter Vera
        role: "system",
        content: `Du er Vera, en glad og venlig ukrainsk fritidsguide i København. 
        Du svarer altid på samme sprog som brugeren skriver på — dansk hvis de skriver dansk, ukrainsk hvis de skriver ukrainsk.
        Du hjælper med spørgsmål om projektet De Ukrainske Fritidsguider og aktiviteter i København.
        Hold svarene korte og venlige.`
      },
      // Her spreder vi alle tidligere beskeder i samtalen ud
      // så OpenAI husker hvad der er blevet sagt tidligere i chatten
      ...messages
    ],
    
    // Max antal tokens i svaret - holder svarene korte
    max_tokens: 300,
  })

  // Returnerer svaret tilbage til vores chatbot komponent
  return NextResponse.json({ 
    message: response.choices[0].message.content 
  })
}