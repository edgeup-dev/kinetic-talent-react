import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('candidate');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = { email: '', password: '' };
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    // Simulate login
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        // Redirect based on user type
        if (activeTab === 'candidate') {
          navigate('/jobs');
        } else {
          navigate('/dashboard');
        }
      }, 1500);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        if (activeTab === 'candidate') {
          navigate('/jobs');
        } else {
          navigate('/dashboard');
        }
      }, 1500);
    }, 1000);
  };

  return (
    <div className="bg-gradient-mesh min-h-screen flex items-center justify-center font-body selection:bg-primary selection:text-on-primary relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-tertiary/20 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float delay-400"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-tertiary/30 rounded-full animate-float delay-600"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-float delay-300"></div>
      </div>

      {/* Success notification */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 animate-slide-in-right">
          <div className="bg-surface-container-high border border-tertiary/30 rounded-xl p-4 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div>
              <p className="font-semibold text-on-surface">Login Successful!</p>
              <p className="text-sm text-on-surface-variant">Redirecting to your dashboard...</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md px-6 py-12 relative z-10">
        {/* Logo Branding */}
        <div className="flex flex-col items-center mb-10 animate-fade-in-up">
          <Link to="/" className="w-14 h-14 bg-gradient-to-br from-primary to-on-primary-container rounded-xl flex items-center justify-center mb-4 shadow-2xl shadow-primary-container/30 hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-surface text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tighter text-primary font-headline">Kinetic Talent</h1>
          <p className="text-on-surface-variant text-sm mt-1 tracking-wide uppercase font-semibold opacity-80">Precision Hiring Portal</p>
        </div>

        {/* Login Card */}
        <div className="glass-card rounded-2xl p-8 shadow-2xl border border-outline-variant/20 animate-fade-in-up delay-100">
          {/* Tab Navigation */}
          <div className="flex p-1 bg-surface-container-lowest rounded-lg mb-8">
            <button
              onClick={() => setActiveTab('candidate')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                activeTab === 'candidate'
                  ? 'bg-surface-container-high text-primary shadow-lg shadow-primary/10'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] align-middle mr-1">person</span>
              Candidate
            </button>
            <button
              onClick={() => setActiveTab('company')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                activeTab === 'company'
                  ? 'bg-surface-container-high text-primary shadow-lg shadow-primary/10'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] align-middle mr-1">business</span>
              Company
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="block text-[0.6875rem] font-semibold text-on-surface-variant uppercase tracking-widest mb-2 ml-1" htmlFor="email">
                Work Email
              </label>
              <div className="relative group">
                <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors ${
                  errors.email ? 'text-error' : 'text-outline group-focus-within:text-primary'
                }`}>mail</span>
                <input
                  className={`w-full bg-surface-container-lowest border-0 rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-2 transition-all outline-none ${
                    errors.email ? 'ring-2 ring-error/50' : 'focus:ring-primary/30'
                  }`}
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="absolute -bottom-5 left-1 flex items-center gap-1 text-error text-xs font-medium animate-fade-in">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="pt-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[0.6875rem] font-semibold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="password">
                  Password
                </label>
                <Link className="text-[0.6875rem] font-semibold text-primary hover:text-on-primary-container transition-colors tracking-widest uppercase" to="#">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors ${
                  errors.password ? 'text-error' : 'text-outline group-focus-within:text-primary'
                }`}>lock</span>
                <input
                  className={`w-full bg-surface-container-lowest border-0 rounded-lg py-3.5 pl-12 pr-12 text-on-surface placeholder:text-outline/50 focus:ring-2 transition-all outline-none ${
                    errors.password ? 'ring-2 ring-error/50' : 'focus:ring-primary/30'
                  }`}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <span className="material-symbols-outlined text-lg">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
                {errors.password && (
                  <div className="absolute -bottom-5 left-1 flex items-center gap-1 text-error text-xs font-medium animate-fade-in">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 py-1 pt-3">
              <input
                className="w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-offset-surface focus:ring-primary/30 cursor-pointer"
                id="remember"
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                disabled={isLoading}
              />
              <label className="text-sm text-on-surface-variant font-medium cursor-pointer select-none" htmlFor="remember">
                Remember this device
              </label>
            </div>

            {/* Primary Action */}
            <button
              className="w-full bg-gradient-to-r from-primary to-on-primary-container text-on-primary-fixed font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Sign In to Portal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-on-primary-container to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </>
              )}
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
            <button
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
              className="group flex items-center justify-center space-x-2 py-3 px-4 bg-surface-container-lowest rounded-lg hover:bg-surface-bright transition-all border border-outline-variant/10 hover:border-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img
                alt="Google"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP2YkLXq1MheKxTzWVil49nR3ZMuyMeADcuGk_wXi3mVZw6pdjxV0kCYW82-I1gJNtRZEv0Ha8wua_Dnt4J-3w_4QJWI6zXlNJ-b04wvIn7R_tlySvCQFEB0uOQSQ7rN8UIfIePixqilvEba5ynQT4OAXIYiP9N_yGEYUF3DNYXEHqV9HLoVjfhUHlTXO78vhmTTO-VjaV_LJktmn6WxRi8j_Yd0HnQCi0sWIBn5j9YWbx0pKHIZj5paJY165aUQZtbpwPf65eb4zl"
              />
              <span className="text-sm font-medium text-on-surface">Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin('linkedin')}
              disabled={isLoading}
              className="group flex items-center justify-center space-x-2 py-3 px-4 bg-surface-container-lowest rounded-lg hover:bg-surface-bright transition-all border border-outline-variant/10 hover:border-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[#0A66C2] text-xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                work
              </span>
              <span className="text-sm font-medium text-on-surface">LinkedIn</span>
            </button>
          </div>
        </div>

        {/* Footer Help */}
        <p className="text-center mt-10 text-on-surface-variant text-sm font-medium animate-fade-in-up delay-200">
          Don't have an account?{' '}
          <Link className="text-primary hover:text-on-primary-container hover:underline transition-all font-semibold" to={activeTab === 'candidate' ? '/register/candidate' : '/register/company'}>
            Create {activeTab === 'candidate' ? 'candidate' : 'company'} account
          </Link>
        </p>

        {/* Privacy notice */}
        <p className="text-center mt-6 text-on-surface-variant/60 text-xs animate-fade-in-up delay-300">
          By signing in, you agree to our{' '}
          <Link to="#" className="text-primary/80 hover:text-primary hover:underline">Terms</Link>
          {' '}and{' '}
          <Link to="#" className="text-primary/80 hover:text-primary hover:underline">Privacy Policy</Link>
        </p>
      </div>

      {/* Dynamic Visual Element */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute bottom-[-150px] right-[-150px] w-full h-full bg-primary/20 blur-[140px] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
