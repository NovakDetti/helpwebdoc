"use client"

import { motion } from "framer-motion"

export function ConversionStory() {
  const stages = [
    { count: 100, label: "látogató érkezik", color: "bg-white", width: "100%" },
    { count: 70, label: "kilép azonnal", color: "bg-red-400/80", width: "70%", negative: true },
    { count: 20, label: "nézelődik", color: "bg-white/60", width: "20%" },
    { count: 10, label: "cselekszik", color: "bg-[#c9a59a]", width: "10%", highlight: true },
  ]

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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-center text-balance">
            100 látogató = mi történik?
          </h2>
          
          <p className="text-center text-white/60 mb-16 text-lg">
            Egy tipikus weboldalnál így néz ki a valóság:
          </p>
          
          {/* Funnel Visualization */}
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Arrow indicator */}
                  <div className="relative z-10 w-16 flex-shrink-0 flex items-center justify-center">
                    {index > 0 && (
                      <svg className="absolute -top-6 w-4 h-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    )}
                    <div className={`w-4 h-4 rounded-full ${stage.highlight ? 'bg-[#c9a59a]' : stage.negative ? 'bg-red-400/60' : 'bg-white/40'}`} />
                  </div>
                  
                  {/* Bar */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className={`text-3xl sm:text-4xl font-bold ${stage.highlight ? 'text-[#c9a59a]' : stage.negative ? 'text-red-400' : 'text-white'}`}>
                        {stage.count}
                      </span>
                      <span className={`text-lg ${stage.highlight ? 'text-[#c9a59a]' : stage.negative ? 'text-red-400/80' : 'text-white/60'}`}>
                        {stage.label}
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${stage.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: stage.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-16 p-8 bg-[#c9a59a]/10 border border-[#c9a59a]/20 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl sm:text-2xl font-serif text-[#c9a59a]">
              Nem több látogató kell – hanem egy jobban működő oldal.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
