import { Link } from 'react-router-dom';

export default function AiRecommendationsPage() {
  return (
    <div className="pb-12 px-6 md:px-12 min-h-screen">
      {/* Hero Header */}
      <header className="max-w-6xl mx-auto mb-12 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 block">
              Curation Intelligence
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-none">
              AI-Matched Recommendations
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl pt-2">
              Highly relevant candidates extracted from the global pool using multi-vector skill
              analysis and historical hiring patterns.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-surface-container-high rounded-full px-4 py-2 flex items-center gap-2 border border-outline-variant/10">
              <span className="text-xs font-semibold text-on-surface-variant">Matching for:</span>
              <span className="text-sm font-medium text-primary">All Active Roles</span>
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Strip */}
      <section className="max-w-6xl mx-auto mb-10 overflow-x-auto">
        <div className="flex items-center gap-3 pb-2">
          <button className="bg-surface-container-high px-5 py-2 rounded-full text-sm font-medium text-primary whitespace-nowrap">
            All Recommendations
          </button>
          <button className="bg-surface-container-low hover:bg-surface-container-high px-5 py-2 rounded-full text-sm font-medium text-on-surface-variant whitespace-nowrap transition-colors">
            Senior React Developer
          </button>
          <button className="bg-surface-container-low hover:bg-surface-container-high px-5 py-2 rounded-full text-sm font-medium text-on-surface-variant whitespace-nowrap transition-colors">
            Product Designer (L5)
          </button>
          <button className="bg-surface-container-low hover:bg-surface-container-high px-5 py-2 rounded-full text-sm font-medium text-on-surface-variant whitespace-nowrap transition-colors">
            Backend Architect
          </button>
          <button className="bg-surface-container-low hover:bg-surface-container-high px-5 py-2 rounded-full text-sm font-medium text-on-surface-variant whitespace-nowrap transition-colors">
            Staff Engineer
          </button>
          <div className="h-6 w-[1px] bg-outline-variant/20 mx-2"></div>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface px-3 py-2 text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-lg">tune</span> Filters
          </button>
        </div>
      </section>

      {/* Content Feed: Bento Grid Variation */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Feature Recommendation (Large Card) */}
        <div className="lg:col-span-8 group relative overflow-hidden bg-surface-container rounded-3xl p-8 transition-all hover:bg-surface-container-high ring-1 ring-outline-variant/5">
          <div className="absolute top-0 right-0 p-8">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-tertiary uppercase tracking-widest mb-1">
                Top Match
              </span>
              <div className="text-4xl font-bold text-gradient">98%</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-primary/10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvCC-DBe7tXkqLl2LaJ8nx9U9FhexoS4dly4JoKsWchoUM7GE3cA1qatmFLsbTYbnH7Q8Kg6pMIuLJWCLiKgKmZidAnHtvXnPRSjXafXPb5ypvC7rOWxSfYopu8vREZrHBtli3zDGqdIHifkG2QDH-Q4S9fCxslrbKLe_AwGFfKJ-sOU2rkAYMVEne90M1XDVCVsenV3RCvGgyAyxktezseQmB0pP8RWOijcPh9_sugoFSCTp3fa-oRFc47HWmX90mbs8sWlfimm8W"
                  alt="Sarah Chen"
                />
              </div>
              <div
                className="absolute -bottom-2 -right-2 bg-tertiary text-on-tertiary-container rounded-full p-1 border-4 border-surface-container"
              >
                <span
                  className="material-symbols-outlined text-xs"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-2xl font-bold text-on-surface tracking-tight">Sarah Chen</h3>
              <p className="text-on-surface-variant font-medium">
                Principal Engineer &bull; Previous Google, Stripe
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded text-xs font-semibold">
                  Distributed Systems
                </span>
                <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded text-xs font-semibold">
                  GoLang
                </span>
                <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded text-xs font-semibold">
                  Cloud Architecture
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest/50 rounded-2xl p-6 mb-8 border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <span className="text-sm font-bold text-on-surface uppercase tracking-wider">
                AI Assessment Reason
              </span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              Highly congruent match for your{' '}
              <span className="text-on-surface font-semibold">Senior React Developer</span> role.
              Sarah demonstrates exceptional proficiency in scalable frontend architecture and has led
              teams of 12+ through complex migration cycles. Her historical career velocity suggests
              high adaptability for Kinetic's current sprint pace.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
                  Overall Score
                </p>
                <p className="text-xl font-bold text-on-surface">
                  A+{' '}
                  <span className="text-sm font-medium text-tertiary ml-1">Excellent</span>
                </p>
              </div>
              <div className="h-10 w-[1px] bg-outline-variant/20"></div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
                  Availability
                </p>
                <p className="text-xl font-bold text-on-surface">Immediate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                to="/candidates/sarah-chen"
                className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-surface-container-highest text-on-surface font-semibold hover:bg-surface-bright transition-all active:scale-95 text-center"
              >
                View Profile
              </Link>
              <button
                className="flex-1 md:flex-none px-8 py-3 rounded-xl text-on-primary-fixed font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95"
                style={{ background: 'linear-gradient(135deg, #ADC6FF 0%, #357DF1 100%)' }}
              >
                Send Offer
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Stat/Insight Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#222A3D] rounded-3xl p-6 border border-outline-variant/10 shadow-2xl">
            <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">insights</span>
              Talent Pool Health
            </h4>
            <div className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-on-surface">142</p>
                  <p className="text-xs text-on-surface-variant mt-1">Qualified Matches</p>
                </div>
                <div className="text-tertiary text-xs font-bold flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span> +12%
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-3/4 rounded-full"></div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed italic">
                "Your talent pipeline for engineering is currently 40% more robust than the industry
                average for this quarter."
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#131B2E] to-[#0B1326] rounded-3xl p-6 border border-primary/10 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-4">
              Quick Post
            </h4>
            <p className="text-xs text-on-surface-variant mb-6">
              Need a custom candidate search? Describe the role in one sentence.
            </p>
            <div className="relative">
              <textarea
                className="w-full bg-surface-container-lowest border-none rounded-2xl p-4 text-sm focus:ring-1 focus:ring-primary/40 h-24 resize-none transition-all"
                placeholder="e.g. Seeking a Senior Product Manager with experience in FinTech scaling..."
              ></textarea>
              <button className="absolute bottom-3 right-3 p-2 bg-primary text-on-primary rounded-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Feed Cards */}
        <div className="lg:col-span-6 group bg-surface-container rounded-3xl p-6 transition-all hover:bg-surface-container-high border border-outline-variant/5">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnevxjtJaySNA_4TBZCPS2vA9FMBqx4J0qPK3doIscxYOHEVLQhkJbkhg4k4HYzplLfH9kgam1e7EXNEy-U5lKnA7kRLIZ9zp4OkTmjfbGAo4Q2NSM6jAZJe7YPiNa1AMbahm2FrEBAUQPQJNNYO0z413RZlVGckEP2qqF-zaCvMOBkHxtDboqYaY_n9kXi-ATAUr7SXB-wG8oq7XsLTtx16McJFPG1sfeSZ2U0xzjewEXWxO5HKn-OiYRau5_Nbf6vUdwidTAIHgP"
                  alt="Alex Rivera"
                />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Alex Rivera</h4>
                <p className="text-xs text-on-surface-variant">Lead UI Architect &bull; Former Meta</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                92% Match
              </span>
              <p className="text-[10px] text-on-surface-variant mt-1">L5 Product Designer</p>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
            "Deep expertise in Design Systems and React. Successfully built the internal component
            library at Meta for the Ads platform."
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/candidates/alex-rivera"
              className="flex-1 py-2.5 rounded-lg bg-surface-container-highest text-xs font-bold hover:bg-surface-bright transition-all text-center"
            >
              Profile
            </Link>
            <button className="flex-1 py-2.5 rounded-lg border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-all">
              Send Offer
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 group bg-surface-container rounded-3xl p-6 transition-all hover:bg-surface-container-high border border-outline-variant/5">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkQpHUlN_OemCTe2BRu45GMJ-ZaGt6o68JL2v5jngCpxSbMovxDjgQCmDJPmxPvV94Bu5pzhb6y3AaPAZ5bEBfXt93_-EVioKT72z5lHFXYaJIisFtIPpTatLmjpuVB2FEZspIuEXtAVa1L7WGw-ENMEReCDvF9cgVUccRRZm64FVaxftEdtI_hvz1YvjtLWd2I8rMz3mzZumD5_YOf_gjy7x7Ip2ikjNCQJ6DB6s6J6pv-ZlBuobHXSobFHkQDnVEFnH2Py8FcpU"
                  alt="Jordan Smyth"
                />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Jordan Smyth</h4>
                <p className="text-xs text-on-surface-variant">Cloud Ops Lead &bull; Former AWS</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                89% Match
              </span>
              <p className="text-[10px] text-on-surface-variant mt-1">Backend Architect</p>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
            "Master of Kubernetes orchestration and serverless paradigms. Reduced AWS spend by 30% for
            previous employer."
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/candidates/jordan-smyth"
              className="flex-1 py-2.5 rounded-lg bg-surface-container-highest text-xs font-bold hover:bg-surface-bright transition-all text-center"
            >
              Profile
            </Link>
            <button className="flex-1 py-2.5 rounded-lg border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-all">
              Send Offer
            </button>
          </div>
        </div>
      </div>

      {/* Empty State / Load More Suggestion */}
      <footer className="max-w-6xl mx-auto mt-16 text-center py-12 border-t border-outline-variant/5">
        <p className="text-on-surface-variant text-sm mb-6">
          You've reached the end of the current high-confidence matches.
        </p>
        <button className="px-8 py-3 rounded-full bg-surface-container-high text-on-surface font-semibold hover:bg-surface-bright transition-all inline-flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">refresh</span> Re-scan Global Pool
        </button>
      </footer>
    </div>
  );
}
