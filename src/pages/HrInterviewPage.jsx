import { Link } from 'react-router-dom';

export default function HrInterviewPage() {
  return (
    <div className="min-h-screen flex">
      {/* Main Interview Canvas */}
      <section className="flex-1 flex flex-col p-6 lg:p-10 relative overflow-hidden bg-surface">
        {/* Breadcrumb / Status */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <span className="text-label-sm font-semibold tracking-widest text-primary uppercase">
              Round 03: Culture &amp; Leadership
            </span>
            <h1 className="text-2xl font-bold text-on-surface tracking-tight">
              Technical Lead Candidate Interview
            </h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-tertiary-container text-tertiary border border-tertiary/20">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Live Analysis Active</span>
          </div>
        </div>

        {/* Video Call Interface Area */}
        <div className="flex-1 relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/10 group ai-glow">
          {/* AI Avatar / Waveform Centerpiece */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Abstract AI Visualizer */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="z-10 w-full h-full border-4 border-primary/20 rounded-full flex items-center justify-center overflow-hidden bg-surface-container-highest/40 backdrop-blur-xl">
                <img
                  alt="AI Interviewer Avatar"
                  className="w-full h-full object-cover mix-blend-lighten opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZrgFWbrZdM-1WFUa9RsF6-NwRgt3-X6epWFltL7FA8RkXknjNp1RrhJ075ogiuXbLpavFDvCU2dIuGCGYB3093R8SVrOEPLyM5xSjMCcPGNpsQW8Qshxjv0c-sdsqplYOBOwuSzU7_9CA1N5LVWuQ1MBz8cIbg3Ri5MzLVw87EZ09K-S0MCvbpByvLD138rYBSsT1uDVP85EqCjQ4bqKMS2U-2Q6sPncguiO6CRSXkh7URPYLs0FYS-WinT4CGZx9UBH1_EIWfy0"
                />
              </div>
              {/* Animated Waveforms */}
              <div className="absolute -bottom-10 flex items-end gap-1.5 h-16">
                <div className="w-1.5 bg-primary rounded-full animate-waveform-1 h-4"></div>
                <div className="w-1.5 bg-on-primary-container rounded-full animate-waveform-2 h-8"></div>
                <div className="w-1.5 bg-primary rounded-full animate-waveform-3 h-12"></div>
                <div className="w-1.5 bg-on-primary-container rounded-full animate-waveform-4 h-6"></div>
                <div className="w-1.5 bg-primary rounded-full animate-waveform-5 h-10"></div>
              </div>
            </div>
            {/* The Question Overlay */}
            <div className="mt-16 max-w-2xl text-center">
              <p className="text-primary-fixed-dim text-sm font-medium mb-4 tracking-[0.2em] uppercase">
                AI Assistant Inquiring
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-on-surface-variant">
                "Tell me about a time you had to lead a team through a significant technical pivot."
              </h2>
            </div>
          </div>

          {/* Candidate PiP (Self View) */}
          <div className="absolute bottom-6 right-6 w-48 h-32 md:w-64 md:h-44 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl z-20 transition-transform hover:scale-105">
            <img
              alt="Candidate Camera"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtlaSc9TuecRO7WxmtODAJ2zSHMles6idI86RG5wUrYHi2mxUXE0o59LTk6sDdfkv9agPh30Tai3n2Aqi-6On6H01rCb5eCVqtWvpTPDvX9JPTfYmtsea0V98p67hyYIcw8xMMx4VSHzqYOJEoWcHkBf3FCSS2mpK4puidh6YwIYZ3wF7HF42elZCNUNpRUGmkGH-jTrFMEIOuhvY1iECEfiOMxVQPXzgdv5PNBWYq-HdqTf4oSfRyhIpzrTG72UqSvlAi4YqGeTJe"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] text-white font-medium uppercase tracking-wider">
              You (Live)
            </div>
          </div>
        </div>

        {/* Interaction Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest text-on-surface rounded-full hover:bg-surface-bright transition-all active:scale-95 group">
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
              keyboard
            </span>
            <span className="font-semibold">Type Response</span>
          </button>
          <button className="flex items-center gap-3 px-10 py-5 bg-gradient-to-br from-primary to-on-primary-container text-on-primary-fixed rounded-full hover:shadow-[0_0_30px_rgba(173,198,255,0.3)] transition-all active:scale-95">
            <span className="material-symbols-outlined font-bold">mic</span>
            <span className="font-bold">Hold to Speak</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-error-container/20 text-error rounded-full hover:bg-error-container/40 border border-error/20 transition-all active:scale-95">
            <span className="material-symbols-outlined">call_end</span>
            <span className="font-semibold text-sm">End Interview</span>
          </button>
        </div>
      </section>

      {/* Sidebar Conversation Panel */}
      <aside className="hidden xl:flex flex-col w-[400px] bg-surface-container-low border-l border-outline-variant/10">
        <div className="p-6 border-b border-outline-variant/10">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">forum</span>
            Conversation Transcript
          </h3>
          <p className="text-xs text-on-surface-variant mt-1">
            Real-time AI sentiment tracking enabled
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
          {/* Interviewer Message */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px] text-primary">psychology</span>
              </div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Kinetic AI
              </span>
            </div>
            <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none border border-outline-variant/10">
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Hello! I'm your AI technical evaluator. Today we'll focus on your leadership experience
                during high-pressure transitions. Let's start with your approach to change.
              </p>
            </div>
          </div>

          {/* Candidate Message */}
          <div className="flex flex-col gap-3 items-end">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">
                Candidate
              </span>
              <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                  person
                </span>
              </div>
            </div>
            <div className="bg-on-primary-container text-white p-4 rounded-2xl rounded-tr-none shadow-lg">
              <p className="text-sm leading-relaxed">
                Happy to be here. In my last role at TechCorp, we had to migrate from a monolithic
                architecture to microservices in under three months due to scaling issues.
              </p>
            </div>
            <div className="flex gap-2 items-center text-[10px] text-tertiary font-bold px-2 py-1 bg-tertiary-container/30 rounded">
              <span
                className="material-symbols-outlined text-xs"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              SENTIMENT: CONFIDENT
            </div>
          </div>

          {/* Interviewer Message (Current Question) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px] text-primary">psychology</span>
              </div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Kinetic AI
              </span>
            </div>
            <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none border border-outline-variant/20 border-l-primary border-l-4">
              <p className="text-sm leading-relaxed text-on-surface">
                That sounds like a major shift. Tell me about a time you had to lead a team through a
                significant technical pivot. How did you handle developer pushback?
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 bg-surface-container-highest/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-on-surface-variant">
              Evaluation Scoreboard
            </span>
            <span className="text-xs font-bold text-primary">78/100</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[78%]"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="flex flex-col items-center p-2 rounded-lg bg-surface-container">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold">Clarity</span>
              <span className="text-sm font-bold text-tertiary">High</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg bg-surface-container">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold">
                Tech Depth
              </span>
              <span className="text-sm font-bold text-primary">Med</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg bg-surface-container">
              <span className="text-[10px] text-on-surface-variant uppercase font-bold">Emotion</span>
              <span className="text-sm font-bold text-on-surface">Stable</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Floating AI Context Indicator (Bottom Left) */}
      <div className="fixed bottom-10 left-10 z-40">
        <div className="bg-surface-container-highest/80 backdrop-blur-xl border border-outline-variant/20 rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-sm">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-surface font-bold">bolt</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
              AI Recommendation
            </p>
            <p className="text-xs text-on-surface-variant leading-tight">
              Focus on his decision-making framework during the TechCorp migration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
