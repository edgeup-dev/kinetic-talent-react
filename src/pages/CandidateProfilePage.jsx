import { Link } from 'react-router-dom';

export default function CandidateProfilePage() {
  return (
    <div className="flex-1 overflow-y-auto bg-surface p-8 scroll-smooth">
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        {/* Profile Header */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#adc6ff] to-[#357df1] blur-sm opacity-50"></div>
              <img
                alt="Elena Rodriguez Profile"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIcShMMh-gz70rns5Nu4CQobz_UWuqeN-Ubff0er1Jp2Z4a9_zpk__MCkfC0oIhI6hwYUdNvA5TtiPOgwsVMJeVhoBsJGcw887IRfngS_lG8QSA0O5RFIM5N_4OUxG467hUyWN-D5k82_IR3PmEvQ1WSKVwbOBcLR0TgE-15F6lJVUItegzBAl6IjiqOMlZcq93c6uAa9QVElMlmppcEXI-v8NEybD5sq22QW11i9dsZZE_LY0k4fw2lVr7dRxHYEZWcB5v-VUtAAx"
              />
              <div className="absolute bottom-1 right-1 w-8 h-8 bg-tertiary rounded-full border-4 border-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-surface text-[1rem] font-bold">check</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold tracking-tighter text-on-surface">Elena Rodriguez</h1>
                <span className="bg-tertiary-container text-tertiary px-3 py-1 rounded-full text-[0.6875rem] font-bold tracking-[0.05em] uppercase">98% Match</span>
              </div>
              <p className="text-xl text-[#adc6ff] font-medium">Senior Fullstack Engineer</p>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[1.2rem]">location_on</span> Madrid, Spain</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[1.2rem]">work</span> 8+ Years Exp</div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[1.2rem]">mail</span> elena.r@dev.io</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-surface-container-high text-primary-fixed px-6 py-3 rounded-lg font-semibold hover:bg-surface-container-highest transition-colors">Save to Shortlist</button>
            <button className="bg-gradient-to-br from-[#adc6ff] to-[#357df1] text-on-primary-fixed px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">Send Offer</button>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: AI & Skills */}
          <div className="lg:col-span-4 space-y-8">
            {/* Kinetic Assessment */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-on-surface">Kinetic Assessment</h3>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div className="flex flex-col items-center py-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="absolute w-full h-full -rotate-90">
                    <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="18.2" strokeWidth="8"></circle>
                  </svg>
                  <div className="text-3xl font-bold">95</div>
                </div>
                <div className="mt-2 text-on-surface-variant text-sm font-medium">Overall AI Score</div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 uppercase tracking-wider text-on-surface-variant">Technical Architecture</div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 uppercase tracking-wider text-on-surface-variant">System Scalability</div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[88%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2 uppercase tracking-wider text-on-surface-variant">Leadership &amp; Mentorship</div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
              <h3 className="text-lg font-semibold text-on-surface">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">TypeScript</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">Next.js</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">PostgreSQL</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">Rust</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">AWS Lambda</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">Kubernetes</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">GraphQL</span>
                <span className="bg-surface-container-high border border-outline-variant/10 px-3 py-1.5 rounded-lg text-sm text-[#adc6ff]">TailwindCSS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Resume */}
          <div className="lg:col-span-8 space-y-8">
            {/* Experience Timeline */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-8">Professional Experience</h3>
              <div className="space-y-10 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary ring-4 ring-surface-container-low flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-surface"></span>
                  </div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-on-surface">Principal Software Engineer</h4>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">2021 — Present</span>
                  </div>
                  <div className="text-[#adc6ff] font-medium mb-3">Vortex Technologies</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">Led the migration of a monolith architecture to distributed microservices using Node.js and Go. Improved system throughput by 140% and reduced cloud infrastructure costs by 30% through container orchestration optimization.</p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-highest ring-4 ring-surface-container-low flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-outline"></span>
                  </div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-on-surface">Senior Fullstack Developer</h4>
                    <span className="text-sm font-semibold text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">2018 — 2021</span>
                  </div>
                  <div className="text-[#adc6ff] font-medium mb-3">StreamLine AI</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">Architected real-time data visualization dashboards using React and D3.js. Managed a team of 6 engineers and implemented rigorous CI/CD pipelines reducing deployment errors by 45%.</p>
                </div>
              </div>
            </div>

            {/* Resume Viewer Area */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-error">picture_as_pdf</span>
                  <span className="font-medium text-sm">Elena_Rodriguez_Resume_2024.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-surface-container-high rounded transition-colors"><span className="material-symbols-outlined text-[1.2rem]">download</span></button>
                  <button className="p-2 hover:bg-surface-container-high rounded transition-colors"><span className="material-symbols-outlined text-[1.2rem]">fullscreen</span></button>
                </div>
              </div>
              <div className="bg-[#131b2e] h-80 flex flex-col items-center justify-center relative group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                <div className="bg-[rgba(34,42,61,0.8)] backdrop-blur-[24px] p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 text-center z-10">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">description</span>
                  <div>
                    <p className="font-semibold">Interactive Resume Preview</p>
                    <p className="text-xs text-on-surface-variant mt-1">Rendered with Kinetic DocuLens&trade;</p>
                  </div>
                  <button className="bg-primary/10 text-primary hover:bg-primary hover:text-surface px-4 py-2 rounded text-xs font-bold transition-all uppercase tracking-widest">Open Full Viewer</button>
                </div>
                {/* Background visual for PDF-like feel */}
                <div className="absolute inset-x-20 top-8 bottom-8 bg-surface-container-high/40 rounded shadow-2xl overflow-hidden border border-white/5 opacity-40">
                  <div className="h-10 bg-surface-container-highest/50 mb-6 mx-8 mt-8 w-2/3 rounded"></div>
                  <div className="h-4 bg-surface-container-highest/30 mb-2 mx-8 w-full rounded"></div>
                  <div className="h-4 bg-surface-container-highest/30 mb-2 mx-8 w-5/6 rounded"></div>
                  <div className="h-4 bg-surface-container-highest/30 mb-2 mx-8 w-4/6 rounded"></div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">school</span> Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">M.S. in Computer Science</p>
                    <p className="text-sm text-on-surface-variant">Stanford University &bull; 2018</p>
                  </div>
                  <div>
                    <p className="font-bold">B.S. in Software Engineering</p>
                    <p className="text-sm text-on-surface-variant">UPM Madrid &bull; 2016</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span> Certifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#ff9900]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#ff9900] text-sm">cloud</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">AWS Solutions Architect</p>
                      <p className="text-[0.6875rem] text-on-surface-variant uppercase font-semibold">Professional</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#326ce5]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#326ce5] text-sm">grid_view</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">CKA: Kubernetes Admin</p>
                      <p className="text-[0.6875rem] text-on-surface-variant uppercase font-semibold">Linux Foundation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
