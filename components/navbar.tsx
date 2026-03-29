"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Hogyan működik", href: "#hogyan-mukodik" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Eredmények", href: "#eredmenyek" },
  { label: "Vélemények", href: "#velemenyek" },
  { label: "Kapcsolat", href: "#contact-form" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleClick("#hero")}
            className="flex items-center gap-2.5 group"
          >
            <span className="text-xl">🩺</span>
            <span className="font-serif text-white font-medium tracking-wide text-lg group-hover:text-[#c9a59a] transition-colors duration-300">
              Weboldal Doktor
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#c9a59a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact-form")}
              className="ml-4 px-5 py-2 text-sm font-semibold bg-[#c9a59a]/15 hover:bg-[#c9a59a]/25 text-[#c9a59a] border border-[#c9a59a]/30 hover:border-[#c9a59a]/60 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Diagnózist kérek
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white/70 hover:text-white transition-colors"
            aria-label="Menü"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-4 right-4 z-40 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact-form")}
                className="mt-2 px-4 py-3 text-sm font-semibold bg-[#c9a59a]/15 hover:bg-[#c9a59a]/25 text-[#c9a59a] border border-[#c9a59a]/30 rounded-xl transition-all duration-200"
              >
                Diagnózist kérek
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
