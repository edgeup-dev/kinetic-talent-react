import { Link } from 'react-router-dom';

export default function CompanySettingsPage() {
  return (
    <section className="px-8 pt-12 pb-8 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-on-surface mb-2">Company Settings</h2>
        <p className="text-on-surface-variant text-lg">Manage your workspace identity, team, and operational preferences.</p>
      </div>

      {/* Custom Tab Navigation */}
      <nav className="flex gap-8 border-b border-outline-variant/10 mb-12">
        <button className="pb-4 text-primary border-b-2 border-primary font-semibold text-sm transition-all">Company Info</button>
        <button className="pb-4 text-on-surface-variant hover:text-on-surface font-medium text-sm transition-all">Team Members</button>
        <button className="pb-4 text-on-surface-variant hover:text-on-surface font-medium text-sm transition-all">Notifications</button>
        <button className="pb-4 text-on-surface-variant hover:text-on-surface font-medium text-sm transition-all">Billing</button>
      </nav>

      <div className="grid grid-cols-12 gap-8">
        {/* Profile Identity Card */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-high p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-outline-variant/20">
                  <img alt="Company Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmCy65tzAnzVYKHcvfPDPCvaNgTDAPspgEBalUlIyj5oa7cRR1Z4sIc9yk26I3rcbRhjPgdAo2xflI9mln86DiGXCS0wArvNXtURzU7VwBru0Yj7CrQ7RMFeRmq7MQiVzXtbR7dg0LCDy7sJWVMyDz0ZTQb_e4-puXOLQFiyW8r8IibyB9Ar2o4Erp4Xcgx9YInhLw-xHr6xgfb-VKqk3dLCY7VViQeZRAqGtrHSlOUD8cGkAKw4wpDm3_9P96rv_8OMXpeACkOzy7" />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-surface-container-highest p-1.5 rounded-lg border border-outline-variant/30 text-primary shadow-xl">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
              <h3 className="text-xl font-bold text-on-surface">Kinetic Global Ltd</h3>
              <p className="text-on-surface-variant text-sm mt-1">enterprise.kinetic.io</p>
              <div className="mt-8 w-full pt-6 border-t border-outline-variant/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Account Status</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-tertiary-container text-tertiary uppercase tracking-tighter">Verified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Member Since</span>
                  <span className="text-xs font-medium text-on-surface">Oct 2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Region</span>
                  <span className="text-xs font-medium text-on-surface">North America</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">info</span>
              <h4 className="font-semibold text-sm">Security Tip</h4>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Two-factor authentication is currently disabled for your team. Enable it in the Security tab to protect sensitive hiring data.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container p-10 rounded-xl">
            <form className="space-y-10">
              {/* Section: General Details */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-on-surface flex items-center gap-2">
                  General Details
                  <span className="h-1 w-1 rounded-full bg-primary/40"></span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Company Name</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" type="text" defaultValue="Kinetic Global Ltd" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Public URL</label>
                    <div className="flex">
                      <span className="bg-surface-container-high px-3 py-3 rounded-l-lg text-xs text-on-surface-variant border-r border-background/20">kinetic.io/</span>
                      <input className="w-full bg-surface-container-lowest border-none rounded-r-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" type="text" defaultValue="kinetic-global" />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Tagline</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" placeholder="e.g. Revolutionizing recruitment through intelligence" type="text" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Description</label>
                    <textarea className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface resize-none" rows="4" defaultValue="Kinetic Global is a tier-one technology partner specializing in high-velocity talent pipelines for Fortune 500 enterprises. Our platform leverages neural networks to identify cultural and technical fit at scale."></textarea>
                  </div>
                </div>
              </div>

              {/* Section: Industry & Size */}
              <div className="space-y-6 pt-8 border-t border-outline-variant/10">
                <h4 className="text-lg font-semibold text-on-surface flex items-center gap-2">
                  Industry &amp; Size
                  <span className="h-1 w-1 rounded-full bg-primary/40"></span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Industry</label>
                    <select className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface appearance-none">
                      <option>Technology &amp; Software</option>
                      <option>Fintech</option>
                      <option>Healthcare</option>
                      <option>Automotive</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Headcount</label>
                    <select className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface appearance-none">
                      <option>500 - 1,000 Employees</option>
                      <option>1,000 - 5,000 Employees</option>
                      <option>5,000+ Employees</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section: Social & Web */}
              <div className="space-y-6 pt-8 border-t border-outline-variant/10">
                <h4 className="text-lg font-semibold text-on-surface flex items-center gap-2">
                  Online Presence
                  <span className="h-1 w-1 rounded-full bg-primary/40"></span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Website URL</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" type="url" defaultValue="https://kinetic-global.io" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">LinkedIn Handle</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/30 transition-all text-on-surface" type="text" defaultValue="linkedin.com/company/kinetic" />
                  </div>
                </div>
              </div>

              <div className="pt-10 flex justify-end gap-4">
                <button className="px-6 py-2.5 rounded-lg font-semibold text-sm text-on-surface-variant hover:bg-surface-container-high transition-all" type="button">Discard Changes</button>
                <button className="px-8 py-2.5 bg-gradient-to-br from-primary to-on-primary-container text-on-primary rounded-lg font-bold text-sm shadow-xl shadow-primary/10 hover:opacity-90 active:scale-95 transition-all" type="submit">Save Profile Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
