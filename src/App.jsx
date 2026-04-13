import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import AssessmentLayout from './components/layout/AssessmentLayout';
import WizardLayout from './components/layout/WizardLayout';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CandidateRegistrationPage from './pages/CandidateRegistrationPage';
import CompanyRegistrationPage from './pages/CompanyRegistrationPage';
import CompanyDashboardPage from './pages/CompanyDashboardPage';
import CompanySettingsPage from './pages/CompanySettingsPage';
import CandidateProfilePage from './pages/CandidateProfilePage';
import CandidateSettingsPage from './pages/CandidateSettingsPage';
import CandidateSearchPage from './pages/CandidateSearchPage';
import JobBoardPage from './pages/JobBoardPage';
import JobApplicationPage from './pages/JobApplicationPage';
import AssessmentHubPage from './pages/AssessmentHubPage';
import PascoAssessmentPage from './pages/PascoAssessmentPage';
import TechnicalRoundPage from './pages/TechnicalRoundPage';
import HrInterviewPage from './pages/HrInterviewPage';
import AssessmentResultsPage from './pages/AssessmentResultsPage';
import MessagingPage from './pages/MessagingPage';
import AiRecommendationsPage from './pages/AiRecommendationsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<WizardLayout />}>
          <Route path="/register/candidate" element={<CandidateRegistrationPage />} />
          <Route path="/register/company" element={<CompanyRegistrationPage />} />
          <Route path="/jobs/:id/apply" element={<JobApplicationPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<CompanyDashboardPage />} />
          <Route path="/settings/company" element={<CompanySettingsPage />} />
          <Route path="/settings/candidate" element={<CandidateSettingsPage />} />
          <Route path="/candidates/:id" element={<CandidateProfilePage />} />
          <Route path="/search" element={<CandidateSearchPage />} />
          <Route path="/results/:id" element={<AssessmentResultsPage />} />
          <Route path="/messages" element={<MessagingPage />} />
          <Route path="/recommendations" element={<AiRecommendationsPage />} />
          <Route path="/jobs" element={<JobBoardPage />} />
        </Route>
        <Route element={<AssessmentLayout />}>
          <Route path="/assessments" element={<AssessmentHubPage />} />
          <Route path="/assessments/pasco" element={<PascoAssessmentPage />} />
          <Route path="/assessments/technical" element={<TechnicalRoundPage />} />
          <Route path="/assessments/hr-interview" element={<HrInterviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
