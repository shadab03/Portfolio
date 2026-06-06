import { motion } from 'framer-motion'
import { stack } from '../data'
import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

export default function Stack() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="stack" className="relative z-10 bg-surface border-y border-white/7">
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-28">
        <SectionLabel num="02" label="Technical Stack" />
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] text-white leading-tight mb-4">What I build with.</h2>
        <p className="text-base text-mid max-w-xl mb-14 leading-relaxed">
          Hands-on across the full stack — from database schema to CI/CD pipeline to production monitoring.
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7">
          {stack.map((item, i) => (
            <motion.div key={item.name}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-bg p-8 hover:bg-surface2 transition-colors duration-300 overflow-hidden">
              {/* Bottom highlight */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue to-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <span className="text-2xl mb-4 block">{item.icon}</span>
              <p className="font-mono text-[9px] text-blue tracking-[2px] uppercase mb-1.5">{item.category}</p>
              <p className="text-base font-bold text-white mb-4">{item.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map(tag => (
                  <span key={tag}
                    className="font-mono text-[9px] tracking-[1px] uppercase px-2.5 py-1 border border-white/7 text-dim group-hover:border-blue/25 group-hover:text-mid transition-colors duration-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
