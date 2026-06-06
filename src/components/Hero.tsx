import { motion } from 'framer-motion'
import { personal, stats } from '../data'

const fade  = (delay: number) => ({ hidden:{ opacity:0, y:24 }, show:{ opacity:1, y:0, transition:{ duration:0.7, delay } } })
const fadeI = (delay: number) => ({ hidden:{ opacity:0 },        show:{ opacity:1,      transition:{ duration:0.7, delay } } })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-8 md:px-14 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glows */}
      <div className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Availability badge */}
        <motion.div variants={fade(0.1)} initial="hidden" animate="show"
          className="flex items-center gap-3 font-mono text-[10px] text-blue tracking-[3px] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse2 inline-block" />
          {personal.availabilityText}
        </motion.div>

        {/* Name */}
        <motion.h1 variants={fade(0.25)} initial="hidden" animate="show"
          className="font-serif text-[clamp(52px,8vw,100px)] leading-none text-white mb-2">
          {personal.name.split(' ')[0]}<br />
          <em className="text-stroke font-serif">{personal.name.split(' ')[1]}.</em>
        </motion.h1>

        {/* Title */}
        <motion.p variants={fade(0.4)} initial="hidden" animate="show"
          className="font-mono text-sm text-cyan tracking-[3px] uppercase mb-8">
          {personal.title} · {personal.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p variants={fade(0.55)} initial="hidden" animate="show"
          className="text-lg text-mid leading-relaxed max-w-xl mb-12">
          {personal.tagline}
          <span className="text-slate-400"> {personal.description}</span>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fade(0.7)} initial="hidden" animate="show"
          className="flex flex-wrap gap-4">
          <a href="#experience"
            className="group relative inline-flex items-center gap-2 bg-blue text-white font-mono text-xs tracking-[2px] uppercase px-7 py-3.5 overflow-hidden transition-all hover:-translate-y-0.5">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            View My Work ↓
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 border border-blue/30 text-blue font-mono text-xs tracking-[2px] uppercase px-7 py-3.5 hover:bg-blue/10 hover:border-blue transition-all hover:-translate-y-0.5">
            Get In Touch →
          </a>
        </motion.div>
      </div>

      {/* Stats column */}
      <motion.div variants={fadeI(1.0)} initial="hidden" animate="show"
        className="absolute right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-0.5">
        {stats.map((s) => (
          <div key={s.label}
            className="group px-8 py-6 border border-white/7 glass text-center hover:border-blue/30 transition-colors duration-300 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-serif text-4xl text-white leading-none block">{s.value}</span>
            <span className="font-mono text-[9px] text-blue tracking-[2px] uppercase">{s.unit}</span>
            <span className="font-mono text-[9px] text-dim block mt-1">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div variants={fadeI(1.4)} initial="hidden" animate="show"
        className="absolute bottom-10 left-14 hidden md:flex items-end gap-3">
        <div className="w-px h-10 relative overflow-hidden bg-blue/20">
          <div className="absolute inset-x-0 top-0 h-2/5 bg-blue animate-scrollDown" />
        </div>
        <span className="font-mono text-[9px] text-dim tracking-[2px] uppercase [writing-mode:vertical-rl]">Scroll</span>
      </motion.div>
    </section>
  )
}
