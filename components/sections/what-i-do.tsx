"use client"

import { motion } from "framer-motion"
import { ArrowUp, Smartphone, GitBranch, Shield, Star, BadgeCheck } from "lucide-react"

const services = [
  { 
    icon: ArrowUp, 
    label: "CTA kiemelése",
    diagram: (
      <div className="flex items-center gap-2 mt-3">
        <div className="h-6 w-12 rounded bg-white/10" />
        <svg className="w-4 h-4 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <div className="h-8 w-16 rounded bg-[#c9a59a]/40 flex items-center justify-center">
          <span className="text-[10px] text-[#c9a59a]">CTA</span>
        </div>
      </div>
    )
  },
  { 
    icon: Smartphone, 
    label: "Mobil optimalizálás",
    diagram: (
      <div className="flex items-center gap-3 mt-3">
        <div className="w-8 h-12 rounded border border-white/20 bg-white/5" />
        <svg className="w-4 h-4 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div className="w-8 h-12 rounded border border-[#c9a59a]/40 bg-[#c9a59a]/10" />
      </div>
    )
  },
  { 
    icon: GitBranch, 
    label: "Flow egyszerűsítése",
    diagram: (
      <div className="flex items-center gap-1 mt-3">
        <div className="flex flex-col gap-1">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <svg className="w-4 h-4 text-[#c9a59a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <div className="w-3 h-3 rounded-full bg-[#c9a59a]" />
      </div>
    )
  },
  { 
    icon: Shield, 
    label: "Bizalom erősítése",
    diagram: (
      <div className="flex items-center gap-2 mt-3">
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <Star key={i} className="w-3 h-3 text-[#c9a59a] fill-[#c9a59a]" />
          ))}
        </div>
        <BadgeCheck className="w-4 h-4 text-[#c9a59a]" />
      </div>
    )
  },
]

export function WhatIDo() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground text-center">
            Mit javítok?
          </h2>
          
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Minden területen vizuális példákkal mutatom meg a változtatásokat:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-secondary border border-border rounded-xl hover:border-[#c9a59a]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <service.icon className="h-8 w-8 text-[#c9a59a] mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-lg font-medium text-foreground">{service.label}</p>
                  </div>
                </div>
                
                {/* Mini diagram */}
                {service.diagram}
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-xl text-muted-foreground text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A cél: egy{" "}
            <span className="text-foreground font-medium">átláthatóbb, jobban működő</span>{" "}
            weboldal.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
