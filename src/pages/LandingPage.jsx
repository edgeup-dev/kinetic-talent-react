import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function LandingPage() {
  const [counters, setCounters] = useState({ companies: 0, candidates: 0, velocity: 0, success: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Animated counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { companies: 500, candidates: 12000, velocity: 3.2, success: 94 };
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        companies: Math.floor(targets.companies * progress),
        candidates: Math.floor(targets.candidates * progress),
        velocity: (targets.velocity * progress).toFixed(1),
        success: Math.floor(targets.success * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [progressBars, setProgressBars] = useState({ technical: 0, culture: 0 });

  useEffect(() => {
    setTimeout(() => {
      setProgressBars({ technical: 98, culture: 94 });
    }, 500);
  }, []);

  return (
    <main className="pt-16">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-tertiary/20 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float delay-400"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-tertiary/20 rounded-full animate-float delay-600"></div>
      </div>

      {/* Hero Section */}
      <section className="mesh-bg relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-primary text-xs font-semibold tracking-wider uppercase animate-fade-in-up shadow-lg shadow-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Powered by AI · Validated by Science
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-tight animate-fade-in-up delay-100">
              Transform Hiring with
              <span className="block mt-2 bg-gradient-to-r from-primary via-on-primary-container to-tertiary bg-clip-text text-transparent animate-gradient">
                AI-Powered Precision
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed animate-fade-in-up delay-200">
              Stop guessing. Start matching. Our proprietary AI combines behavioral science, technical validation, and cultural analysis to connect exceptional talent with forward-thinking companies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
              <Link
                to="/login"
                className="group px-8 py-4 bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
              >
                <span className="relative z-10">Start Hiring Now</span>
                <span className="material-symbols-outlined ml-2 inline-block group-hover:translate-x-1 transition-transform">arrow_forward</span>
                <div className="absolute inset-0 bg-gradient-to-r from-on-primary-container to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-surface-container-high text-primary-fixed font-bold rounded-xl hover:bg-surface-bright transition-all border-2 border-primary/20 hover:border-primary/50 hover:scale-105 active:scale-95"
              >
                Find Your Dream Role
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-6 animate-fade-in-up delay-400">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOTmj17dCXSNY4IslwmEoWEys60_1AZvRypuPolQFarAmNDrEV2n_2qf3P16jM8Mi4d-mdJ5P0nGb1Lm0nTUttmM4Wnu_ER9FJ53hUcXSuf33nEXOMYeycf6vMKjBOaTtzpMjtiZeoayXaFSNAj0_DKp9iLzR2u6KxBGbmbwAN6XE_imnSdSUqcPssHSBRgk02fUlZkM3BumbMSbbOSLYy5Hl5tsMAQvqgtCiqPcePgmrQjn7WrFMUuQWrNEw96qNqAN2su5TwVgpM" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvyvs-wLVmSzoAREUc9gWXJLleCINRJRC41NV1_WvCEI0rcaqHEWQJT7KZAE8mBNJfq0OpqdVZERtxWKjA5zmlzY8CQbOEZxAYsqAtUOW5Cfg7yXrvUW4LFL5sbwFDnLXq61VPW9tPpBJaONMHCnO9OHPBG7tDdvl5n96Lg-38a1Q25J2CYmYIC0cj-4w8RxyKHo0CdkLIXpNc95Z4Wv9hoTmK_Fa_W5o4f898J9LcK9BTtx7ebThEcwdaF_a7g0hTBJNZC1U7DJ1f" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  12k+
                </div>
              </div>
              <p className="text-sm text-on-surface-variant">
                <span className="font-bold text-primary">12,000+</span> professionals hired through our platform
              </p>
            </div>
          </div>

          {/* Interactive Match Card */}
          <div className="relative hidden md:block animate-fade-in-up delay-500">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="relative glass-card p-8 rounded-3xl shadow-2xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">AI Match Analysis</h3>
                  <p className="text-xs text-on-surface-variant">Real-time candidate evaluation</p>
                </div>
                <div className="p-3 bg-tertiary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5 hover:border-tertiary/30 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-sm">code</span>
                      Technical Proficiency
                    </span>
                    <span className="text-lg font-bold text-tertiary">{progressBars.technical}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-tertiary to-tertiary-fixed h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressBars.technical}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5 hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">diversity_3</span>
                      Culture Alignment
                    </span>
                    <span className="text-lg font-bold text-primary">{progressBars.culture}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary-fixed h-full rounded-full transition-all duration-1000 ease-out delay-200"
                      style={{ width: `${progressBars.culture}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                  <span className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">Overall Match Score</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gradient">96%</span>
                    <span className="material-symbols-outlined text-tertiary animate-pulse">verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-surface overflow-hidden border-y border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6 scroll-reveal">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-on-surface-variant mb-12 font-semibold">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24">
            {[
              { icon: 'terminal', name: 'TechCorp', color: 'text-primary' },
              { icon: 'rocket_launch', name: 'Stellar', color: 'text-tertiary' },
              { icon: 'architecture', name: 'Vertex', color: 'text-primary' },
              { icon: 'token', name: 'BlockHive', color: 'text-tertiary' },
              { icon: 'shield_moon', name: 'Nocturne', color: 'text-primary' }
            ].map((company, i) => (
              <div key={company.name} className={`flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer delay-${i * 100}`}>
                <span className={`material-symbols-outlined text-3xl ${company.color}`}>{company.icon}</span>
                <span className="font-bold text-xl text-on-surface">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background mb-4">How It Works</h2>
            <p className="text-on-surface-variant text-lg">Simple process. Powerful results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Candidates */}
            <div className="scroll-reveal bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                For Candidates
              </h3>
              <div className="space-y-8">
                {[
                  { num: 1, title: 'Create Profile', desc: 'Build your semantic profile in minutes. Our AI extracts skills, experience, and career aspirations from your resume.' },
                  { num: 2, title: 'Complete Assessments', desc: 'Take our science-backed PASCO and technical tests. Get validated scores that showcase your true capabilities.' },
                  { num: 3, title: 'Get Matched', desc: 'Receive personalized job recommendations with fit scores. Apply to roles where you\'ll actually thrive.' }
                ].map((step, i) => (
                  <div key={step.num} className={`flex gap-6 group/step delay-${i * 200}`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary font-bold shadow-lg shadow-primary/20 group-hover/step:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-on-surface group-hover/step:text-primary transition-colors">{step.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div className="scroll-reveal bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10 hover:border-tertiary/30 transition-all duration-500 hover:scale-[1.02] group">
              <h3 className="text-2xl font-bold text-tertiary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined p-3 bg-tertiary/10 rounded-xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>business</span>
                For Companies
              </h3>
              <div className="space-y-8">
                {[
                  { num: 1, title: 'Post Requirements', desc: 'Use our AI role-builder to define technical skills and cultural values. Get specific, not generic.' },
                  { num: 2, title: 'Review Candidates', desc: 'Access validated profiles with assessment scores, technical depth, and culture fit ratings.' },
                  { num: 3, title: 'Hire with Confidence', desc: 'Make data-driven decisions. Reduce mis-hires. Build teams that stay and perform.' }
                ].map((step, i) => (
                  <div key={step.num} className={`flex gap-6 group/step delay-${i * 200}`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-tertiary to-tertiary-container flex items-center justify-center text-on-tertiary font-bold shadow-lg shadow-tertiary/20 group-hover/step:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-on-surface group-hover/step:text-tertiary transition-colors">{step.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assessment Showcase */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 scroll-reveal">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background mb-4 leading-tight">
                The Kinetic <span className="text-gradient italic">Intelligence</span> Suite
              </h2>
              <p className="text-on-surface-variant max-w-xl text-lg">
                Beyond resumes. Beyond interviews. We measure what actually predicts success.
              </p>
            </div>
            <Link to="/assessments" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Explore the science
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'psychology', title: 'PASCO Assessment', desc: 'Psychometric testing that predicts performance with 89% accuracy. Validated across 10,000+ hires.', color: 'primary', badge: 'Validated Science' },
              { icon: 'code', title: 'Technical Round', desc: 'Real-world coding challenges. We test problem-solving, not memorization.', color: 'tertiary', badge: 'Live Environment' },
              { icon: 'forum', title: 'HR & Culture Sync', desc: 'AI-powered interviews analyzing communication, values, and leadership potential.', color: 'primary-fixed', badge: 'Human-Centric AI' }
            ].map((assessment, i) => (
              <div key={assessment.title} className={`scroll-reveal delay-${i * 100} group bg-surface-container-high p-8 rounded-2xl hover:bg-surface-bright transition-all duration-300 border-2 border-transparent hover:border-${assessment.color}/30 hover:scale-105 cursor-pointer`}>
                <div className={`w-16 h-16 bg-${assessment.color}/10 rounded-xl flex items-center justify-center text-${assessment.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{assessment.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-on-surface">{assessment.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{assessment.desc}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-${assessment.color}/10 rounded-full text-xs font-bold text-${assessment.color} tracking-wider uppercase`}>
                  <span className="material-symbols-outlined text-sm">verified</span>
                  {assessment.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section ref={statsRef} className="py-20 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="scroll-reveal">
            <div className="text-4xl md:text-6xl font-extrabold text-on-background mb-2">
              {counters.companies}+
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Global Enterprises</div>
          </div>
          <div className="scroll-reveal delay-100">
            <div className="text-4xl md:text-6xl font-extrabold text-primary mb-2">
              {counters.candidates >= 1000 ? `${(counters.candidates / 1000).toFixed(0)}k` : counters.candidates}+
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Expert Candidates</div>
          </div>
          <div className="scroll-reveal delay-200">
            <div className="text-4xl md:text-6xl font-extrabold text-tertiary mb-2">
              {counters.velocity}x
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Hiring Velocity</div>
          </div>
          <div className="scroll-reveal delay-300">
            <div className="text-4xl md:text-6xl font-extrabold text-on-background mb-2">
              {counters.success}%
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 scroll-reveal">What Our Users Say</h2>
          <p className="text-center text-on-surface-variant mb-16 scroll-reveal delay-100">Real results from real people</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal delay-200 p-1 w-full bg-gradient-to-br from-primary/30 to-transparent rounded-3xl hover:from-primary/50 transition-all duration-500">
              <div className="bg-surface-container-high p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-on-surface mb-8">
                    "Kinetic Talent didn't just find us a developer; they found us an architect who perfectly fit our engineering culture. The technical vetting is miles ahead of anything else."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img alt="Sarah Chen" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOTmj17dCXSNY4IslwmEoWEys60_1AZvRypuPolQFarAmNDrEV2n_2qf3P16jM8Mi4d-mdJ5P0nGb1Lm0nTUttmM4Wnu_ER9FJ53hUcXSuf33nEXOMYeycf6vMKjBOaTtzpMjtiZeoayXaFSNAj0_DKp9iLzR2u6KxBGbmbwAN6XE_imnSdSUqcPssHSBRgk02fUlZkM3BumbMSbbOSLYy5Hl5tsMAQvqgtCiqPcePgmrQjn7WrFMUuQWrNEw96qNqAN2su5TwVgpM" />
                  <div>
                    <p className="font-bold text-on-surface">Sarah Chen</p>
                    <p className="text-sm text-on-surface-variant">VP of Engineering, CloudScale</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal delay-300 p-1 w-full bg-gradient-to-br from-tertiary/30 to-transparent rounded-3xl hover:from-tertiary/50 transition-all duration-500">
              <div className="bg-surface-container-high p-8 md:p-12 rounded-3xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-on-surface mb-8">
                    "The PASCO assessment was eye-opening. It didn't just get me the job; it helped me understand my own strengths and where I'd actually be happy long-term."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img alt="Marcus Thorne" className="w-14 h-14 rounded-full object-cover border-2 border-tertiary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvyvs-wLVmSzoAREUc9gWXJLleCINRJRC41NV1_WvCEI0rcaqHEWQJT7KZAE8mBNJfq0OpqdVZERtxWKjA5zmlzY8CQbOEZxAYsqAtUOW5Cfg7yXrvUW4LFL5sbwFDnLXq61VPW9tPpBJaONMHCnO9OHPBG7tDdvl5n96Lg-38a1Q25J2CYmYIC0cj-4w8RxyKHo0CdkLIXpNc95Z4Wv9hoTmK_Fa_W5o4f898J9LcK9BTtx7ebThEcwdaF_a7g0hTBJNZC1U7DJ1f" />
                  <div>
                    <p className="font-bold text-on-surface">Marcus Thorne</p>
                    <p className="text-sm text-on-surface-variant">Sr. Product Designer, Finity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-on-primary-container p-12 md:p-24 text-center relative overflow-hidden scroll-reveal">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32 animate-float delay-400"></div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary mb-6 tracking-tighter leading-tight relative z-10">
            Ready to transform your hiring?
          </h2>
          <p className="text-on-primary/80 text-lg mb-10 relative z-10 max-w-2xl mx-auto">
            Join 500+ companies and 12,000+ candidates who've discovered better matches through AI-powered recruitment
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10 mb-8">
            <Link
              to="/login"
              className="group px-10 py-5 bg-on-primary text-primary font-bold rounded-xl hover:bg-on-primary-fixed-variant transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Get Started Free
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              to="/login"
              className="px-10 py-5 bg-transparent border-2 border-on-primary text-on-primary font-bold rounded-xl hover:bg-on-primary/10 transition-all hover:scale-105 active:scale-95"
            >
              Schedule Demo
            </Link>
          </div>

          <p className="text-on-primary/60 text-sm relative z-10">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-on-primary transition-colors">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
