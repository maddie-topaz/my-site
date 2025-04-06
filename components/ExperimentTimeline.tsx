import { FaChartBar, FaCheckCircle, FaCode, FaComments, FaEye, FaLightbulb, FaSlidersH } from "react-icons/fa"

export const experimentTimelineSteps = [
  {
    title: "Define A Hypothesis",
    desc: (
      <div>
        <p className="text-sm text-gray-400">
          Clearly define what you want to learn. Formulate a{" "}
          <span className="font-medium text-blue-400">testable hypothesis</span> with a measurable outcome that helps
          you decide what success or failure looks like.
        </p>
        <br />
        <p className="text-sm text-gray-400">
          <span className="font-medium text-blue-400">🔍 Example Scenario</span>
          <br />
          You’re working on a SaaS app and want to test whether changing the primary CTA button from “Start Free Trial”
          to “Get Started Now” improves sign-up conversion.
        </p>
      </div>
    ),
    icon: <FaLightbulb />,
  },
  {
    title: "Create Experiment",
    desc: (
      <div className="space-y-3 text-sm text-gray-300">
        <p>
          Set up your experiment using Statsig. Define control and variant groups, target the appropriate user segments,
          and identify the key metrics you'll analyze.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {[
            {
              icon: "🎛️",
              label: "Control Group",
              definition:
                "The baseline experience — this is what users currently see. All impact is measured against this group.",
            },
            {
              icon: "🧪",
              label: "Variant(s)",
              definition:
                "The new version(s) being tested. You compare these against the control to determine if your change is effective.",
            },
            {
              icon: "🎯",
              label: "Targeting",
              definition:
                "Rules that define who sees the experiment — by geography, platform, feature flag, or user segment.",
            },
            {
              icon: "📊",
              label: "Metrics",
              definition:
                "Quantitative measurements that indicate success. Common examples include conversion rate, retention, or revenue.",
            },
          ].map(({ icon, label, definition }, i) => (
            <div key={i} className="bg-base-200 flex items-start gap-3 rounded-lg border border-gray-700 p-3">
              <div className="bg-base-300 border-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg text-white shadow-inner">
                {icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-medium text-white">{label}</h4>
                <p className="text-[11px] leading-tight text-gray-400">{definition}</p>
              </div>
            </div>
          ))}
        </div>

        <p>Statsig handles random assignment and exposure logging once your groups are defined.</p>
      </div>
    ),
    icon: <FaSlidersH />,
  },
  {
    title: "Instrument in Code",
    desc: (
      <p className="text-sm text-gray-400">
        Use Statsig's SDK to integrate the experiment. Call{" "}
        <code className="bg-base-200 rounded px-1 py-0.5 text-blue-400">{"getExperiment()"}</code> or{" "}
        <code className="bg-base-200 rounded px-1 py-0.5 text-blue-400">{"getConfig()"}</code> to control logic in your
        product based on user assignment.
      </p>
    ),
    icon: <FaCode />,
  },
  {
    title: "Track Metrics",
    desc: (
      <p className="text-sm text-gray-400">
        Ensure all <span className="font-medium text-blue-400">exposure events</span> and relevant metrics are properly
        logged. This provides the data needed to evaluate your experiment's impact.
      </p>
    ),
    icon: <FaChartBar />,
  },
  {
    title: "Monitor Results",
    desc: (
      <p className="text-sm text-gray-400">
        Use Statsig's dashboard to watch experiment performance. Compare metrics between variants, look for{" "}
        <span className="font-medium text-blue-400">significant differences</span>, and assess impact.
      </p>
    ),
    icon: <FaEye />,
  },
  {
    title: "Make a Decision",
    desc: (
      <p className="text-sm text-gray-400">
        Interpret the results. Decide whether to ship the change, roll it back, or iterate. Back your decision with{" "}
        <span className="font-medium text-blue-400">data from the experiment</span>.
      </p>
    ),
    icon: <FaCheckCircle />,
  },
  {
    title: "Share Learnings",
    desc: (
      <p className="text-sm text-gray-400">
        Document the experiment's outcomes, insights, and decisions. Share findings with your team to support{" "}
        <span className="font-medium text-blue-400">collective learning</span> and future initiatives.
      </p>
    ),
    icon: <FaComments />,
  },
]
