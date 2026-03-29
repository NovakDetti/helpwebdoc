"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BeforeAfter() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-16 text-center">
            Mi történik javítás után?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before - Chaos */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 bg-red-400/20 px-4 py-2 rounded-br-xl">
                <span className="text-sm font-medium text-red-400">Előtte</span>
              </div>
              
              <div className="pt-10">
                {/* Chaos visualization */}
                <div className="aspect-square relative bg-white/5 rounded-xl overflow-hidden">
                  {/* Random scattered arrows */}
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Confused user in center */}
                    <circle cx="100" cy="100" r="20" fill="rgba(255,255,255,0.2)" />
                    <text x="100" y="105" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="12">?</text>
                    
                    {/* Random arrows pointing in all directions */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Arrow 1 - top left */}
                      <line x1="100" y1="80" x2="40" y2="30" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="40,30 48,35 45,43" fill="rgba(248,113,113,0.5)" />
                      
                      {/* Arrow 2 - top right */}
                      <line x1="100" y1="80" x2="170" y2="40" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="170,40 162,45 165,53" fill="rgba(248,113,113,0.5)" />
                      
                      {/* Arrow 3 - right */}
                      <line x1="120" y1="100" x2="180" y2="90" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="180,90 172,85 170,93" fill="rgba(248,113,113,0.5)" />
                      
                      {/* Arrow 4 - bottom right */}
                      <line x1="110" y1="115" x2="160" y2="170" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="160,170 152,165 155,157" fill="rgba(248,113,113,0.5)" />
                      
                      {/* Arrow 5 - bottom */}
                      <line x1="100" y1="120" x2="90" y2="180" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="90,180 85,172 93,170" fill="rgba(248,113,113,0.5)" />
                      
                      {/* Arrow 6 - left */}
                      <line x1="80" y1="100" x2="20" y2="110" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="20,110 28,105 30,113" fill="rgba(248,113,113,0.5)" />
                      
                      {/* Arrow 7 - bottom left */}
                      <line x1="85" y1="115" x2="30" y2="160" stroke="rgba(248,113,113,0.5)" strokeWidth="2" />
                      <polygon points="30,160 38,155 35,147" fill="rgba(248,113,113,0.5)" />
                    </motion.g>
                    
                    {/* Question marks scattered */}
                    <text x="50" y="70" fill="rgba(255,255,255,0.2)" fontSize="14">?</text>
                    <text x="150" y="80" fill="rgba(255,255,255,0.2)" fontSize="14">?</text>
                    <text x="60" y="150" fill="rgba(255,255,255,0.2)" fontSize="14">?</text>
                    <text x="140" y="140" fill="rgba(255,255,255,0.2)" fontSize="14">?</text>
                  </svg>
                </div>
                
                <p className="text-center text-white/50 mt-6 text-sm">
                  Zavaros, sok irány, nincs egyértelmű út
                </p>
              </div>
            </motion.div>
            
            {/* After - Clean Flow */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-[#c9a59a]/10 border border-[#c9a59a]/30 p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 bg-[#c9a59a]/30 px-4 py-2 rounded-br-xl">
                <span className="text-sm font-medium text-[#c9a59a]">Utána</span>
              </div>
              
              <div className="pt-10">
                {/* Clean flow visualization */}
                <div className="aspect-square relative bg-white/5 rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Step 1 */}
                    <motion.div 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-xs text-white/40">Látogató</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-[#c9a59a]" />
                    </motion.div>
                    
                    {/* Step 2 */}
                    <motion.div 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#c9a59a]/20 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-xs text-[#c9a59a]/60">Érti</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-[#c9a59a]" />
                    </motion.div>
                    
                    {/* Step 3 */}
                    <motion.div 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#c9a59a]/30 flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-xs text-[#c9a59a]/60">Bízik</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <ArrowRight className="w-5 h-5 text-[#c9a59a]" />
                    </motion.div>
                    
                    {/* Step 4 */}
                    <motion.div 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#c9a59a] flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs text-[#c9a59a]">Vásárol</span>
                    </motion.div>
                  </div>
                </div>
                
                <p className="text-center text-[#c9a59a]/70 mt-6 text-sm">
                  Tiszta út, egyértelmű irány, könnyű döntés
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
