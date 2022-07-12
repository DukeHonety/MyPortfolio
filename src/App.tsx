import React from 'react';

import Layout from './layout';
import AboutMe from './pages/AboutMe';
import SkillSection from './pages/SkillSection';
import ExperienceSection from './pages/ExperienceSection';
import './App.css';

function App() {
  return (
    <Layout>
      <AboutMe />
      <SkillSection />
      <ExperienceSection />
    </Layout>
  );
}

export default App;
