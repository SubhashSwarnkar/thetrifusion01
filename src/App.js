/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';

import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/discuss-project" element={<DiscussProjectPage />} />
        {/* Updated fallback route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
