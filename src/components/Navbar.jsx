import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
            <span className="font-semibold tracking-tight">Coins Guard</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-cyan-600">Start</Link>
            <Link to="/services" className="hover:text-cyan-600">Leistungen</Link>
            <Link to="/about" className="hover:text-cyan-600">Über uns</Link>
            <Link to="/contact" className="hover:text-cyan-600">Kontakt</Link>
            <Link to="/anfrage" className="px-3 py-1.5 rounded-md bg-cyan-600 text-white hover:bg-cyan-500">Recovery-Anfrage</Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 space-y-2">
            <Link onClick={() => setOpen(false)} to="/" className="block">Start</Link>
            <Link onClick={() => setOpen(false)} to="/services" className="block">Leistungen</Link>
            <Link onClick={() => setOpen(false)} to="/about" className="block">Über uns</Link>
            <Link onClick={() => setOpen(false)} to="/contact" className="block">Kontakt</Link>
            <Link onClick={() => setOpen(false)} to="/anfrage" className="block">Recovery-Anfrage</Link>
          </div>
        )}
      </div>
    </header>
  )
}
