import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-24 pb-12 border-t border-outline-variant/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold tracking-tighter text-primary mb-6">Kinetic Talent</div>
            <p className="text-on-surface-variant text-sm leading-relaxed">Redefining the architecture of human potential through artificial intelligence and behavioral science.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-on-background">Platform</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" to="/search">Talent Pool</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/jobs">Job Board</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/assessments">AI Assessment</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-on-background">Company</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" to="#">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">Methodology</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">Careers</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-on-background">Legal</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="#">Ethical AI Charter</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-on-surface-variant">&copy; 2024 Kinetic Talent. All rights reserved.</p>
          <div className="flex gap-6 text-on-surface-variant">
            <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">terminal</span></a>
            <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
