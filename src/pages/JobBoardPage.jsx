import { Link } from 'react-router-dom';

export default function JobBoardPage() {
  return (
    <div className="flex-1 flex overflow-hidden h-[calc(100vh-4rem)]">
      {/* Filters (Left Rail) */}
      <aside className="w-72 bg-surface-container-low p-6 flex flex-col gap-8 overflow-y-auto custom-scrollbar shrink-0">
        <div>
          <h3 className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-widest mb-6">Filter Positions</h3>
          {/* Filter Group: Job Type */}
          <div className="mb-8">
            <p className="text-sm font-medium text-on-surface mb-3">Job Type</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input defaultChecked className="rounded border-outline-variant/20 bg-surface-container-lowest text-on-primary-container focus:ring-primary/30" type="checkbox" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Full-time</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant/20 bg-surface-container-lowest text-on-primary-container focus:ring-primary/30" type="checkbox" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Contract</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant/20 bg-surface-container-lowest text-on-primary-container focus:ring-primary/30" type="checkbox" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Remote</span>
              </label>
            </div>
          </div>
          {/* Filter Group: Experience */}
          <div className="mb-8">
            <p className="text-sm font-medium text-on-surface mb-3">Experience</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-full border-outline-variant/20 bg-surface-container-lowest text-on-primary-container focus:ring-primary/30" name="exp" type="radio" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Entry Level</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input defaultChecked className="rounded-full border-outline-variant/20 bg-surface-container-lowest text-on-primary-container focus:ring-primary/30" name="exp" type="radio" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Intermediate</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-full border-outline-variant/20 bg-surface-container-lowest text-on-primary-container focus:ring-primary/30" name="exp" type="radio" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface">Senior</span>
              </label>
            </div>
          </div>
          {/* Filter Group: Salary Range */}
          <div className="mb-8">
            <p className="text-sm font-medium text-on-surface mb-3">Salary Range</p>
            <input className="w-full h-1 bg-surface-container-high rounded-full appearance-none accent-primary" type="range" />
            <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-medium">
              <span>$40k</span>
              <span>$250k+</span>
            </div>
          </div>
          {/* Filter Group: Industry */}
          <div>
            <p className="text-sm font-medium text-on-surface mb-3">Industry</p>
            <select className="w-full bg-surface-container-lowest border-none text-sm text-on-surface-variant rounded-lg focus:ring-2 focus:ring-primary/30">
              <option>Fintech</option>
              <option>HealthTech</option>
              <option>Artificial Intelligence</option>
              <option>E-commerce</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main Listing Area */}
      <section className="flex-1 flex flex-col bg-surface overflow-hidden">
        {/* Hero Search Bar */}
        <div className="p-8 border-b border-outline-variant/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-container-high p-1.5 rounded-xl shadow-lg flex items-center gap-2">
              <div className="flex-1 flex items-center px-4 gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">search</span>
                <input className="w-full bg-transparent border-none text-sm focus:ring-0 placeholder-on-surface-variant/50" placeholder="Role: Senior Product Designer" type="text" />
              </div>
              <div className="w-px h-8 bg-outline-variant/20"></div>
              <div className="flex-1 flex items-center px-4 gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                <input className="w-full bg-transparent border-none text-sm focus:ring-0 placeholder-on-surface-variant/50" placeholder="Location: San Francisco, CA" type="text" />
              </div>
              <button className="bg-gradient-to-br from-primary to-on-primary-container text-on-primary px-8 py-2.5 rounded-lg font-semibold text-sm transition-transform active:scale-95 shadow-lg shadow-on-primary-container/20">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {/* Job Card 1 (Active State) */}
            <div className="bg-surface-container-high p-6 rounded-xl border-l-4 border-primary shadow-xl transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden">
                    <img alt="Company logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHfFkX6Y7arNC6VhujAl2DdM_-SC0ZnsDBVA9G5BkaDa_3PKPlifxTVuI9JePFmLfKBDBVCWdrEBJ8ptbfSys-zGxEqzK5hWbdo17HSh3SG32UMpFyNEBGiz1FQUZisX693KWBBsQPOwqx_fU5eYi40MIDryMELjY28c00gZ2RptVqH7_5bFu8Jek5kMATzYj-gtOOW_5i6-zrbHAVHJ-JbH22EI0-OaGHEtH7BTlFrr-txTmEoNut6jwCIBQ_VQ2jn4z8SJsIwdwn" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface">Senior UX Architect</h3>
                    <p className="text-sm text-on-surface-variant">Neural Systems &bull; Remote</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="bg-tertiary-container text-tertiary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">98% AI Match</span>
                  <span className="text-sm font-semibold text-primary">$180k - $220k</span>
                </div>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">Interaction Design</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">Figma</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">Prototyping</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">+4 more</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                We are looking for a visionary UX Architect to lead the design of our next-generation neural interface platforms...
              </p>
            </div>

            {/* Job Card 2 */}
            <div className="bg-surface-container-low hover:bg-surface-container-high p-6 rounded-xl transition-all cursor-pointer border border-transparent hover:border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden">
                    <img alt="Company logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_msDsZh6naXHwgrjYlHBkBfpa14KTXXwBjD5sKYVfACINm6oAH1UHzPNqJzQszbOMJi8H1JgKBN3Lmf5gVttWtm2SM-CGCpIui8x-4seLzosbNd06lK0wBE8EOx1TdnzTs911reHsa7HhOljlrbM07r3hKAj5TlafZSyuGetrqxKZM8vHN3B3jucNhHV22KaUCxENYCHtIYZ7Ug7TZUyl6aKw0qf-EPK2GcqdKROc_SDVB6oPugOnbP1FyR5emy995EemfHQeS5NR" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface">Full Stack Engineer</h3>
                    <p className="text-sm text-on-surface-variant">Prism Analytics &bull; New York, NY</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">85% Match</span>
                  <span className="text-sm font-semibold text-on-surface-variant">$150k - $190k</span>
                </div>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">PostgreSQL</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                Join a fast-growing data visualization startup to build scalable infrastructures and beautiful dashboard experiences...
              </p>
            </div>

            {/* Job Card 3 */}
            <div className="bg-surface-container-low hover:bg-surface-container-high p-6 rounded-xl transition-all cursor-pointer border border-transparent hover:border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden">
                    <img alt="Company logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSIInHgoHoJ1EaZKfQGOyU5KkJl_FVbMfbpmv0okP6lkYMXwVgTIcvdmdKdYGZR-pAWGGkUOeDWg8Ry92hR5lk2BFsCrKRU6hTTcrPcDnlp9JIINZdefrWzqtYXS3_TWpguALfTlpSP3_6qOl7qTjjZ_rFzrtF6fM9WsS4Mo1MEAtQvqBnOAFCZk2lZA7gD9Kg0oXk0kaBX29ZAWH14ZqdU0F_sgimZCz-9zrGAkltdtNDw0CSYPInN2Fk0o29P0Kmf5FxJJ7qP6QI" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface">Staff Product Designer</h3>
                    <p className="text-sm text-on-surface-variant">BioStream Health &bull; Austin, TX</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="bg-tertiary-container text-tertiary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">92% Match</span>
                  <span className="text-sm font-semibold text-on-surface-variant">$190k - $240k</span>
                </div>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">Healthcare UX</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">Systems Thinking</span>
                <span className="bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full">Mentorship</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                Drive the design strategy for our patient-care ecosystem and mentor our growing team of designers...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View (Right Rail) */}
      <aside className="w-[480px] bg-surface-container-low border-l border-outline-variant/10 flex flex-col overflow-hidden shrink-0">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <div className="mb-8">
            <span className="bg-primary-container text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Featured Role</span>
            <h2 className="text-3xl font-bold mt-4 leading-tight">Senior UX Architect</h2>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant">
              <span className="text-sm">Neural Systems</span>
              <span className="text-xs opacity-30">&bull;</span>
              <span className="text-sm">San Francisco / Remote</span>
            </div>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-surface-container-highest p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant mb-1">Annual Salary</p>
              <p className="text-lg font-bold text-primary">$180k - $220k</p>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant mb-1">AI Match Score</p>
              <p className="text-lg font-bold text-tertiary">98% High</p>
            </div>
          </div>
          {/* Description */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-on-surface mb-3">About the Role</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                At Neural Systems, we're building the bridge between human thought and digital interfaces. As a Senior UX Architect, you'll be at the forefront of this evolution, defining the patterns and paradigms that will shape the future of computing.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-on-surface mb-3">Key Responsibilities</h4>
              <ul className="text-sm text-on-surface-variant space-y-3 list-disc pl-4">
                <li>Architect complex interaction models for BCI (Brain-Computer Interface) applications.</li>
                <li>Collaborate with neuroscientists and software engineers to translate biological data into intuitive visuals.</li>
                <li>Maintain and expand our global design system for spatial computing.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-on-surface mb-3">Requirements</h4>
              <ul className="text-sm text-on-surface-variant space-y-3 list-disc pl-4">
                <li>8+ years of experience in product design, focusing on complex technical systems.</li>
                <li>Deep expertise in Figma, WebGL, or similar visualization tools.</li>
                <li>Strong understanding of cognitive psychology and ergonomics.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sticky CTA */}
        <div className="p-8 bg-surface-container-high border-t border-outline-variant/10">
          <Link to="/job-application" className="w-full bg-gradient-to-br from-primary to-on-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] block text-center">
            Apply Now
          </Link>
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">bookmark</span>
              Save Job
            </button>
            <button className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">share</span>
              Share Position
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
