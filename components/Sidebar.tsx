
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brand } from '../types';
import { BRANDS } from '../constants';

interface SidebarProps {
  selectedBrand: Brand;
  onBrandChange: (brand: Brand) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedBrand, onBrandChange }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/app/dashboard', label: 'Snapshot', icon: 'M4 6h16M4 12h16M4 18h7' },
    { path: '/app/audit', label: 'Deep Audit', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { path: '/app/architecture', label: 'Architecture', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col min-h-screen sticky top-0">
      <div className="p-6">
        <Link to="/" className="text-xl font-black tracking-tighter text-blue-500 mb-8 block">KASPARRO</Link>
        
        <div className="mb-8">
          <label className="text-[10px] uppercase font-bold text-gray-500 mb-2 block tracking-widest">Selected Brand</label>
          <div className="relative">
            <select 
              value={selectedBrand.id}
              onChange={(e) => {
                const brand = BRANDS.find(b => b.id === e.target.value);
                if (brand) onBrandChange(brand);
              }}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
            >
              {BRANDS.map(brand => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                location.pathname === item.path 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <img src="https://picsum.photos/seed/user/32/32" className="w-8 h-8 rounded-full border border-gray-700" alt="User" />
          <div className="overflow-hidden">
            <p className="text-xs font-semibold truncate">Engineering Lead</p>
            <p className="text-[10px] text-gray-500 truncate">Pro Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
