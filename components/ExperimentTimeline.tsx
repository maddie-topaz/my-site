import { FaChartBar, FaCheckCircle, FaCode, FaComments, FaEye, FaLightbulb, FaSlidersH } from "react-icons/fa"
import { FiActivity, FiBarChart2, FiRadio, FiSliders, FiTarget } from "react-icons/fi"

export const experimentTimelineSteps = [
  {
    title: "Define A Hypothesis",
    desc: (
      <div>
        <p className="muted text-sm leading-relaxed">
          Clearly define what you want to learn. Formulate a{" "}
          <span className="text-primary font-medium">testable hypothesis</span> with a measurable outcome that helps you
          decide what success or failure looks like.
        </p>
        <br />
        <p className="muted text-sm leading-relaxed">
          <span className="text-primary font-medium">Example Scenario</span>
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
      <>
        <p className="muted text-sm leading-relaxed">
          Set up your experiment using Statsig. Define <span className="text-primary font-medium">control</span> and{" "}
          <span className="text-primary font-medium">variant</span> groups,{" "}
          <span className="text-primary font-medium">target</span> the appropriate user segments, and identify the key{" "}
          <span className="text-primary font-medium">metrics</span> you'll analyze.
        </p>
        <p className="muted text-sm leading-relaxed">
          Statsig handles random assignment and <span className="text-primary font-medium">exposure</span> logging once
          your groups are defined.
        </p>
        <br />
        <div className="muted-strong space-y-3 text-sm">
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                icon: <FiSliders />,
                label: "Control Group",
                definition:
                  "The baseline experience, this is what users currently see. All impact is measured against this group.",
              },
              {
                icon: <FiActivity />,
                label: "Variant(s)",
                definition:
                  "The new version(s) being tested. You compare these against the control to determine if your change is effective.",
              },
              {
                icon: <FiTarget />,
                label: "Targeting",
                definition:
                  "Rules that define who sees the experiment, by geography, platform, feature flag, or user segment.",
              },
              {
                icon: <FiBarChart2 />,
                label: "Metrics",
                definition:
                  "Quantitative measurements that indicate success. Common examples include conversion rate, retention, or revenue.",
              },
              {
                icon: <FiRadio />,
                label: "Exposure Events",
                definition:
                  "Events that track when a user is exposed to a feature variant, allowing experiments to accurately measure impact and attribute outcomes.",
              },
            ].map(({ icon, label, definition }, i) => (
              <div key={i} className="panel flex items-start gap-3 p-3">
                <div className="bg-base-300/60 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-base">
                  {icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-medium">{label}</h4>
                  <p className="muted-strong text-[11px] leading-tight">{definition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
    icon: <FaSlidersH />,
  },
  {
    title: "Instrument in Code",
    desc: (
      <div className="muted-strong space-y-2 text-sm">
        <p>
          Use Statsig's SDK to integrate the experiment. Call{" "}
          <code className="bg-base-200 text-primary rounded px-1 py-0.5">getExperiment()</code> or{" "}
          <code className="bg-base-200 text-primary rounded px-1 py-0.5">getConfig()</code> to control logic in your
          product based on user assignment.
        </p>
      </div>
    ),
    icon: <FaCode />,
  },
  {
    title: "Track Metrics",
    desc: (
      <p className="muted text-sm leading-relaxed">
        Ensure all <span className="text-primary font-medium">exposure events</span> and relevant metrics are properly
        logged. This provides the data needed to evaluate your experiment's impact.
      </p>
    ),
    icon: <FaChartBar />,
  },
  {
    title: "Monitor Results",
    desc: (
      <p className="muted text-sm leading-relaxed">
        Use Statsig's dashboard to watch experiment performance. Compare metrics between variants, look for{" "}
        <span className="text-primary font-medium">significant differences</span>, and assess impact.
      </p>
    ),
    icon: <FaEye />,
  },
  {
    title: "Make a Decision",
    desc: (
      <p className="muted text-sm leading-relaxed">
        Interpret the results. Decide whether to ship the change, roll it back, or iterate. Back your decision with{" "}
        <span className="text-primary font-medium">data from the experiment</span>.
      </p>
    ),
    icon: <FaCheckCircle />,
  },
  {
    title: "Share Learnings",
    desc: (
      <p className="muted text-sm leading-relaxed">
        Document the experiment's outcomes, insights, and decisions. Share findings with your team to support{" "}
        <span className="text-primary font-medium">collective learning</span> and future initiatives.
      </p>
    ),
    icon: <FaComments />,
  },
]
