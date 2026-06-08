"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, User, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (username === "ukrainskefritidsguider" && password === "kkUkraine") {
      router.push('/blank/samarbejdsportal')
    } else {
      setError("Forkert brugernavn eller adgangskode. Prøv igen.")
    }
  }

  return (
    <div className="min-h-screen mt-10 flex justify-center bg-white px-4">
      <div className="w-full max-w-sm">

        {/* KK Logo */}
        <div className="mb-6 flex items-center justify-center">
          <Image
            src="/image/logomand.png"
            alt="Københavns Kommune"
            width={180}
            height={40}
            style={{ height: "auto" }}
            priority
          />
        </div>

        {/* Titel */}
        <div className="mb-5">
          <h1 className="text-4xl text-navy mb-10">Samarbejdsportal for ukrainske fritidsguider</h1>
           <p className="text-nayv text-base md:text-lg max-w-lg">
   Her finder du alle de materialer vi har udarbejdet og overleverer til Københavns Kommune — herunder designleverancer, SoMe prototype, og kampagnematerialer. Log ind for at tilgå og downloade materialerne.
        </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Fejlbesked */}
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 p-3 text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Brugernavn */}
          <div className="space-y-1">
            <Label htmlFor="username" className="text-sm font-medium text-navy">
              Brugernavn
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-nayv" />
              <Input
                id="username"
                type="text"
                placeholder="ukrainskefritidsguider"
                className="pl-10 rounded-none border-gray-300 focus-visible:ring-navy text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Adgangskode */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium text-navy">
                Adgangskode
              </Label>
              
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-nayv" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 rounded-none border-gray-300 focus-visible:ring-navy text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Knap til at vise/skjule adgangskode */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Skjul adgangskode" : "Vis adgangskode"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Log ind knap */}
          <Button
            variant="purple" 
            type="submit"
            className="w-full rounded-none"
          >
            Log ind
          </Button>

        </form>
      </div>
    </div>
  )
}