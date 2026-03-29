"use client"

import { motion } from "framer-motion"
import { Send, Search, FileText, Wrench } from "lucide-react"

const steps = [
  { number: "1", title: "Küldöd az oldalad", icon: Send, description: "Megadod a weboldal címét" },
  { number: "2", title: "Átnézem", icon: Search, description: "Részletesen elemzem" },
  { number: "3", title: "Megmutatom", icon: FileText, description: "Összefoglalom a fő problémákat" },
  { number: "4", title: "Segítek javítani", icon: Wrench, description: "Ha szeretnéd, segítek" },
]

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-16 text-foreground text-center">
            Így működik
          </h2>
          
          {/* Horizontal Stepper - Desktop */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />
            
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-24 h-24 bg-[#c9a59a] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#c9a59a]/20">
                    <step.icon className="w-10 h-10 text-[#0a0a0a]" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Vertical Stepper - Mobile */}
          <div className="lg:hidden relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <div className="relative z-10 w-16 h-16 bg-[#c9a59a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a59a]/20">
                    <step.icon className="w-7 h-7 text-[#0a0a0a]" />
                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
