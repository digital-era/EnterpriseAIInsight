import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { CoreTheme } from './components/sections/CoreTheme';
import { Factories } from './components/sections/Factories';
import { FutureAndGovernance } from './components/sections/Future';
import { HistoryOutlook } from './components/sections/HistoryOutlook';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-brand-500/30">
      <Header />
      <main>
        <Hero />
        <CoreTheme />
        <Factories />
        <FutureAndGovernance />
        <HistoryOutlook />
      </main>
      <Footer />
    </div>
  );
};

export default App;