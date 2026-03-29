"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact-form" className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              Nézzük meg a weboldalad állapotát
            </h2>
            <p className="text-lg text-white/70">
              Az első diagnózis gyors, konkrét és kötelezettségmentes.
            </p>
          </div>
          
          {isSubmitted ? (
            <motion.div 
              className="text-center p-12 bg-[#c9a59a]/10 border border-[#c9a59a]/20 rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 bg-[#c9a59a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-serif mb-3">Köszönöm!</h3>
              <p className="text-white/70">
                Megkaptam a kérésedet. Hamarosan jelentkezem az elemzéssel.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Név
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Hogyan szólítsalak?"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:border-[#c9a59a] focus:ring-[#c9a59a]/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="hova@kuldjemazelemezes.hu"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:border-[#c9a59a] focus:ring-[#c9a59a]/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-white/70 mb-2">
                    Weboldal URL
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    required
                    placeholder="https://pelda.hu"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:border-[#c9a59a] focus:ring-[#c9a59a]/20"
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c9a59a] hover:bg-[#dbc4bb] text-[#0a0a0a] font-semibold text-lg h-14 rounded-lg group transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Küldés...
                  </>
                ) : (
                  <>
                    Kérem az elemzést
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
