
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BRANDS } from './constants';
import { Brand } from './types';

// Pages
import Home from './pages/Home';
import Platform from './pages/Platform';
import About from './pages/About';
import AppDashboard from './pages/AppDashboard';
import AppAudit from './pages/AppAudit';
import AppArchitecture from './pages/AppArchitecture';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(BRANDS[0]);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <AppContent 
          selectedBrand={selectedBrand} 
          onBrandChange={setSelectedBrand} 
        />
      </div>
    </HashRouter>
  );
};

interface AppContentProps {
  selectedBrand: Brand;
  onBrandChange: (brand: Brand) => void;
}

const AppContent: React.FC<AppContentProps> = ({ selectedBrand, onBrandChange }) => {
  const location = useLocation();
  const isApp = location.pathname.startsWith('/app');

  return (
    <>
      {!isApp && <Navbar />}
      <div className={`flex flex-1 ${isApp ? 'flex-row' : 'flex-col'}`}>
        {isApp && (
          <Sidebar 
            selectedBrand={selectedBrand} 
            onBrandChange={onBrandChange} 
          />
        )}
        <main className={`flex-1 ${isApp ? 'bg-gray-950 p-4 lg:p-8 overflow-y-auto max-h-screen' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/about" element={<About />} />
            <Route path="/app/dashboard" element={<AppDashboard brand={selectedBrand} />} />
            <Route path="/app/audit" element={<AppAudit brand={selectedBrand} />} />
            <Route path="/app/architecture" element={<AppArchitecture />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
