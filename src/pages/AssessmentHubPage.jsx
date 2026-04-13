import { Link } from 'react-router-dom';

export default function AssessmentHubPage() {
  return (
    <main className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
          style={{
            background: 'linear-gradient(135deg, #ADC6FF 0%, #357DF1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Candidate Evaluation Journey
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Welcome to your Kinetic Talent assessment. Complete each phase to unlock the next level and move closer to your dream role.
        </p>
      </section>

      {/* Assessment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Level 1: PASCO */}
        <div className="group relative bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 hover:border-primary/40 transition-all duration-300 shadow-xl overflow-hidden active:scale-[0.98]">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-tertiary-container text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">Active</span>
          </div>
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">psychology</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Level 1 - PASCO</h3>
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Personality &amp; Aptitude evaluation designed to understand your unique cognitive strengths and behavioral traits.</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-xl">timer</span>
              <span>Estimated: 45 Minutes</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-xl">assignment_turned_in</span>
              <span>Multiple Choice &amp; Logic</span>
            </div>
          </div>
          <Link
            to="/pasco-assessment"
            className="w-full block text-center py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg shadow-primary/20 text-on-primary-fixed"
            style={{ background: 'linear-gradient(135deg, #ADC6FF 0%, #357DF1 100%)' }}
          >
            Begin Assessment
          </Link>
        </div>

        {/* Level 2: Technical Round */}
        <div className="group relative bg-surface-container-low/50 rounded-xl p-8 border border-outline-variant/10 shadow-sm opacity-60 grayscale-[0.5] flex flex-col justify-between">
          <div className="absolute inset-0 bg-[#0B1326]/20 backdrop-blur-[2px] rounded-xl flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-on-surface-variant/40 text-4xl">lock</span>
          </div>
          <div>
            <div className="w-14 h-14 bg-outline-variant/20 rounded-lg flex items-center justify-center mb-6 text-on-surface-variant">
              <span className="material-symbols-outlined text-3xl">code</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Level 2 - Technical</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">A deep dive into your technical proficiency, problem-solving skills, and role-specific expertise.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">timer</span>
                <span>Estimated: 90 Minutes</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">terminal</span>
                <span>Coding IDE Challenges</span>
              </div>
            </div>
          </div>
          <div className="text-center py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest border border-outline-variant/20 rounded">
            Locked until L1 Passed
          </div>
        </div>

        {/* Level 3: HR Round */}
        <div className="group relative bg-surface-container-low/50 rounded-xl p-8 border border-outline-variant/10 shadow-sm opacity-60 grayscale-[0.5] flex flex-col justify-between">
          <div className="absolute inset-0 bg-[#0B1326]/20 backdrop-blur-[2px] rounded-xl flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-on-surface-variant/40 text-4xl">lock</span>
          </div>
          <div>
            <div className="w-14 h-14 bg-outline-variant/20 rounded-lg flex items-center justify-center mb-6 text-on-surface-variant">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Level 3 - HR Round</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">A conversational interview focusing on cultural alignment, career goals, and organizational fit.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">timer</span>
                <span>Estimated: 30 Minutes</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">video_call</span>
                <span>Live Video Interview</span>
              </div>
            </div>
          </div>
          <div className="text-center py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest border border-outline-variant/20 rounded">
            Locked
          </div>
        </div>
      </div>

      {/* Before You Begin Bento Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-surface-container-high rounded-xl p-10 border border-outline-variant/10">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            Before You Begin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-surface-bright rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">volume_off</span>
              </div>
              <h4 className="font-bold text-sm">Quiet Environment</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Find a distraction-free space where you can focus for the full duration.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-surface-bright rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">wifi</span>
              </div>
              <h4 className="font-bold text-sm">Stable Internet</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Ensure a reliable connection (min 5Mbps) to prevent data loss.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-surface-bright rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">videocam</span>
              </div>
              <h4 className="font-bold text-sm">Webcam &amp; Audio</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Authorized access to camera/mic is required for proctoring.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-surface-bright rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">chrome_reader_mode</span>
              </div>
              <h4 className="font-bold text-sm">Latest Browser</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Use the latest version of Chrome, Safari, or Edge for stability.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl h-full min-h-[400px] flex items-center justify-center p-8">
          <div className="absolute inset-0 z-0">
            <img
              alt="Background"
              className="w-full h-full object-cover opacity-30 blur-[2px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnVzbMnOESfrMSsF6PezbSUdYHEyuJfoJpVSNYsUa6nrmmRyrlYA5-g8TBGVVuwCDjZoh3Fzw1ZxCuXSr_-NBPpvZlIgtRhi5CF7Em7jdk5bmTJkNqLYfDvk23YQ9128IcyfPkCIWDevbHUmpVvbH4YHcL3g0lC6Y_QnStcKg1nJlRjBmAqpdsG2HC2fQ8qehapmflpZ6H3Qk8lqJkeXmaBB2Vpr948GETgaFVlVbMpgJBAmeUsKyzvWy37CZkPAbJnL8ZRhem_Xpc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center max-w-sm">
            <div className="inline-block p-4 rounded-2xl bg-[rgba(34,42,61,0.4)] backdrop-blur-[12px] border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <h3 className="text-3xl font-black tracking-tight mb-4 uppercase italic">Precision Driven</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Our assessments are engineered to highlight your actual potential. Trust the process, take your time, and show us your true capabilities.
            </p>
            <button className="bg-surface-container-high border border-outline-variant hover:bg-surface-bright text-primary px-8 py-3 rounded-full text-sm font-bold transition-all">
              Support Center
            </button>
          </div>
        </div>
      </div>

      {/* Help Floating Action Button */}
      <button className="fixed bottom-12 right-12 w-16 h-16 rounded-full text-on-primary-fixed shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40 group" style={{ background: 'linear-gradient(135deg, #ADC6FF 0%, #357DF1 100%)' }}>
        <span className="material-symbols-outlined text-3xl">question_answer</span>
        <span className="absolute right-20 bg-surface-container-highest px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-outline-variant/20 shadow-xl pointer-events-none">Chat with Support</span>
      </button>
    </main>
  );
}
