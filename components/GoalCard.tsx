export function GoalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-base-200 flex items-center gap-4 rounded-lg p-6 shadow">
      <div className="flex-shrink-0 text-4xl text-gray-600">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  )
}
