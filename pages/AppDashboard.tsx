
import React from 'react';
import { Brand } from '../types';

interface AppDashboardProps {
  brand: Brand;
}

const AppDashboard: React.FC<AppDashboardProps> = ({ brand }) => {
  const stats = [
    { label: 'AI Visibility Score', value: `${brand.visibilityScore}%`, change: '+4.2%', color: 'blue' },
    { label: 'Trust / EEAT Score', value: `${brand.eeatScore}/100`, change: 'Stable', color: 'green' },
    { label: 'Non-Branded Coverage', value: brand.keywordCoverage, change: '+12%', color: 'purple' },
    { label: 'Last Audit Pulse', value: new Date(brand.lastAudit).toLocaleDateString(), change: '', color: 'gray' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Brand Snapshot</h1>
          <p className="text-gray-500">Health overview for <span className="text-white font-medium">{brand.domain}</span></p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">System Status</span>
          <div className="flex items-center text-green-500 text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Real-time
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-all">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{stat.label}</p>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-black">{stat.value}</h3>
              <span className={`text-[10px] font-bold ${stat.change.includes('+') ? 'text-green-500' : 'text-gray-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-bold">Visibility Velocity</h3>
              <div className="flex space-x-2">
                {['7D', '30D', '90D'].map(t => (
                  <button key={t} className={`text-[10px] px-2 py-1 rounded ${t === '30D' ? 'bg-gray-800 text-white' : 'text-gray-500'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="h-64 p-6 flex items-end justify-between space-x-2">
              {[40, 45, 42, 50, 60, 58, 65, 78, 72, 80, 85, 78].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-600/20 rounded-t-sm group relative" style={{ height: `${h}%` }}>
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
              <h3 className="font-bold mb-4">Top Entity Gaps</h3>
              <div className="space-y-3">
                {['AI-Edge Orchestration', 'Compute Reliability', 'Latency Optimization'].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{item}</span>
                    <span className="text-xs text-red-400 font-mono">Critical</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
              <h3 className="font-bold mb-4">E-E-A-T Pulse</h3>
              <div className="space-y-3">
                {['Author Profiles', 'Citation Graph', 'External Backing'].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{item}</span>
                    <span className="text-xs text-green-400 font-mono">Optimal</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600/5 border border-blue-500/10 rounded-2xl p-6">
          <h3 className="font-bold mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            System Recommendations
          </h3>
          <div className="space-y-6">
            {[
              { title: 'Semantic Deep-Link', desc: 'Connect "Compute" pillar to "Sustainability" whitepaper.' },
              { title: 'Schema Injection', desc: 'Missing Author JSON-LD on 12 technical blog posts.' },
              { title: 'KG Update', desc: 'Google Knowledge Graph node for CTO is outdated.' }
            ].map((rec, i) => (
              <div key={i} className="border-l-2 border-blue-500/30 pl-4 py-1">
                <h4 className="text-sm font-bold mb-1">{rec.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{rec.desc}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 py-3 rounded-xl text-sm font-bold transition-all">
            Apply 1-Click Fixes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDashboard;
