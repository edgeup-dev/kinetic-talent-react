import { Link } from 'react-router-dom';

export default function CompanyDashboardPage() {
  return (
    <>
      {/* Welcome Banner Section */}
      <section className="mb-10 relative overflow-hidden rounded-3xl bg-surface-container-low p-10 border-none shadow-lg">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="label-sm text-primary tracking-[0.2em] font-semibold uppercase mb-4 block">Intelligence Dashboard</span>
            <h1 className="text-5xl font-bold tracking-tighter text-on-surface mb-4">Welcome back, Sarah.</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
              Your talent pipeline is showing a <span className="text-tertiary font-semibold">14% growth</span> this week. You have 3 new high-priority roles ready for review.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-surface-container-high hover:bg-surface-bright text-primary px-6 py-3 rounded-xl font-medium transition-all">View Reports</button>
            <Link to="/candidate-search" className="bg-gradient-to-r from-primary to-on-primary-container text-on-primary px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/10 transition-all">Launch Search</Link>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
      </section>

      {/* Bento Grid: Stats & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* Stats Column 1 */}
        <div className="bg-surface-container-high p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-primary-fixed mb-4 block">work_outline</span>
            <h3 className="text-on-surface-variant text-sm font-medium mb-1">Active Roles</h3>
            <p className="text-3xl font-bold text-on-surface">24</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-tertiary text-xs font-semibold">
            <span className="material-symbols-outlined text-xs">trending_up</span> +2 this month
          </div>
        </div>
        {/* Stats Column 2 */}
        <div className="bg-surface-container-high p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-primary-fixed mb-4 block">description</span>
            <h3 className="text-on-surface-variant text-sm font-medium mb-1">Applications</h3>
            <p className="text-3xl font-bold text-on-surface">1,482</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-tertiary text-xs font-semibold">
            <span className="material-symbols-outlined text-xs">trending_up</span> +12% vs last week
          </div>
        </div>
        {/* Stats Column 3 */}
        <div className="bg-surface-container-high p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-primary-fixed mb-4 block">verified_user</span>
            <h3 className="text-on-surface-variant text-sm font-medium mb-1">Shortlisted</h3>
            <p className="text-3xl font-bold text-on-surface">86</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-on-surface-variant text-xs font-medium">
            Stable activity
          </div>
        </div>
        {/* Stats Column 4 */}
        <div className="bg-surface-container-high p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-primary-fixed mb-4 block">handshake</span>
            <h3 className="text-on-surface-variant text-sm font-medium mb-1">Offers Sent</h3>
            <p className="text-3xl font-bold text-on-surface">12</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-error text-xs font-semibold">
            <span className="material-symbols-outlined text-xs">priority_high</span> 2 pending expiry
          </div>
        </div>
      </div>

      {/* Main Analytics & Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Chart & Funnel */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Analytics Widget: Application Flow */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="headline-md text-on-surface mb-1">Application Trends</h2>
                <p className="text-on-surface-variant text-sm">Volume tracking for the last 30 days</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container-high text-xs px-3 py-1.5 rounded-lg text-on-surface">30D</button>
                <button className="bg-transparent hover:bg-surface-container-high text-xs px-3 py-1.5 rounded-lg text-on-surface-variant">90D</button>
              </div>
            </div>
            {/* SVG Chart Mockup */}
            <div className="w-full h-48 relative mb-4">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ADC6FF" stopOpacity="0.3"></stop>
                    <stop offset="100%" stopColor="#ADC6FF" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,180 Q100,160 200,140 T400,100 T600,150 T800,80 T1000,60 V200 H0 Z" fill="url(#chartGradient)"></path>
                <path d="M0,180 Q100,160 200,140 T400,100 T600,150 T800,80 T1000,60" fill="none" stroke="#ADC6FF" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-on-surface-variant/50 pt-4 px-2">
                <span>01 OCT</span><span>07 OCT</span><span>14 OCT</span><span>21 OCT</span><span>28 OCT</span>
              </div>
            </div>
          </div>

          {/* Pipeline Funnel */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10">
            <h2 className="headline-md text-on-surface mb-6">Hiring Pipeline Funnel</h2>
            <div className="flex flex-col gap-3">
              {/* Funnel Item */}
              <div className="flex items-center gap-4">
                <div className="w-24 text-right label-sm text-on-surface-variant font-bold">SOURCE</div>
                <div className="flex-1 h-12 bg-primary-container/40 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 w-[100%]"></div>
                  <div className="absolute inset-0 flex items-center px-4 justify-between">
                    <span className="text-xs font-semibold text-primary">Candidates Sourced</span>
                    <span className="text-sm font-bold">2,450</span>
                  </div>
                </div>
              </div>
              {/* Funnel Item */}
              <div className="flex items-center gap-4">
                <div className="w-24 text-right label-sm text-on-surface-variant font-bold">SCREEN</div>
                <div className="flex-1 h-12 bg-primary-container/40 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/30 w-[65%]"></div>
                  <div className="absolute inset-0 flex items-center px-4 justify-between">
                    <span className="text-xs font-semibold text-primary">Screening Stage</span>
                    <span className="text-sm font-bold">1,592</span>
                  </div>
                </div>
              </div>
              {/* Funnel Item */}
              <div className="flex items-center gap-4">
                <div className="w-24 text-right label-sm text-on-surface-variant font-bold">INTERVIEW</div>
                <div className="flex-1 h-12 bg-primary-container/40 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/45 w-[25%]"></div>
                  <div className="absolute inset-0 flex items-center px-4 justify-between">
                    <span className="text-xs font-semibold text-primary">Interviewing</span>
                    <span className="text-sm font-bold">612</span>
                  </div>
                </div>
              </div>
              {/* Funnel Item */}
              <div className="flex items-center gap-4">
                <div className="w-24 text-right label-sm text-on-surface-variant font-bold">OFFER</div>
                <div className="flex-1 h-12 bg-primary-container/40 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary w-[5%]"></div>
                  <div className="absolute inset-0 flex items-center px-4 justify-between">
                    <span className="text-xs font-semibold text-primary">Offers</span>
                    <span className="text-sm font-bold">123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Activity & Quick Actions */}
        <div className="flex flex-col gap-8">
          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-surface-container-high hover:bg-surface-bright p-6 rounded-2xl flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">Add Talent</span>
            </button>
            <button className="bg-surface-container-high hover:bg-surface-bright p-6 rounded-2xl flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">Schedule</span>
            </button>
            <button className="bg-surface-container-high hover:bg-surface-bright p-6 rounded-2xl flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center text-primary-fixed">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">Reach Out</span>
            </button>
            <button className="bg-surface-container-high hover:bg-surface-bright p-6 rounded-2xl flex flex-col items-center gap-3 transition-all">
              <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface">Audit Logs</span>
            </button>
          </div>

          {/* Recent Activity Timeline */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/10 flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="headline-md text-on-surface">Recent Activity</h2>
              <button className="text-primary text-xs font-semibold hover:underline">View All</button>
            </div>
            <div className="space-y-8 relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-outline-variant/20"></div>
              {/* Activity Item */}
              <div className="relative flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-surface border-4 border-surface-container-low z-10 flex items-center justify-center overflow-hidden">
                  <img alt="Activity user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjVPKqKUnCUtWXexjl8fX7o93TSiqSVfIA43xP3OZ6H6h5_z-sGTH_8m4i_btqZ454CxRIYH7QaEop8GKZt8NJwU6oZKKZUg80SGA-GOFQhnuXZ8H-72F4H9y8p8Uq-deRlYKxsUPT1mbI53lNcCZ7_jARWcWrqA2oMSyj7Jn6UcekzOkjiRNZ_0RS6Gj9k2ROzkyqKXrYc0Zz9a5DxcEtOyV97zKAvN4db07HbQX2j6GOIY3Rkgci7NrGaDEgbxEAJjn8hhXjPyIO" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-on-surface">Lydia Rose <span className="font-normal text-on-surface-variant">shortlisted</span> Alex Chen</p>
                  <p className="text-[10px] text-on-surface-variant/60 uppercase font-bold mt-1">Senior UX Designer &bull; 2h ago</p>
                </div>
              </div>
              {/* Activity Item */}
              <div className="relative flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-surface border-4 border-surface-container-low z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-on-surface">New Application <span className="font-normal text-on-surface-variant">for</span> Staff Engineer</p>
                  <p className="text-[10px] text-on-surface-variant/60 uppercase font-bold mt-1">Referral Flow &bull; 5h ago</p>
                </div>
              </div>
              {/* Activity Item */}
              <div className="relative flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-surface border-4 border-surface-container-low z-10 flex items-center justify-center overflow-hidden">
                  <img alt="Activity user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEl3V1vx7FNtYI846LCE3xMClAjIw1fROHUKyEHcDXU0vVZVBb22tl2Zk2Mh3IHZ7qasIpuMoTCwLLbkK2iLb7u-b39k6oV7eAKxdrKP3ZP8I5kdHppSNNvoSBXfmSVrVbW2lgBqRteZYMg6PBDI_R0bEvjvo_stBdGUYb-xcj8Ki2VqxQUu1Zqt87XduDkqp3TM5ESAHela-Wx610lO_2cbRthOgEpGcOxuO64dHtZDlLfYgqe4aPMavQmvt917FRT1ZszffnrLgP" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-on-surface">Marcus Thorne <span className="font-normal text-on-surface-variant">accepted offer</span></p>
                  <p className="text-[10px] text-on-surface-variant/60 uppercase font-bold mt-1">VP of Product &bull; 8h ago</p>
                </div>
              </div>
              {/* Activity Item */}
              <div className="relative flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-surface border-4 border-surface-container-low z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-on-surface">AI Score <span className="font-normal text-on-surface-variant">updated for</span> 42 candidates</p>
                  <p className="text-[10px] text-on-surface-variant/60 uppercase font-bold mt-1">Batch Processing &bull; 1d ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
