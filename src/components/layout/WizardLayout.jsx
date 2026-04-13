import { Outlet, Link } from 'react-router-dom';

export default function WizardLayout() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <nav className="fixed top-0 z-50 w-full h-16 flex justify-between items-center px-8 bg-surface-container-low/80 backdrop-blur-xl shadow-2xl shadow-black/30">
        <Link to="/" className="text-xl font-bold tracking-tighter text-primary">Kinetic Talent</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/search" className="text-on-surface-variant hover:text-primary transition-colors">Talent Pool</Link>
          <Link to="/jobs" className="text-on-surface-variant hover:text-primary transition-colors">Job Board</Link>
          <Link to="/results/1" className="text-on-surface-variant hover:text-primary transition-colors">Analytics</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors cursor-pointer">notifications</span>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
            <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChXrhcAKTjuqyo7wEqwHlolkeRptTjZahNPzi66imefs6Owxx08hE-NslOp50X17BhsgdQy3deMmjsi-Gdg2hb86fNb58LWDdju0UyYlZKNH5W5YMs4yG5W-qrepRLBbcFhdmWPjQQuO6jyv-LbYV8g3Ril45mz53ZL2DXlZrlXlUO0IeDdJ7S2_HC6zdlSrQib1WE4Q9PRAreTQJRrlLetVuSm-6mhPgJms9XjT6LnYjwCygV9pXN6wh8r9XSg_0JTfI_yZuWiuzm" className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
