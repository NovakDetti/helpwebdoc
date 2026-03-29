"use client"

import { motion } from "framer-motion"

export function Results() {
  return (
    <section id="eredmenyek" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-16 text-foreground text-center">
            Miért számít ez?
          </h2>
          
          {/* Bar Chart Visualization */}
          <div className="max-w-md mx-auto mb-12">
            <div className="space-y-8">
              {/* Before bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Előtte</span>
                </div>
                <div className="h-12 bg-secondary rounded-lg overflow-hidden">
                  <motion.div 
                    className="h-full bg-foreground/20 rounded-lg flex items-center justify-end pr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="text-xs text-foreground/60">alacsony</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* After bar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#c9a59a]">Utána</span>
                </div>
                <div className="h-12 bg-secondary rounded-lg overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#c9a59a] rounded-lg flex items-center justify-end pr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-xs text-[#0a0a0a] font-medium">magasabb</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Y-axis label */}
            <div className="mt-4 text-center">
              <span className="text-sm text-muted-foreground">Konverziós ráta</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <motion.div 
            className="text-center p-6 bg-secondary/50 rounded-xl border border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              Az eredmény weboldalanként eltérő. A javulás mértéke függ az oldal jelenlegi állapotától,
              a forgalomtól és az iparágtól.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
