"use client"

import { motion } from "framer-motion"
import { ArrowRight, X, Check } from "lucide-react"

export function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-16 text-foreground text-center">
            Mi történik valójában a weboldaladon?
          </h2>
          
          {/* Flow Diagram */}
          <div className="space-y-8">
            {/* Bad Flow */}
            <motion.div 
              className="relative p-8 bg-secondary/50 border border-border rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                  {/* Step 1 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-foreground/10 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground/80 font-medium">Látogató</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-foreground/30" />
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-foreground/10 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground/80 font-medium">Megérkezik</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-foreground/30" />
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-red-400 font-medium">Nem érti</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-foreground/30" />
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                    </div>
                    <span className="text-sm sm:text-base text-red-400 font-bold">Kilép</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Good Flow */}
            <motion.div 
              className="relative p-8 bg-[#c9a59a]/10 border border-[#c9a59a]/30 rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                  {/* Step 1 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#c9a59a]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground font-medium">Látogató</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-[#c9a59a]" />
                  
                  {/* Step 2 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#c9a59a]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-foreground font-medium">Megérkezik</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-[#c9a59a]" />
                  
                  {/* Step 3 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#c9a59a]/30 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-[#c9a59a] font-medium">Érti</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-[#c9a59a]" />
                  
                  {/* Step 4 */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#c9a59a] flex items-center justify-center">
                      <Check className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a0a0a]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#c9a59a] font-bold">Cselekszik</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.p 
            className="text-center text-xl text-muted-foreground mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A különbség nem a látogatók számában van,{" "}
            <span className="text-foreground font-medium">hanem abban, mit csinálnak.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
