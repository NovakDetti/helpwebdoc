"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          {/* Left content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-2xl">🩺</span>
              <span className="text-sm text-white/70 font-medium">Weboldal Doktor</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance">
              A weboldalad lehet, hogy{" "}
              <span className="text-[#c9a59a]">nem működik jól.</span>
              <br />
              Megmutatom miért.
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Feltárom, hol veszíted a látogatókat – és milyen javítások segíthetnek jobb eredményeket elérni.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToForm}
                className="bg-[#c9a59a] hover:bg-[#dbc4bb] text-[#0a0a0a] font-semibold text-lg px-8 py-6 rounded-lg group transition-all duration-300"
              >
                Kérek gyors diagnózist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-white/50 pt-2">
              Konkrét, érthető javaslatok. Nincs bullshit.
            </p>
          </motion.div>
          
          {/* Right - Photo placeholder */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-[#c9a59a]/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍⚕️</span>
                  </div>
                  <p className="text-white/30 text-sm">Személyes fotó</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a59a]/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#c9a59a]/5 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
