import React from 'react';

import Layout from './layout';
import AboutMe from './pages/AboutMe';
import SkillSection from './pages/SkillSection';
import './App.css';

function App() {
  return (
    <Layout>
      <AboutMe />
      <SkillSection />
    </Layout>
  );
}

export default App;
