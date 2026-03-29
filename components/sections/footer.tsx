"use client"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🩺</span>
            <span className="font-medium text-foreground">Weboldal Doktor</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Weboldal Doktor. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  )
}
