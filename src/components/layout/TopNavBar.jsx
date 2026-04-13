import { Link, useLocation } from 'react-router-dom';

export default function TopNavBar({ links = [], transparent = false }) {
  const location = useLocation();
  return (
    <nav className={`fixed top-0 z-50 w-full h-16 flex justify-between items-center px-8 ${transparent ? 'bg-surface-container-low/80' : 'bg-surface-container-low/80'} backdrop-blur-xl shadow-2xl shadow-black/30`}>
      <Link to="/" className="text-xl font-bold tracking-tighter text-primary">Kinetic Talent</Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <Link key={l.href} to={l.href}
            className={`transition-colors duration-200 ${location.pathname === l.href ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link to="/messages" className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">notifications</Link>
        <Link to="/settings/candidate" className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
          <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChXrhcAKTjuqyo7wEqwHlolkeRptTjZahNPzi66imefs6Owxx08hE-NslOp50X17BhsgdQy3deMmjsi-Gdg2hb86fNb58LWDdju0UyYlZKNH5W5YMs4yG5W-qrepRLBbcFhdmWPjQQuO6jyv-LbYV8g3Ril45mz53ZL2DXlZrlXlUO0IeDdJ7S2_HC6zdlSrQib1WE4Q9PRAreTQJRrlLetVuSm-6mhPgJms9XjT6LnYjwCygV9pXN6wh8r9XSg_0JTfI_yZuWiuzm" className="w-full h-full object-cover" />
        </Link>
      </div>
    </nav>
  );
}
