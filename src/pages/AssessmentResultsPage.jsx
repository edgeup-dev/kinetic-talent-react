import { Link } from 'react-router-dom';

export default function AssessmentResultsPage() {
  return (
    <div className="pb-12 px-6 md:px-12 max-w-[1920px] mx-auto">
      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8">
        <div>
          <nav className="flex items-center gap-2 mb-4 text-label-sm uppercase tracking-[0.05em] text-on-surface-variant font-semibold">
            <span>Talent Pool</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>Senior Product Designer</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Assessment Result</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface mb-2">
            Alex Rivera
          </h1>
          <p className="text-on-surface-variant text-lg">
            Senior Product Designer &bull; 8+ Years Experience
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container-high text-primary-fixed px-6 py-3 rounded-lg font-medium hover:bg-surface-bright transition-all active:scale-95 flex items-center gap-2">
            <span className="material-symbols-outlined">share</span>
            Share with Companies
          </button>
          <Link
            to="/recommendations"
            className="bg-gradient-to-br from-primary to-on-primary-container text-on-primary-fixed px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg flex items-center gap-2"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              visibility
            </span>
            View Matches
          </Link>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Overall Score Gauge */}
        <section className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
          <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-8">
            Kinetic Score Index
          </h3>
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Gauge SVG */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-surface-container-lowest"
                cx="128"
                cy="128"
                fill="transparent"
                r="110"
                stroke="currentColor"
                strokeWidth="12"
              />
              <circle
                className="text-on-primary-container"
                cx="128"
                cy="128"
                fill="transparent"
                r="110"
                stroke="currentColor"
                strokeDasharray="691"
                strokeDashoffset="41"
                strokeLinecap="round"
                strokeWidth="12"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-7xl font-extrabold font-headline tracking-tighter text-gradient">
                94
              </span>
              <span className="text-xl font-bold text-tertiary">A+</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-on-surface-variant text-sm mb-1">Performance Status</p>
            <p className="text-on-surface font-semibold text-lg">Top Tier Excellence</p>
          </div>
        </section>

        {/* Radar Chart Analysis */}
        <section className="md:col-span-5 bg-surface-container-low rounded-xl p-8 relative">
          <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-8">
            Competency Breakdown
          </h3>
          <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
            {/* Simple CSS/SVG Radar Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-full border border-outline-variant/30 rounded-full"></div>
              <div className="absolute w-3/4 h-3/4 border border-outline-variant/30 rounded-full"></div>
              <div className="absolute w-1/2 h-1/2 border border-outline-variant/30 rounded-full"></div>
            </div>
            <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 100 100">
              <polygon
                fill="none"
                points="50,10 90,40 75,85 25,85 10,40"
                stroke="#45464d"
                strokeWidth="0.5"
              />
              <polygon
                fill="rgba(173, 198, 255, 0.2)"
                points="50,15 85,38 72,80 30,78 15,45"
                stroke="#adc6ff"
                strokeWidth="1.5"
              />
            </svg>
            {/* Labels */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-xs font-bold text-primary">
              PASCO
            </div>
            <div className="absolute top-[35%] right-0 translate-x-4 text-xs font-bold text-on-surface-variant">
              TECHNICAL
            </div>
            <div className="absolute bottom-0 right-[15%] translate-y-4 text-xs font-bold text-on-surface-variant">
              HR FIT
            </div>
            <div className="absolute bottom-0 left-[15%] translate-y-4 text-xs font-bold text-on-surface-variant">
              COGNITIVE
            </div>
            <div className="absolute top-[35%] left-0 -translate-x-4 text-xs font-bold text-on-surface-variant">
              ADAPTABILITY
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <p className="text-[0.6875rem] text-on-surface-variant uppercase font-bold tracking-wider">
                PASCO
              </p>
              <p className="text-lg font-bold text-primary">9.8</p>
            </div>
            <div className="text-center">
              <p className="text-[0.6875rem] text-on-surface-variant uppercase font-bold tracking-wider">
                Technical
              </p>
              <p className="text-lg font-bold text-on-surface">9.2</p>
            </div>
            <div className="text-center">
              <p className="text-[0.6875rem] text-on-surface-variant uppercase font-bold tracking-wider">
                HR Breakdown
              </p>
              <p className="text-lg font-bold text-on-surface">8.9</p>
            </div>
          </div>
        </section>

        {/* Percentile Metric */}
        <section className="md:col-span-3 bg-surface-container rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-6">
              Market Standing
            </h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-extrabold text-on-surface">
                92<span className="text-2xl">%</span>
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Higher than 92% of peers in the Senior Design category worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[92%] rounded-full shadow-[0_0_12px_rgba(173,198,255,0.5)]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-outline-variant uppercase tracking-tighter">
              <span>Bottom 0%</span>
              <span>Global Median</span>
              <span>Top 92%</span>
            </div>
          </div>
        </section>

        {/* AI Narrative Feedback */}
        <section className="md:col-span-8 bg-surface-container-high rounded-xl p-10 flex flex-col gap-6 border-l-4 border-primary">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <h3 className="text-xl font-bold font-headline text-on-surface">
              AI Synthesis Feedback
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Alex demonstrates a{' '}
              <span className="text-primary font-medium">rare synergy</span> between high-fidelity
              technical execution and strategic product thinking. Their performance in the PASCO
              (Problem-solving, Adaptability, Synthesis, Communication, Ownership) module was
              particularly notable, placing them in the 99th percentile for{' '}
              <span className="italic">Synthesis of Complex Data</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="bg-surface-container-lowest/50 p-6 rounded-lg">
                <h4 className="text-tertiary font-bold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Core Strengths
                </h4>
                <ul className="text-sm space-y-2 text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    &bull; Exceptional spatial reasoning in UI architecture
                  </li>
                  <li className="flex items-start gap-2">
                    &bull; High emotional intelligence in collaborative scenarios
                  </li>
                  <li className="flex items-start gap-2">
                    &bull; Rapid iteration speed under tight constraints
                  </li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest/50 p-6 rounded-lg">
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">lightbulb</span>
                  Growth Potential
                </h4>
                <ul className="text-sm space-y-2 text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    &bull; Advanced stakeholder management refinement
                  </li>
                  <li className="flex items-start gap-2">
                    &bull; Potential for leadership/management tracks
                  </li>
                  <li className="flex items-start gap-2">
                    &bull; Expansion into complex AI-driven design systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Card */}
        <section className="md:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold mb-4">
              Assessment Meta
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                <span className="text-sm text-on-surface-variant">Duration</span>
                <span className="text-sm font-semibold">1h 45m</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                <span className="text-sm text-on-surface-variant">Date Taken</span>
                <span className="text-sm font-semibold">Oct 24, 2023</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-on-surface-variant">Verification</span>
                <span className="flex items-center gap-1 text-xs font-bold text-tertiary bg-tertiary-container px-2 py-0.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                  AUTHENTICATED
                </span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBTl1-EI2kmkywsdFIJ33kKlnZAU7TgIuTJTB4RfoITBBl75UMNbTjy7Z3b5NMBpxWfbDpdyHqoM_d0xXQ-u0VKfjpaiqfT7MAG2QwpNM6H27t7pOsrAiodVOxMSUjUhfIZBPbV-f3HcEfRBtOXCFJF4xGISuFbyrOkh3FbE2olcUi6QSvgguOpMMlJf7QQsdmIXrD3yli-X12gcQVcci_vOOZOzaUqnQ6_-tircazaM6FV4_MWQ-A8ag4Gr6wliPu4dzLwQo0O1du"
              alt="Modern tech office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-bold text-primary uppercase mb-1">Company Interest</p>
              <p className="text-sm text-on-surface font-medium">
                Currently shortlisted by 12 Tier-1 companies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
