import { Link } from 'react-router-dom';

export default function CompanyRegistrationPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-start py-12 px-6">
      {/* Progressive Wizard Shell */}
      <div className="w-full max-w-5xl">
        {/* Step Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">Company Profile</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">This is how talent sees your organization. Make a lasting impression with your vision and environment.</p>
        </div>

        {/* Bento Layout Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Visual Assets */}
          <div className="md:col-span-5 space-y-6">
            {/* Brand Assets Card */}
            <div className="bg-surface-container-low p-8 rounded-xl space-y-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Identity Assets</h3>
              {/* Cover Image Upload */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-on-surface-variant">Cover Image</label>
                <div className="relative h-40 w-full rounded-lg overflow-hidden group cursor-pointer bg-surface-container-high border-2 border-dashed border-outline-variant/30 hover:border-primary/50 transition-all">
                  <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo-flc84nALBwXEoCiit8YB0M4sBiskX8gFBYnZ-GZw-px9YQynKTlC5k5oh2FdlvuZpDNOxm_qsXG8Zjzs8h6KfaoCUY35wxo4xodX9FUGS4xwiUEV6zQiQeH7UKk-eq1WU6wL-LkaaJxNZpvUu6MkVk26tjGsEwcAxeqfEXH2xa1VZCStDBGckg_umxIauG5Z059TsUtiMW1C-oCxVqF7PNcLZM_l4cHPFoh44coemUVuXR84723xv-vOQBNu4lCkrajfh6DpVQt" alt="Cover" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-dim/40">
                    <span className="material-symbols-outlined text-primary-fixed mb-2">add_a_photo</span>
                    <span className="text-xs font-semibold text-primary-fixed">Change Cover</span>
                  </div>
                </div>
              </div>
              {/* Logo Upload */}
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-2xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant">corporate_fare</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-on-surface">Company Logo</h4>
                  <p className="text-xs text-on-surface-variant">PNG or SVG, min 400x400px.</p>
                  <button className="text-xs font-bold text-primary hover:underline">Upload New</button>
                </div>
              </div>
            </div>

            {/* Tech Stack Bento Piece */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Tech Stack</h3>
                <button className="text-primary-fixed text-xs flex items-center gap-1 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">add</span> Add Tech
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">React.js</span>
                <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">TypeScript</span>
                <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">PostgreSQL</span>
                <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">AWS</span>
                <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">Kubernetes</span>
                <span className="px-3 py-1.5 bg-surface-container-high rounded-full text-xs font-medium text-on-surface-variant">Python</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Details */}
          <div className="md:col-span-7 space-y-6">
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-8">Narrative &amp; Core</h3>
              <div className="space-y-8">
                {/* About Company */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-on-surface-variant">About the Company</label>
                  <textarea className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-outline/40" placeholder="Describe your mission, history, and what makes your workplace unique..." rows="6"></textarea>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-outline/60">
                    <span>Professional Tone Recommended</span>
                    <span>0 / 1000 characters</span>
                  </div>
                </div>

                {/* Values Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-medium text-on-surface-variant">Core Values</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group p-4 bg-surface-container-lowest rounded-lg border border-transparent hover:border-primary/20 cursor-pointer transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-primary">auto_awesome</span>
                        <div className="w-4 h-4 rounded-full border border-outline group-hover:border-primary"></div>
                      </div>
                      <p className="text-sm font-semibold text-on-surface">Innovation First</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">We push the boundaries of what's possible in tech.</p>
                    </div>
                    <div className="group p-4 bg-surface-container-high border-primary/40 rounded-lg border cursor-pointer transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-primary">groups</span>
                        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[10px] text-on-primary">check</span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-on-surface">Radical Candor</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">Open, honest communication across all levels.</p>
                    </div>
                    <div className="group p-4 bg-surface-container-lowest rounded-lg border border-transparent hover:border-primary/20 cursor-pointer transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-primary">verified</span>
                        <div className="w-4 h-4 rounded-full border border-outline group-hover:border-primary"></div>
                      </div>
                      <p className="text-sm font-semibold text-on-surface">Ownership</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">Every employee is a stakeholder in our success.</p>
                    </div>
                    <div className="group p-4 bg-surface-container-lowest rounded-lg border border-transparent hover:border-primary/20 cursor-pointer transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-primary">psychology</span>
                        <div className="w-4 h-4 rounded-full border border-outline group-hover:border-primary"></div>
                      </div>
                      <p className="text-sm font-semibold text-on-surface">Continuous Growth</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">Dedicated budgets for learning and development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-6">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Previous Step
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold bg-gradient-to-br from-primary to-on-primary-container text-on-primary shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Continue to Culture
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
