import { Outlet, useLocation } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';
import { candidateNavLinks, companySidebarItems } from '../../data/navigation';

export default function DashboardLayout() {
  const location = useLocation();
  const isMessages = location.pathname === '/messages';
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <TopNavBar links={candidateNavLinks} />
      <SideNavBar items={companySidebarItems} ctaLabel="Post New Role" ctaHref="/jobs" />
      <main className={isMessages ? 'ml-64 pt-16 h-screen overflow-hidden' : 'ml-64 pt-16 min-h-screen'}>
        <Outlet />
      </main>
    </div>
  );
}
