interface Props { num: string; label: string }

export default function SectionLabel({ num, label }: Props) {
  return (
    <div className="flex items-center gap-4 mb-14 font-mono text-[10px] text-blue tracking-[3px] uppercase">
      <span className="w-6 h-px bg-blue flex-shrink-0" />
      {num} — {label}
      <span className="flex-1 h-px bg-white/7" />
    </div>
  )
}
