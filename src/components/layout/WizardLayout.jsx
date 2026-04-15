import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';

export default function WizardLayout() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <TopNavBar links={[
        { label: 'Talent Pool', href: '/search' },
        { label: 'Job Board', href: '/jobs' },
        { label: 'Analytics', href: '/results/1' }
      ]} showAuth={true} />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
