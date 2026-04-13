import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="mesh-bg relative min-h-[921px] flex items-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Next-Gen Recruitment
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-tight">
              Where <span className="bg-gradient-to-r from-primary to-on-primary-container bg-clip-text text-transparent">AI Meets</span> Talent
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Smarter Hiring, Better Matches. We use proprietary behavioral science and predictive AI to connect top-tier talent with world-class enterprises.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/company-registration" className="px-8 py-4 bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold rounded-lg scale-100 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10">
                Hire Top Talent
              </Link>
              <Link to="/candidate-registration" className="px-8 py-4 bg-surface-container-high text-primary-fixed font-bold rounded-lg hover:bg-surface-bright transition-all">
                Find Your Dream Job
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-surface-container-high/40 backdrop-blur-2xl border border-outline-variant/10 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold text-primary">Candidate Match Analysis</h3>
                <span className="material-symbols-outlined text-tertiary">query_stats</span>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-on-surface-variant">Technical Proficiency</span>
                    <span className="text-sm font-bold text-tertiary">98%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full w-[98%]"></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-on-surface-variant">Culture Alignment</span>
                    <span className="text-sm font-bold text-primary">94%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[94%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-12 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-label-sm uppercase tracking-[0.2em] text-on-surface-variant mb-10 font-semibold">Powering the world's most innovative teams</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">terminal</span><span className="font-bold text-xl">TechCorp</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">rocket_launch</span><span className="font-bold text-xl">Stellar</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">architecture</span><span className="font-bold text-xl">Vertex</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">token</span><span className="font-bold text-xl">BlockHive</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-3xl">shield_moon</span><span className="font-bold text-xl">Nocturne</span></div>
          </div>
        </div>
      </section>

      {/* How It Works (Bento Pattern) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-on-background mb-4">Precision Workflow</h2>
            <p className="text-on-surface-variant">Architected for speed. Designed for quality.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Candidates Side */}
            <div className="bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">person</span> For Candidates
              </h3>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Register</h4>
                    <p className="text-on-surface-variant text-sm">Create your semantic profile and upload your portfolio to our neural network.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Assess</h4>
                    <p className="text-on-surface-variant text-sm">Complete our proprietary PASCO and technical assessments designed for your track.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Match</h4>
                    <p className="text-on-surface-variant text-sm">Get matched with high-growth roles that actually fit your career trajectory.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Companies Side */}
            <div className="bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10">
              <h3 className="text-2xl font-bold text-tertiary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">business</span> For Companies
              </h3>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Post</h4>
                    <p className="text-on-surface-variant text-sm">Define your technical and cultural requirements using our AI role-builder.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Evaluate</h4>
                    <p className="text-on-surface-variant text-sm">Review data-rich candidate dossiers with validated skill scores.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Hire</h4>
                    <p className="text-on-surface-variant text-sm">Onboard top 1% talent with confidence and 3x faster hiring cycles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assessment Showcase */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-on-background mb-4 leading-tight">The Kinetic <span className="text-primary italic">Intelligence</span> Suite</h2>
              <p className="text-on-surface-variant max-w-xl">Our assessments go beyond the resume. We validate cognitive ability, technical depth, and cultural resonance using advanced behavioral modeling.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">Explore the science <span className="material-symbols-outlined">arrow_right_alt</span></button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* PASCO Card */}
            <div className="group bg-surface-container-high p-8 rounded-2xl hover:bg-surface-bright transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4">PASCO Assessment</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Our proprietary Psychometric Aptitude &amp; Soft-Skill Cognitive Objective test predicts performance with 89% accuracy.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                Validated Science
              </div>
            </div>
            {/* Technical Card */}
            <div className="group bg-surface-container-high p-8 rounded-2xl hover:bg-surface-bright transition-all duration-300">
              <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Round</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Dynamic, environment-aware coding challenges that assess problem-solving architecture, not just syntax memorization.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-tertiary tracking-widest uppercase">
                Real-World Simulation
              </div>
            </div>
            {/* HR Round */}
            <div className="group bg-surface-container-high p-8 rounded-2xl hover:bg-surface-bright transition-all duration-300">
              <div className="w-14 h-14 bg-primary-fixed/10 rounded-xl flex items-center justify-center text-primary-fixed mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
              </div>
              <h3 className="text-xl font-bold mb-4">HR &amp; Culture Sync</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">AI-driven interviewing focusing on values, leadership potential, and long-term organizational compatibility.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary-fixed tracking-widest uppercase">
                Human-Centric AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-on-background mb-2">500+</div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Global Enterprises</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">12k+</div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Expert Candidates</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-tertiary mb-2">3.2x</div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Hiring Velocity</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-on-background mb-2">94%</div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">The Network Effect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Manager Testimonial */}
            <div className="p-1 w-full bg-gradient-to-br from-outline-variant/20 to-transparent rounded-3xl">
              <div className="bg-surface-container-high p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-on-surface mb-8">
                  "Kinetic Talent didn't just find us a developer; they found us an architect who perfectly fit our engineering culture. The technical vetting is miles ahead of anything else."
                </p>
                <div className="flex items-center gap-4">
                  <img alt="Sarah Chen" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOTmj17dCXSNY4IslwmEoWEys60_1AZvRypuPolQFarAmNDrEV2n_2qf3P16jM8Mi4d-mdJ5P0nGb1Lm0nTUttmM4Wnu_ER9FJ53hUcXSuf33nEXOMYeycf6vMKjBOaTtzpMjtiZeoayXaFSNAj0_DKp9iLzR2u6KxBGbmbwAN6XE_imnSdSUqcPssHSBRgk02fUlZkM3BumbMSbbOSLYy5Hl5tsMAQvqgtCiqPcePgmrQjn7WrFMUuQWrNEw96qNqAN2su5TwVgpM" />
                  <div>
                    <p className="font-bold">Sarah Chen</p>
                    <p className="text-sm text-on-surface-variant uppercase tracking-tighter">VP of Engineering, CloudScale</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Candidate Testimonial */}
            <div className="p-1 w-full bg-gradient-to-br from-outline-variant/20 to-transparent rounded-3xl">
              <div className="bg-surface-container-high p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-on-surface mb-8">
                  "The PASCO assessment was the most comprehensive interview prep I've ever had. It didn't just get me the job; it helped me understand my own cognitive strengths."
                </p>
                <div className="flex items-center gap-4">
                  <img alt="Marcus Thorne" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvyvs-wLVmSzoAREUc9gWXJLleCINRJRC41NV1_WvCEI0rcaqHEWQJT7KZAE8mBNJfq0OpqdVZERtxWKjA5zmlzY8CQbOEZxAYsqAtUOW5Cfg7yXrvUW4LFL5sbwFDnLXq61VPW9tPpBJaONMHCnO9OHPBG7tDdvl5n96Lg-38a1Q25J2CYmYIC0cj-4w8RxyKHo0CdkLIXpNc95Z4Wv9hoTmK_Fa_W5o4f898J9LcK9BTtx7ebThEcwdaF_a7g0hTBJNZC1U7DJ1f" />
                  <div>
                    <p className="font-bold">Marcus Thorne</p>
                    <p className="text-sm text-on-surface-variant uppercase tracking-tighter">Sr. Product Designer, Finity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-on-primary-container p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary mb-8 tracking-tighter leading-tight relative z-10">
            Ready to build the <br className="hidden md:block" /> next great team?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link to="/company-registration" className="px-10 py-5 bg-on-primary text-primary font-bold rounded-xl hover:bg-on-primary-fixed-variant transition-colors shadow-2xl">
              Get Started Today
            </Link>
            <button className="px-10 py-5 bg-transparent border-2 border-on-primary text-on-primary font-bold rounded-xl hover:bg-on-primary/10 transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
