import { motion } from 'framer-motion'
import { certifications } from '../data'
import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

export default function Certifications() {
  const { ref, inView } = useInView()

  return (
    <section id="certifications" className="relative z-10 bg-surface border-y border-white/7">
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-28">
        <SectionLabel num="04" label="Certifications" />
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] text-white leading-tight mb-14">
          Verified credentials.
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7">
          {certifications.map((cert, i) => (
            <motion.div key={cert.code}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-bg p-9 hover:bg-surface2 transition-colors duration-300 overflow-hidden">
              {/* Top accent line */}
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue to-cyan" />

              <span className="text-4xl mb-5 block">{cert.badge}</span>
              <p className="font-mono text-sm font-semibold text-blue tracking-[2px] uppercase mb-2">{cert.code}</p>
              <p className="text-base font-semibold text-white leading-snug mb-2">{cert.name}</p>
              <p className="font-mono text-[10px] text-dim tracking-wide">{cert.issuer} · Active</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
