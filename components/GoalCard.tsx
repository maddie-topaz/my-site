export function GoalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="panel panel-hover flex items-start gap-4 p-6">
      <div className="text-primary shrink-0 text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <p className="muted mt-1 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
