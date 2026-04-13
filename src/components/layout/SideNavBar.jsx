import { Link, useLocation } from 'react-router-dom';

export default function SideNavBar({ items = [], ctaLabel, ctaHref }) {
  const location = useLocation();
  return (
    <aside className="hidden md:flex fixed left-0 top-0 pt-20 w-64 h-screen bg-surface-container-low border-r border-outline-variant/10 flex-col z-40">
      <div className="px-6 pb-6 border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Hiring Suite</p>
            <p className="text-xs text-on-surface-variant">Enterprise Tier</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {items.map(item => {
          const active = location.pathname === item.href;
          return (
            <Link key={item.href} to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${active ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
              <span className="material-symbols-outlined text-[20px]" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      {ctaLabel && (
        <div className="px-4 pb-4">
          <Link to={ctaHref || '/jobs'} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-on-primary-container text-on-primary rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[18px]">add</span>
            {ctaLabel}
          </Link>
        </div>
      )}
      <div className="px-4 pb-6 space-y-1">
        <Link to="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors rounded-lg">
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
          Help Center
        </Link>
        <Link to="/login" className="flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface-variant hover:text-error transition-colors rounded-lg">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Log Out
        </Link>
      </div>
    </aside>
  );
}
