import { Link } from 'react-router-dom';

export default function CandidateSettingsPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-surface lg:p-12 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface mb-2">Candidate Settings</h1>
          <p className="text-on-surface-variant">Manage your professional presence and account preferences.</p>
        </header>

        {/* Tab Navigation (High-End Sub-Nav) */}
        <nav className="flex space-x-8 mb-8 border-b border-surface-container-high overflow-x-auto no-scrollbar">
          <button className="pb-4 text-primary border-b-2 border-primary font-medium whitespace-nowrap">Personal Info</button>
          <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-medium whitespace-nowrap">Privacy</button>
          <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-medium whitespace-nowrap">Notifications</button>
          <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-medium whitespace-nowrap">Connected Accounts</button>
          <button className="pb-4 text-on-surface-variant hover:text-on-surface transition-colors font-medium whitespace-nowrap">Security</button>
        </nav>

        {/* Bento-style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Identity Card */}
          <section className="lg:col-span-8 bg-surface-container-low rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="relative group">
                <img
                  alt="Profile Avatar"
                  className="w-32 h-32 rounded-3xl object-cover shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpY03tw48Zvq3HXuOCHEYjm33TJsYArk93sAFJoGy269MJQ26N0ACBzBQXaee5XKjg2A-lPQVI1TyCRo2IwEl4PjcZccKg3GuQzDMGdx8pGoH-Lbqec-TU64zn4rXE-l9tOuPJIFLLFFc-_bH0376Ruglp2Gc5U4PVQqlyMljI4wYh2fq0R6X8VxJopR77jh2Nj3fv75Y3tlSCkXyXNhuMZgBl4oxOaFEefFuUvPUD9OPE9IW9QrGu3t5yhnZzC0xbL_bbSlBZNkGu"
                />
                <button className="absolute -bottom-2 -right-2 bg-primary text-surface p-2 rounded-xl shadow-lg hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Full Name</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 text-on-surface" type="text" defaultValue="Alexander Sterling" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Professional Title</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 text-on-surface" type="text" defaultValue="Senior Product Designer" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Email Address</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 text-on-surface" type="email" defaultValue="alexander.s@kinetic.io" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Phone Number</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 text-on-surface" type="text" defaultValue="+1 (555) 000-1234" />
                </div>
              </div>
            </div>
          </section>

          {/* Profile Strength (Small Bento) */}
          <aside className="lg:col-span-4 bg-gradient-to-br from-surface-container-high to-surface-container rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">Profile Strength</h3>
              <p className="text-label-sm text-on-surface-variant mb-6 uppercase tracking-widest">Expert Status</p>
              <div className="w-full h-2 bg-surface-container-lowest rounded-full mb-4">
                <div className="w-[85%] h-full bg-primary rounded-full shadow-[0_0_12px_rgba(173,198,255,0.4)]"></div>
              </div>
              <p className="text-sm text-on-surface-variant">Add a detailed bio to reach <span className="text-primary font-bold">100% visibility</span>.</p>
            </div>
            <button className="w-full mt-6 py-3 border border-primary/20 text-primary font-bold rounded-xl hover:bg-primary/10 transition-colors">
              View Public Profile
            </button>
          </aside>

          {/* Connected Accounts (Glassmorphism inspired) */}
          <section className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-3xl flex items-center justify-between border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 fill-[#0077B5]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </div>
                <div>
                  <p className="font-bold">LinkedIn</p>
                  <p className="text-xs text-tertiary">Connected</p>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-error transition-colors">
                <span className="material-symbols-outlined">link_off</span>
              </button>
            </div>
            <div className="bg-surface-container-low p-6 rounded-3xl flex items-center justify-between border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 fill-on-surface" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </div>
                <div>
                  <p className="font-bold">GitHub</p>
                  <p className="text-xs text-on-surface-variant">Not Linked</p>
                </div>
              </div>
              <button className="text-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">link</span>
              </button>
            </div>
            <div className="bg-surface-container-low p-6 rounded-3xl flex items-center justify-between border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DB4437]/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 fill-[#DB4437]" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.39-7.84 5.39-4.93 0-8.96-4.08-8.96-9.11s4.03-9.11 8.96-9.11c2.81 0 4.69 1.17 5.76 2.21l2.58-2.48c-1.65-1.54-4.22-2.48-8.34-2.48-6.63 0-12 5.37-12 12s5.37 12 12 12c6.91 0 11.52-4.86 11.52-11.71 0-.79-.08-1.39-.18-1.99h-11.34z"></path></svg>
                </div>
                <div>
                  <p className="font-bold">Google</p>
                  <p className="text-xs text-tertiary">Connected</p>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-error transition-colors">
                <span className="material-symbols-outlined">link_off</span>
              </button>
            </div>
          </section>

          {/* Advanced Toggle Section (Privacy & Preferences) */}
          <section className="lg:col-span-6 bg-surface-container p-8 rounded-3xl space-y-8">
            <h3 className="text-xl font-bold mb-4">Discovery Preferences</h3>
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
              <div>
                <p className="font-semibold">Incognito Browsing</p>
                <p className="text-xs text-on-surface-variant">Hide your identity from current employer</p>
              </div>
              <button className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1">
                <div className="w-4 h-4 bg-surface rounded-full absolute right-1"></div>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
              <div>
                <p className="font-semibold">AI Match Discovery</p>
                <p className="text-xs text-on-surface-variant">Allow companies to find you via AI sourcing</p>
              </div>
              <button className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1 shadow-[0_0_8px_rgba(173,198,255,0.3)]">
                <div className="w-4 h-4 bg-surface rounded-full absolute right-1"></div>
              </button>
            </div>
          </section>

          {/* Danger Zone / Quick Actions */}
          <section className="lg:col-span-6 bg-error-container/10 p-8 rounded-3xl border border-error/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-error mb-2">Account Control</h3>
              <p className="text-on-surface-variant text-sm mb-6">Archive your profile or request data deletion.</p>
            </div>
            <div className="space-y-4">
              <button className="w-full py-3 bg-surface-container-high text-on-surface font-semibold rounded-xl hover:bg-surface-bright transition-all">
                Download My Data (.JSON)
              </button>
              <button className="w-full py-3 text-error font-bold rounded-xl hover:bg-error/10 transition-all border border-error/20">
                Deactivate Account
              </button>
            </div>
          </section>
        </div>

        {/* Sticky Footer Save */}
        <div className="mt-12 flex items-center justify-between bg-surface-container-high/80 backdrop-blur-xl p-4 rounded-2xl sticky bottom-6 border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3 px-2">
            <span className="material-symbols-outlined text-tertiary">verified_user</span>
            <span className="text-sm text-on-surface-variant">All changes are encrypted.</span>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 text-on-surface-variant font-medium hover:text-on-surface transition-colors">Discard Changes</button>
            <button className="px-8 py-2 bg-gradient-to-br from-primary to-on-primary-container text-surface-container-lowest font-bold rounded-xl active:scale-95 transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
