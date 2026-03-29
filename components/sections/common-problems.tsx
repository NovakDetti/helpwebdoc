"use client"

import { motion } from "framer-motion"
import { HelpCircle, Layers, Eye, Navigation, Zap, Smartphone } from "lucide-react"

const problems = [
  { 
    icon: HelpCircle, 
    title: "Nem derül ki, miről szól",
    description: "A látogató 3 másodperc alatt eldönti, marad-e"
  },
  { 
    icon: Layers, 
    title: "Túl bonyolult",
    description: "Túl sok információ, nincs fókusz"
  },
  { 
    icon: Eye, 
    title: "Szép, de nem segít",
    description: "Design van, de nem vezeti a látogatót"
  },
  { 
    icon: Navigation, 
    title: "Nehezen átlátható",
    description: "Nem világos, merre tovább"
  },
  { 
    icon: Zap, 
    title: "Lassú betöltés",
    description: "Minden másodperc csökkenti a konverziót"
  },
  { 
    icon: Smartphone, 
    title: "Mobilon problémás",
    description: "A forgalom 60-70%-a mobilról jön"
  },
]

export function CommonProblems() {
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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground text-center">
            Hol veszítesz el embereket?
          </h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Ezek a leggyakoribb problémák, amiket látok:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-secondary border border-border rounded-xl hover:border-[#c9a59a]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {/* Icon with background */}
                <div className="w-14 h-14 rounded-xl bg-[#c9a59a]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a59a]/20 transition-colors">
                  <problem.icon className="h-7 w-7 text-[#c9a59a]" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="mt-16 text-lg text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ha ezek közül több is igaz,{" "}
            <span className="text-foreground font-medium">érdemes átnézni az oldalad.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
