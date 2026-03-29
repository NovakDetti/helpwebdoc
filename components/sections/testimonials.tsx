"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Végre valaki, aki nem technikai zsizsikben beszél. Egyértelmű volt, mit kell javítani.",
    author: "K. Petra",
    role: "Webshop tulajdonos"
  },
  {
    quote: "Az elemzés után azonnal láttam, miért nem jönnek a megrendelések. Köszönöm!",
    author: "V. Gábor",
    role: "Szolgáltató"
  },
  {
    quote: "Professzionális, gyors, lényegre törő. Pont, amit kerestem.",
    author: "M. Eszter",
    role: "Vállalkozó"
  }
]

export function Testimonials() {
  return (
    <section id="velemenyek" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-secondary rounded-2xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="h-8 w-8 text-[#c9a59a] mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
