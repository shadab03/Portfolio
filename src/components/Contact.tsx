import { motion } from 'framer-motion'
import { personal } from '../data'
import { useInView } from '../hooks/useInView'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="relative z-10 bg-surface border-t border-white/7">
      <div className="max-w-3xl mx-auto px-8 md:px-14 py-28 text-center">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          <span className="font-mono text-[10px] text-blue tracking-[3px] uppercase block mb-6">
            05 — Let's work together
          </span>

          <h2 className="font-serif text-[clamp(40px,5vw,68px)] text-white leading-tight mb-5">
            Ready to build<br />
            <em className="text-stroke font-serif">something great?</em>
          </h2>

          <p className="text-base text-mid leading-relaxed mb-12 max-w-xl mx-auto">
            I'm open to Senior Technical Lead and Engineering Lead opportunities across the GCC —
            on-site in Riyadh or hybrid. If you're building something ambitious and need a lead
            who can architect it and ship it, let's talk.
          </p>

          <a href={`mailto:${personal.email}`}
            className="font-mono text-xl text-blue border-b border-blue/40 pb-1 hover:text-cyan hover:border-cyan transition-colors duration-200 inline-block mb-12">
            {personal.email}
          </a>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase text-dim border border-white/7 px-5 py-3 hover:text-blue hover:border-blue/30 hover:bg-blue/5 transition-all duration-200">
              <Linkedin size={13} /> LinkedIn ↗
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase text-dim border border-white/7 px-5 py-3 hover:text-blue hover:border-blue/30 hover:bg-blue/5 transition-all duration-200">
              <Github size={13} /> GitHub ↗
            </a>
            <a href={`tel:${personal.phone}`}
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase text-dim border border-white/7 px-5 py-3 hover:text-blue hover:border-blue/30 hover:bg-blue/5 transition-all duration-200">
              <Phone size={13} /> {personal.phone}
            </a>
            <a href={`mailto:${personal.email}`}
              className="flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] uppercase text-dim border border-white/7 px-5 py-3 hover:text-blue hover:border-blue/30 hover:bg-blue/5 transition-all duration-200">
              <Mail size={13} /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
