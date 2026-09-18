import { FaExclamationTriangle, FaWrench } from "react-icons/fa"

export function FeatureCard({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div className="collapse-arrow panel collapse">
      <input type="checkbox" className="min-h-0" />
      <div className="collapse-title p-5">
        <h3 className="font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="collapse-content space-y-3 px-5">
        <div className="bg-base-300/40 rounded-md p-4">
          <p className="text-warning mb-1 flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase">
            <FaExclamationTriangle aria-hidden />
            The challenge
          </p>
          <p className="muted-strong text-sm leading-relaxed">{problem}</p>
        </div>

        <div className="bg-base-300/40 rounded-md p-4">
          <p className="text-success mb-1 flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase">
            <FaWrench aria-hidden />
            The fix
          </p>
          <p className="muted-strong text-sm leading-relaxed">{solution}</p>
        </div>
      </div>
    </div>
  )
}
