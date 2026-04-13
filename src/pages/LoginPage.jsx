import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('candidate');

  return (
    <div className="bg-gradient-mesh min-h-screen flex items-center justify-center font-body selection:bg-primary selection:text-on-primary">
      <div className="w-full max-w-md px-6 py-12">
        {/* Logo Branding */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-on-primary-container rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-container/20">
            <span className="material-symbols-outlined text-surface text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tighter text-primary font-headline">Kinetic Talent</h1>
          <p className="text-on-surface-variant text-sm mt-1 tracking-wide uppercase font-semibold opacity-80">Precision Hiring Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-high/80 backdrop-blur-2xl rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-outline-variant/10">
          {/* Tab Navigation */}
          <div className="flex p-1 bg-surface-container-lowest rounded-lg mb-8">
            <button
              onClick={() => setActiveTab('candidate')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'candidate'
                  ? 'bg-surface-container-high text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
              }`}
            >
              Candidate
            </button>
            <button
              onClick={() => setActiveTab('company')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === 'company'
                  ? 'bg-surface-container-high text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
              }`}
            >
              Company
            </button>
          </div>

          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-[0.6875rem] font-semibold text-on-surface-variant uppercase tracking-widest mb-2 ml-1" htmlFor="email">Work Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg group-focus-within:text-primary transition-colors">mail</span>
                <input className="w-full bg-surface-container-lowest border-0 rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/30 transition-all outline-none" id="email" placeholder="name@company.com" type="email" />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[0.6875rem] font-semibold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="password">Password</label>
                <Link className="text-[0.6875rem] font-semibold text-primary hover:text-on-primary-container transition-colors tracking-widest uppercase" to="#">Forgot?</Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg group-focus-within:text-primary transition-colors">lock</span>
                <input className="w-full bg-surface-container-lowest border-0 rounded-lg py-3.5 pl-12 pr-12 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/30 transition-all outline-none" id="password" placeholder="••••••••" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface" type="button">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 py-1">
              <input className="w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-offset-surface focus:ring-primary/30" id="remember" type="checkbox" />
              <label className="text-sm text-on-surface-variant font-medium cursor-pointer" htmlFor="remember">Remember this device</label>
            </div>

            {/* Primary Action */}
            <button className="w-full bg-gradient-to-r from-primary to-on-primary-container text-on-primary-fixed font-bold py-4 rounded-lg shadow-lg shadow-primary/10 hover:opacity-90 active:scale-[0.98] transition-all duration-200 mt-2" type="submit">
              Sign In to Portal
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/10"></div>
            </div>
            <div className="relative flex justify-center text-[0.6875rem] uppercase tracking-[0.2em] font-bold">
              <span className="px-4 bg-surface-container-high text-outline">or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-surface-container-lowest rounded-lg hover:bg-surface-bright transition-colors border border-outline-variant/5">
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP2YkLXq1MheKxTzWVil49nR3ZMuyMeADcuGk_wXi3mVZw6pdjxV0kCYW82-I1gJNtRZEv0Ha8wua_Dnt4J-3w_4QJWI6zXlNJ-b04wvIn7R_tlySvCQFEB0uOQSQ7rN8UIfIePixqilvEba5ynQT4OAXIYiP9N_yGEYUF3DNYXEHqV9HLoVjfhUHlTXO78vhmTTO-VjaV_LJktmn6WxRi8j_Yd0HnQCi0sWIBn5j9YWbx0pKHIZj5paJY165aUQZtbpwPf65eb4zl" />
              <span className="text-sm font-medium text-on-surface">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 px-4 bg-surface-container-lowest rounded-lg hover:bg-surface-bright transition-colors border border-outline-variant/5">
              <span className="material-symbols-outlined text-[#0A66C2] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
              <span className="text-sm font-medium text-on-surface">LinkedIn</span>
            </button>
          </div>
        </div>

        {/* Footer Help */}
        <p className="text-center mt-10 text-on-surface-variant text-sm font-medium">
          Don't have an account? <Link className="text-primary hover:underline transition-all" to="/candidate-registration">Request access</Link>
        </p>

        {/* Dynamic Visual Element */}
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute bottom-[-100px] right-[-100px] w-full h-full bg-primary/20 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
