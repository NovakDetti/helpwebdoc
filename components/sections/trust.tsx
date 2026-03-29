"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, TrendingUp, MessageSquare } from "lucide-react"

const reasons = [
  { icon: Sparkles, label: "nem sablon elemzés" },
  { icon: Target, label: "konkrét példák" },
  { icon: TrendingUp, label: "üzleti szemlélet" },
  { icon: MessageSquare, label: "gyors, érthető visszajelzés" },
]

export function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-12 text-center">
            Miért így dolgozom?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#c9a59a]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-[#c9a59a]" />
                </div>
                <span className="text-lg text-white">{reason.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
