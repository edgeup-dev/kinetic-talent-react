import { Link } from 'react-router-dom';

export default function CandidateRegistrationPage() {
  return (
    <main className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-on-surface">Build your digital architect profile.</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg">Join the enterprise-tier talent ecosystem. Your journey to the next frontier begins here.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Stepper Sidebar */}
          <nav className="lg:col-span-3 space-y-2">
            <div className="flex items-center gap-3 p-4 bg-surface-container-high text-[#ADC6FF] rounded-lg border-l-4 border-[#ADC6FF]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Account</span>
            </div>
            <div className="flex items-center gap-3 p-4 text-[#C6C6CD] hover:bg-[#131B2E] transition-all rounded-lg">
              <span className="material-symbols-outlined">person</span>
              <span className="text-sm font-medium">Personal Info</span>
            </div>
            <div className="flex items-center gap-3 p-4 text-[#C6C6CD] hover:bg-[#131B2E] transition-all rounded-lg">
              <span className="material-symbols-outlined">psychology</span>
              <span className="text-sm font-medium">Professional</span>
            </div>
            <div className="flex items-center gap-3 p-4 text-[#C6C6CD] hover:bg-[#131B2E] transition-all rounded-lg">
              <span className="material-symbols-outlined">cloud_upload</span>
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <div className="flex items-center gap-3 p-4 text-[#C6C6CD] hover:bg-[#131B2E] transition-all rounded-lg">
              <span className="material-symbols-outlined">tune</span>
              <span className="text-sm font-medium">Preferences</span>
            </div>
            <div className="flex items-center gap-3 p-4 text-[#C6C6CD] hover:bg-[#131B2E] transition-all rounded-lg">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="text-sm font-medium">Review</span>
            </div>
          </nav>

          {/* Form Canvas */}
          <div className="lg:col-span-9 space-y-8">
            {/* Step 1: Account Setup */}
            <section className="bg-surface-container-low p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-[#ADC6FF]">Step 3: Professional Profile</h2>
                  <span className="text-xs font-bold px-3 py-1 bg-primary-container text-primary rounded-full tracking-widest uppercase">Required</span>
                </div>
                <form className="space-y-8">
                  {/* Role & Experience */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Primary Role</label>
                      <input className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary/30 rounded-lg p-3 text-on-surface placeholder:text-outline" placeholder="e.g. Senior Software Engineer" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Years of Experience</label>
                      <select className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-2 focus:ring-primary/30 rounded-lg p-3 text-on-surface appearance-none">
                        <option>3 - 5 Years</option>
                        <option>5 - 8 Years</option>
                        <option>8 - 12 Years</option>
                        <option>12+ Years</option>
                      </select>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="space-y-4">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Skills &amp; Proficiency</label>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant/10 group cursor-default">
                        <span className="text-sm font-medium">React.js</span>
                        <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.6)]"></span>
                        <span className="material-symbols-outlined text-xs text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant/10 group cursor-default">
                        <span className="text-sm font-medium">System Design</span>
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                        <span className="material-symbols-outlined text-xs text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant/10 group cursor-default">
                        <span className="text-sm font-medium">Go Lang</span>
                        <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                        <span className="material-symbols-outlined text-xs text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-outline-variant/30 hover:border-primary/50 text-outline hover:text-primary transition-all rounded-full">
                        <span className="material-symbols-outlined text-sm">add</span>
                        <span className="text-sm font-medium">Add Skill</span>
                      </button>
                    </div>
                  </div>

                  {/* Step 4: Resume & Portfolio */}
                  <div className="pt-8 space-y-4">
                    <h3 className="text-lg font-medium text-on-surface">Experience Documentation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Upload Area */}
                      <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/20 bg-surface-container-lowest rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary mb-2">upload_file</span>
                        <p className="text-sm font-medium mb-1">Upload Resume</p>
                        <p className="text-[10px] uppercase tracking-tighter text-outline-variant">PDF, DOCX (Max 10MB)</p>
                      </div>
                      {/* LinkedIn Import */}
                      <div className="group flex flex-col items-center justify-center bg-primary-container/30 border border-primary/20 rounded-xl p-8 hover:bg-primary-container/50 transition-all cursor-pointer">
                        <div className="bg-primary p-2 rounded-md mb-2">
                          <svg className="w-6 h-6 text-on-primary-fixed" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </div>
                        <p className="text-sm font-medium mb-1 text-primary">Sync LinkedIn</p>
                        <p className="text-[10px] uppercase tracking-tighter text-primary-fixed/50">One-click import</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Salary Range Slider */}
                  <div className="pt-8 space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Expected Annual Salary (USD)</label>
                      <span className="text-xl font-bold text-primary">$145k — $180k</span>
                    </div>
                    <div className="relative h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="absolute left-[30%] right-[20%] h-full bg-gradient-to-r from-primary to-on-primary-container"></div>
                      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 -ml-2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"></div>
                      <div className="absolute right-[20%] top-1/2 -translate-y-1/2 -mr-2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer"></div>
                    </div>
                    <div className="flex justify-between text-[10px] uppercase font-bold text-outline-variant tracking-widest">
                      <span>$80,000</span>
                      <span>$300,000+</span>
                    </div>
                  </div>
                </form>
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4">
              <button className="flex items-center gap-2 px-6 py-3 text-on-surface-variant hover:text-primary font-medium transition-all group">
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back
              </button>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-surface-container-high text-primary-fixed font-semibold rounded-lg hover:bg-surface-bright transition-all">
                  Save Draft
                </button>
                <button className="px-10 py-3 bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold rounded-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Accents */}
      <div className="fixed bottom-0 right-0 p-12 pointer-events-none opacity-20">
        <div className="w-96 h-96 bg-primary rounded-full blur-[160px]"></div>
      </div>
      <div className="fixed top-1/2 left-0 -translate-x-1/2 p-12 pointer-events-none opacity-10">
        <div className="w-64 h-64 bg-tertiary rounded-full blur-[120px]"></div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1326]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIACf1YEwHx1wOREWnbuKhJ6GYb-CqnP8vR9-kWkfvQVbic-G9xCBrKwAEPfRcjSCeZjPdPn55eSZDF3u3Q9LHLRernY-ZqPByiZ8bX9mU2A_G4fDLu6nEPvep0vjloBGghRGV8Pt4euiadrI055B63RtQ8iYJl0h9b5F4Lcpqo6zDNVPlC1CaNGQHImxBmv9jHpvDA9XOAUxNTKFS6p7HP-g_UVf4wfiYSFUSz4MrSaDKx54X4Nj9ZUMHpxLQR97pEg660JFKgwbj')" }}></div>
      </div>
    </main>
  );
}
