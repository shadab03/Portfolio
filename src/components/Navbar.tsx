import { useState, useEffect } from 'react'
import { personal } from '../data'

const links = ['About', 'Stack', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      let cur = ''
      sections.forEach(s => { if (s && window.scrollY >= s.offsetTop - 120) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-14 py-4 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 shadow-xl' : 'bg-transparent'}`}>
      {/* Logo */}
      <span className="font-mono text-xs text-blue tracking-[3px] uppercase">
        SS<span className="text-dim">/</span>portfolio
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {links.map(l => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className={`font-mono text-[10px] tracking-[2px] uppercase transition-colors duration-200 relative group ${active === l.toLowerCase() ? 'text-blue' : 'text-dim hover:text-mid'}`}
          >
            {l}
            <span className={`absolute -bottom-1 left-0 right-0 h-px bg-blue transition-transform duration-300 origin-left ${active === l.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </button>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`mailto:${personal.email}`}
        className="hidden md:inline-block font-mono text-[10px] tracking-[2px] uppercase bg-blue text-bg px-5 py-2.5 hover:bg-cyan transition-colors duration-200"
      >
        Hire Me →
      </a>

      {/* Mobile hamburger */}
      <button className="md:hidden text-dim" onClick={() => setMenuOpen(o => !o)}>
        <div className="space-y-1.5">
          <span className={`block w-6 h-px bg-mid transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-mid transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-mid transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-white/5 flex flex-col gap-0 md:hidden">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="font-mono text-[11px] tracking-[2px] uppercase text-mid hover:text-blue hover:bg-white/5 px-8 py-4 text-left transition-colors">
              {l}
            </button>
          ))}
          <a href={`mailto:${personal.email}`}
            className="font-mono text-[11px] tracking-[2px] uppercase text-bg bg-blue px-8 py-4 text-left">
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  )
}
