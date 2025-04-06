import { FaExclamationTriangle, FaWrench } from "react-icons/fa"

export function FeatureCard({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div className="collapse-arrow bg-neutral collapse rounded-xl shadow">
      <input type="checkbox" className="min-h-0" />
      <div className="collapse-title p-4">
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="collapse-content space-y-4 px-4">
        <div className="bg-base-200 rounded p-3">
          <p className="mb-1 flex items-center gap-2 text-xs font-bold text-pink-300 uppercase">
            <FaExclamationTriangle className="text-pink-400" />
            The Challenge
          </p>
          <p className="text-gray-400">{problem}</p>
        </div>

        <div className="bg-base-300 rounded p-3">
          <p className="mb-1 flex items-center gap-2 text-xs font-bold text-green-300 uppercase">
            <FaWrench className="text-green-400" />
            The Fix
          </p>
          <p className="text-gray-400">{solution}</p>
        </div>
      </div>
    </div>
  )
}
