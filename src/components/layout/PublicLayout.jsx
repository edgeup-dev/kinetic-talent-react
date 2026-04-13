import { Outlet, useLocation } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import { publicNavLinks } from '../../data/navigation';

export default function PublicLayout() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {!isLogin && <TopNavBar links={publicNavLinks} />}
      <Outlet />
      {!isLogin && <Footer />}
    </div>
  );
}
