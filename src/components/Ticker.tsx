import { ticker } from '../data'

export default function Ticker() {
  const doubled = [...ticker, ...ticker]
  return (
    <div className="overflow-hidden border-y border-white/7 bg-surface py-3.5">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[10px] tracking-[2px] uppercase text-dim px-8 border-r border-white/7 flex-shrink-0">
            {item} <span className="text-blue">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
