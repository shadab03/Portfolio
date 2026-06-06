import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/7 px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
      <span className="font-mono text-[10px] text-dim tracking-wide">
        © 2026 {personal.name} — {personal.location}
      </span>
      <span className="font-mono text-[10px] text-dim tracking-wide">
        Built with React + Vite + Tailwind ·{' '}
        <span className="text-blue">AZ-305 · AZ-204 · AWS CCP</span>
      </span>
    </footer>
  )
}
