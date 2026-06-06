import { motion } from 'framer-motion'
import { experience } from '../data'
import SectionLabel from './SectionLabel'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="experience" className="relative z-10">
      <div className="max-w-6xl mx-auto px-8 md:px-14 py-28">
        <SectionLabel num="03" label="Experience" />
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] text-white leading-tight mb-16">
          Where I've shipped.
        </h2>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[108px] top-0 bottom-0 w-px bg-gradient-to-b from-blue via-blue/30 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experience.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12">

                {/* Date */}
                <div className="md:text-right pt-1">
                  <p className="font-mono text-sm text-blue font-medium">{exp.year}</p>
                  <p className="font-mono text-[10px] text-dim mt-1 leading-tight">{exp.period.replace(exp.year+' ','').replace(' – ','\n– ')}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-[101px] top-2 w-4 h-4 rounded-full border-2 border-blue bg-bg hidden md:block
                  transition-all duration-300 group-hover:bg-blue group-hover:shadow-[0_0_16px_rgba(59,130,246,0.6)]" />

                {/* Body */}
                <div className="group">
                  <h3 className="font-serif text-2xl text-white mb-1">{exp.role}</h3>
                  <p className="font-mono text-xs text-cyan tracking-[1.5px] uppercase mb-5">
                    {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-mid leading-relaxed">
                        <span className="text-blue mt-1 flex-shrink-0">—</span>
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => (
                      <span key={tag}
                        className="font-mono text-[9px] tracking-[1px] uppercase px-2.5 py-1 bg-blue/8 border border-blue/20 text-blue">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
