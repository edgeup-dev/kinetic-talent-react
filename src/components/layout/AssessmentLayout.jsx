import { Outlet, useLocation, Link } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import { candidateNavLinks } from '../../data/navigation';

export default function AssessmentLayout() {
  const location = useLocation();
  const isHub = location.pathname === '/assessments';
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      {isHub ? (
        <TopNavBar links={candidateNavLinks} />
      ) : (
        <nav className="fixed top-0 z-50 w-full h-16 flex justify-between items-center px-8 bg-surface-container-low/80 backdrop-blur-xl shadow-2xl shadow-black/30">
          <Link to="/" className="text-xl font-bold tracking-tighter text-primary">Kinetic Talent</Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              <span className="font-mono font-bold text-on-surface">42:15</span>
            </div>
            <Link to="/assessments" className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-error bg-surface-container-high rounded-lg transition-colors">
              Save & Exit
            </Link>
          </div>
        </nav>
      )}
      <main className={isHub ? 'pt-16' : 'pt-16'}>
        <Outlet />
      </main>
    </div>
  );
}
