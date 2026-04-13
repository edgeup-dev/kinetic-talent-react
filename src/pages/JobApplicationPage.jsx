import { Link } from 'react-router-dom';

export default function JobApplicationPage() {
  return (
    <div className="bg-surface overflow-x-hidden min-h-screen">
      <main className="pt-8 pb-20 max-w-4xl mx-auto px-6">
        {/* Progress Stepper */}
        <nav className="mb-12 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-surface-container-highest -z-10"></div>
          {/* Step 1: Active */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-on-primary bg-primary font-bold shadow-lg shadow-primary/20 transition-all">1</div>
            <span className="text-xs font-semibold tracking-wider text-primary">REVIEW PROFILE</span>
          </div>
          {/* Step 2: Upcoming */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant bg-surface-container-high font-bold">2</div>
            <span className="text-xs font-semibold tracking-wider text-on-surface-variant">SUBMISSION</span>
          </div>
          {/* Step 3: Upcoming */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant bg-surface-container-high font-bold">3</div>
            <span className="text-xs font-semibold tracking-wider text-on-surface-variant">ASSESSMENT</span>
          </div>
        </nav>

        {/* Content Canvas */}
        <div className="space-y-8">
          {/* Step Header */}
          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-on-surface">Step 1: Review Your Profile</h1>
            <p className="text-on-surface-variant text-lg">We've pulled your latest details. Please ensure everything is up to date before proceeding.</p>
          </header>

          {/* Bento Grid Section: Profile Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Info Card */}
            <div className="md:col-span-2 bg-surface-container-high rounded-xl p-8 transition-all hover:bg-surface-bright/50">
              <div className="flex items-start gap-6">
                <img
                  alt="Profile"
                  className="w-24 h-24 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDykD0lt62Ase6PlI2LCEVWSxl48A92puzx87xl3JVyeCg_-1Q1p27oy2bSAYZ-1a9ULxNe3fOaEtsortzsqh2Pwho-l5dC-naH6HPJwnJ_d6j8H8r6viF1091_6VKns3SipeFAI1LtDc--yqSA3B6Z5KlujW4JUimTwpV8r58Q4Kh-bxYl9qxhxR4wJ5_R9cq_CwQi2jZc7WD0-a0iTUjnFeAll0FUMDFXWAelXDBjKBdiYq-Nc0xrN-axwJK-_IsN0vugSmF6qZ0u"
                />
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-on-surface">Alexandria Sterling</h2>
                  <p className="text-primary font-medium">Lead UI/UX Architect</p>
                  <div className="flex items-center gap-4 pt-2 text-on-surface-variant text-sm">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">location_on</span> San Francisco, CA</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">mail</span> a.sterling@kinetic.io</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/15">
                <h3 className="text-xs font-bold text-primary tracking-widest mb-4">PROFESSIONAL SUMMARY</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Architecting digital ecosystems for 8+ years. Specialized in high-performance SaaS platforms and data-rich interfaces. Passionate about bridging the gap between sophisticated aesthetics and technical feasibility.
                </p>
              </div>
            </div>

            {/* Secondary Info Card: Stats/Labels */}
            <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-primary tracking-widest mb-6">QUICK STATS</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                    <span className="text-on-surface-variant text-sm">Experience</span>
                    <span className="text-on-surface font-semibold">8.5 Yrs</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                    <span className="text-on-surface-variant text-sm">Availability</span>
                    <span className="text-on-surface font-semibold">Immediate</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                    <span className="text-on-surface-variant text-sm">Projects</span>
                    <span className="text-on-surface font-semibold">42+</span>
                  </div>
                </div>
              </div>
              <Link to="/candidate-settings" className="mt-6 flex items-center justify-center gap-2 py-3 bg-surface-container-highest text-primary rounded-lg text-sm font-semibold transition-all hover:bg-surface-bright active:scale-95">
                <span className="material-symbols-outlined text-[18px]">edit</span>
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Experience Snippet */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
            <h3 className="text-xs font-bold text-primary tracking-widest mb-6 uppercase">Key Competencies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-sm font-medium">Design Systems</span>
              <span className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-sm font-medium">Tailwind CSS Expert</span>
              <span className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-sm font-medium">React Frameworks</span>
              <span className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-sm font-medium">Strategic Product Design</span>
              <span className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-sm font-medium">User Research</span>
              <span className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg text-sm font-medium">Bento Layouts</span>
            </div>
          </div>

          {/* Step 2 Preview: Floating Ghost Card */}
          <div className="relative overflow-hidden group rounded-xl bg-surface-container-high p-8 border border-primary/5">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-on-surface">Next Up: Documentation</h3>
                <p className="text-on-surface-variant">Prepare your tailored cover letter and portfolio links.</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary-fixed border border-primary/20">
                <span className="material-symbols-outlined">description</span>
              </div>
            </div>
            {/* Abstract visual element */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          </div>

          {/* Footer Action Bar */}
          <footer className="pt-8 flex items-center justify-between">
            <Link to="/job-board" className="text-on-surface-variant hover:text-on-surface flex items-center gap-2 font-medium transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Exit Application
            </Link>
            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-br from-[#ADC6FF] to-[#357DF1] text-on-primary font-bold rounded-lg shadow-xl shadow-primary/20 active:scale-95 transition-all flex items-center gap-2">
                Confirm &amp; Continue
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </footer>
        </div>

        {/* Assessment Insight Floating Card (Asymmetric Layout Example) */}
        <aside className="fixed bottom-12 right-12 w-80 hidden xl:block">
          <div className="bg-surface-container-highest/60 backdrop-blur-xl border border-outline-variant/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-tertiary-container rounded-lg">
                <span className="material-symbols-outlined text-tertiary">bolt</span>
              </div>
              <h4 className="font-bold text-on-surface">Assessment Preview</h4>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Logic Level</span>
                <span className="text-on-surface font-semibold">Tier 4/5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Time Required</span>
                <span className="text-on-surface font-semibold">45 Mins</span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full w-[80%] rounded-full shadow-[0_0_8px_rgba(78,222,163,0.4)]"></div>
              </div>
              <p className="text-[11px] text-on-surface-variant italic">
                This specific role requires a high-level technical assessment. You can take this later in Step 3.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
