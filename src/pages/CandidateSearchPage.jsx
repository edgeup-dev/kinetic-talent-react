import { Link } from 'react-router-dom';

export default function CandidateSearchPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* SideNavBar / Filters Implementation */}
      <aside className="w-72 bg-surface-container-low border-none h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto p-6 flex flex-col gap-8">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Deep Filtering</p>
          {/* Skills Multi-select */}
          <div className="space-y-3 mb-8">
            <label className="text-xs font-medium text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">psychology</span>
              Skills
            </label>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-container-high text-primary-fixed text-[10px] rounded border border-primary/20 flex items-center gap-1">
                React <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
              </span>
              <span className="px-2 py-1 bg-surface-container-high text-primary-fixed text-[10px] rounded border border-primary/20 flex items-center gap-1">
                Python <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
              </span>
              <button className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] rounded flex items-center gap-1 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[12px]">add</span> Add Skill
              </button>
            </div>
          </div>
          {/* Experience Slider */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">work_history</span>
                Experience
              </label>
              <span className="text-[10px] text-on-surface-variant">5+ Years</span>
            </div>
            <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
          </div>
          {/* Assessment Range */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">monitoring</span>
                Min. Score
              </label>
              <span className="text-[10px] text-on-surface-variant">80%</span>
            </div>
            <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-tertiary" type="range" />
          </div>
          {/* Availability */}
          <div className="space-y-3">
            <label className="text-xs font-medium text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">event_available</span>
              Availability
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                <span className="text-xs text-on-surface-variant group-hover:text-on-surface transition-colors">Immediate Start</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                <span className="text-xs text-on-surface-variant group-hover:text-on-surface transition-colors">Within 2 Weeks</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input defaultChecked className="rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                <span className="text-xs text-on-surface-variant group-hover:text-on-surface transition-colors">Remote Only</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-8">
          <button className="w-full bg-gradient-to-br from-primary to-on-primary-container text-on-primary-fixed py-3 rounded-lg font-bold text-xs shadow-lg shadow-primary/10 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">person_search</span>
            Update Search
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-surface p-10">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Talent Database</h1>
            <p className="text-on-surface-variant text-sm">Showing <span className="text-primary">1,248</span> matching candidates based on your deep filters.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-lg text-xs font-semibold hover:text-on-surface transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">sort</span>
              Relevance
            </button>
            <button className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-lg text-xs font-semibold hover:text-on-surface transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">file_download</span>
              Export CSV
            </button>
          </div>
        </header>

        {/* Candidate Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {/* Candidate Card 1 */}
          <div className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-all border border-white/5">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4">
                <div className="relative">
                  <img alt="Candidate profile" className="w-16 h-16 rounded-xl object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAyZFXAMvC_oCyyfCMTRa3kbzCZiu_zR7Baf7s9cW9OUf4bh7GvG9ewySMZYOHJat49ReshaMl9AZEtowPiM_s1b8LPq6u199x93SVSXz72-mu5pju7q6HXV-j3_uDBsAARWOF9oHC1hJZyRoxOyLxzJ7hWJXPRU936jAfp1p195iSrkHPcTlcNAD3zuSLYSwh2tohVyDOMmWP7GuSTiV-76cCTVhQCj4Qnq87k7HCZwLuusRCKpYxIL_RR1nzcGObOcrwo3CJLTaJ" />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-surface-container-low"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">Elena Rodriguez</h3>
                  <p className="text-xs text-on-surface-variant mb-1">Senior Fullstack Engineer</p>
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    San Francisco, CA
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-highest" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                    <circle className="text-tertiary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="14" strokeWidth="4"></circle>
                  </svg>
                  <span className="absolute text-sm font-black text-on-surface">92</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary mt-1">Assessment</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">TypeScript</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">Go</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">GraphQL</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">AWS</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/candidate-profile" className="bg-surface-container-highest text-primary py-2.5 rounded-lg text-xs font-bold hover:bg-surface-bright transition-all text-center">View Profile</Link>
              <button className="bg-primary/10 text-primary py-2.5 rounded-lg text-xs font-bold hover:bg-primary/20 transition-all">Send Offer</button>
            </div>
          </div>

          {/* Candidate Card 2 */}
          <div className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-all border border-white/5">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4">
                <div className="relative">
                  <img alt="Candidate profile" className="w-16 h-16 rounded-xl object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDracSPsVJTdDQGv9comIR5tA5_DeNUlRpjBJXHKmeRxMynPkLaCqWjyKK1natn8YTddHdBwsejrFJMaD2C0PCIMnJ2ymt-VIuHjm62jz4mQy3fH6olnediZzAd-AhoDN4jiDuo36jHZBGRj0iaviPIvW8MrVn6_tc9l0r7ymmqe4K12vOwZGCdas_91qyoNJrGMxVs40vBPy_h-7x4rHLF0hFr-YcJ3E9TySLLdZfBx9umliJNUFnY7B3f6YXow3xakPLSnV0ORFPE" />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-surface-container-low"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">Marcus Chen</h3>
                  <p className="text-xs text-on-surface-variant mb-1">Backend Infrastructure Lead</p>
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    Austin, TX (Remote)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-highest" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                    <circle className="text-tertiary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="21" strokeWidth="4"></circle>
                  </svg>
                  <span className="absolute text-sm font-black text-on-surface">88</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary mt-1">Assessment</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">Kubernetes</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">Rust</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">Distributed Systems</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/candidate-profile" className="bg-surface-container-highest text-primary py-2.5 rounded-lg text-xs font-bold hover:bg-surface-bright transition-all text-center">View Profile</Link>
              <button className="bg-primary/10 text-primary py-2.5 rounded-lg text-xs font-bold hover:bg-primary/20 transition-all">Send Offer</button>
            </div>
          </div>

          {/* Candidate Card 3 */}
          <div className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-all border border-white/5">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4">
                <div className="relative">
                  <img alt="Candidate profile" className="w-16 h-16 rounded-xl object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGwnOmLpHKDQgBLNK8ScHmXaKVi9UvY4-swBMjhnosG6skCGfOHF_rV4XhszJyNJgS0oWup3FACobXpmu2UIiu22bSZbOmaB1zAG2G3agDA8VVA0U56MqkkOVvbkOLBCBtmRB5XyckGuc9i_Wuhlr7kFJ0Jck8vGQNiSOzXHxN0grxjnWJsevNR_tAr-UrwQbYNtw9_bzOGQGcbHaspOCOBVViXVOI0wNbsEmvCZcreUWwR6Fy2lyrCSKU7M6Kg2VDc83iIjn_TctC" />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-surface-container-low"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">Sarah J. Miller</h3>
                  <p className="text-xs text-on-surface-variant mb-1">Product Architect</p>
                  <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    London, UK
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-highest" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                    <circle className="text-tertiary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="9" strokeWidth="4"></circle>
                  </svg>
                  <span className="absolute text-sm font-black text-on-surface">95</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-tertiary mt-1">Assessment</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">System Design</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">Agile</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded text-[10px] font-medium text-on-surface-variant">Strategy</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/candidate-profile" className="bg-surface-container-highest text-primary py-2.5 rounded-lg text-xs font-bold hover:bg-surface-bright transition-all text-center">View Profile</Link>
              <button className="bg-primary/10 text-primary py-2.5 rounded-lg text-xs font-bold hover:bg-primary/20 transition-all">Send Offer</button>
            </div>
          </div>

          {/* Bento Style Stats/Insights Card */}
          <div className="xl:col-span-2 2xl:col-span-3 bg-gradient-to-br from-surface-container-low to-surface-container-lowest rounded-xl p-8 border border-white/5 flex items-center justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-on-surface mb-2">Talent Quality Analysis</h4>
              <p className="text-on-surface-variant max-w-lg mb-6">Your current candidate pool has an average assessment score of <span className="text-tertiary font-bold">84%</span>. We recommend expanding the 'React' skill search to see more diverse top-tier candidates.</p>
              <div className="flex gap-8">
                <div>
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">Growth</p>
                  <p className="text-2xl font-black text-on-surface">+12.4%</p>
                </div>
                <div className="h-10 w-[1px] bg-outline-variant/30"></div>
                <div>
                  <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">Diversity</p>
                  <p className="text-2xl font-black text-on-surface">A+</p>
                </div>
              </div>
            </div>
            <div className="relative h-48 w-64 hidden md:block">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full translate-x-12 translate-y-12"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-primary/20">analytics</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
