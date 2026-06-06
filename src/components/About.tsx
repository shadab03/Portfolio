import { motion } from 'framer-motion'
import { aboutParagraphs, kpis } from '../data'
import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="relative z-10">
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-28">
        <SectionLabel num="01" label="About" />

        <h2 className="font-serif text-[clamp(36px,4vw,56px)] text-white leading-tight mb-16">
          Engineer by craft.<br />
          <em className="text-stroke font-serif">Leader by choice.</em>
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-base text-mid leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </motion.div>

          {/* KPI cards */}
          <div className="flex flex-col gap-0.5">
            {kpis.map((k, i) => (
              <motion.div key={k.label}
                initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-5 px-6 py-5 border border-white/7 bg-surface hover:border-blue/30 hover:bg-surface2 transition-all duration-300 relative overflow-hidden">
                <span className="absolute left-0 inset-y-0 w-0.5 bg-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <span className="font-serif text-3xl text-blue w-20 text-center flex-shrink-0 leading-none">{k.value}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{k.label}</p>
                  <p className="font-mono text-[10px] text-dim tracking-wide">{k.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
