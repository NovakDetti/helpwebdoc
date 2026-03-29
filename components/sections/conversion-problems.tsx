"use client"

import { motion } from "framer-motion"
import { Zap, Layers, Palette, ShieldX, ArrowRight } from "lucide-react"

const obstacles = [
  { icon: Zap, label: "Lassú oldal", description: "3+ másodperc = elvesztett látogató" },
  { icon: Layers, label: "Túl sok lépés", description: "Minden extra kattintás csökkenti az esélyt" },
  { icon: Palette, label: "Zavaros design", description: "Ha nem világos, hova menjen tovább" },
  { icon: ShieldX, label: "Nincs bizalom", description: "Hiányzó vélemények, garancia, személyesség" },
]

export function ConversionProblems() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-center">
            Mi lassítja le a döntést?
          </h2>
          
          <p className="text-center text-white/60 mb-16 text-lg max-w-2xl mx-auto">
            A látogató útjában álló akadályok:
          </p>
          
          {/* Journey Path Visualization */}
          <div className="relative">
            {/* The path line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white/10 to-[#c9a59a]/30 -translate-y-1/2 rounded-full" />
            
            {/* Start point */}
            <motion.div 
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </motion.div>
            
            {/* End point */}
            <motion.div 
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#c9a59a]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>
            
            {/* Obstacles */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:pt-32 lg:pb-32">
              {obstacles.map((obstacle, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Connector to path (desktop) */}
                  <div className="hidden lg:block absolute left-1/2 -top-16 w-px h-16 bg-gradient-to-b from-transparent via-red-400/30 to-red-400/50" />
                  
                  {/* Obstacle card */}
                  <div className="relative p-6 bg-white/5 border border-red-400/20 rounded-xl hover:border-red-400/40 transition-colors">
                    {/* Warning icon */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    
                    <obstacle.icon className="h-8 w-8 text-red-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{obstacle.label}</h3>
                    <p className="text-sm text-white/50">{obstacle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile journey indicator */}
          <div className="lg:hidden flex items-center justify-center gap-2 mt-8 text-white/40">
            <span className="text-sm">Kezdet</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm text-red-400">Akadályok</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm text-[#c9a59a]">Cél</span>
          </div>
          
          <motion.p 
            className="text-center text-lg text-white/60 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Mindegyik akadály{" "}
            <span className="text-white font-medium">csökkenti a konverzió esélyét.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
