
import React, { useState } from 'react';
import { Brand, Severity } from '../types';
import { AUDIT_MODULE_METADATA, MOCK_AUDIT_DATA } from '../constants';

interface AppAuditProps {
  brand: Brand;
}

const AppAudit: React.FC<AppAuditProps> = ({ brand }) => {
  const [activeModuleId, setActiveModuleId] = useState(AUDIT_MODULE_METADATA[0].id);
  
  const report = MOCK_AUDIT_DATA[brand.id] || MOCK_AUDIT_DATA['brand-1'];
  const activeModule = report.modules[activeModuleId] || {
    id: activeModuleId,
    name: AUDIT_MODULE_METADATA.find(m => m.id === activeModuleId)?.name || 'Module',
    score: 0,
    insights: ['Data pending next crawl cycle.'],
    issues: [],
    recommendations: ['Initiate manual re-scan.'],
    icon: activeModuleId
  };

  const getSeverityColor = (sev: Severity) => {
    switch(sev) {
      case Severity.CRITICAL: return 'text-red-500 bg-red-500/10 border-red-500/20';
      case Severity.HIGH: return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case Severity.MEDIUM: return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 h-full min-h-[600px]">
      {/* Sidebar */}
      <div className="lg:col-span-3 space-y-1">
        <h2 className="text-[10px] uppercase font-bold text-gray-500 mb-4 tracking-widest px-3">Audit Modules</h2>
        {AUDIT_MODULE_METADATA.map(mod => {
          const modScore = report.modules[mod.id]?.score;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModuleId(mod.id)}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all border ${
                activeModuleId === mod.id 
                  ? 'bg-gray-800 border-gray-700 text-white shadow-xl' 
                  : 'bg-transparent border-transparent text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mod.icon} /></svg>
                <span className="text-sm font-medium">{mod.name}</span>
              </div>
              {modScore && (
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${modScore > 80 ? 'text-green-500 bg-green-500/10' : 'text-yellow-500 bg-yellow-500/10'}`}>
                  {modScore}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Panel */}
      <div className="lg:col-span-9 space-y-6">
        <header className="flex justify-between items-start bg-gray-900 border border-gray-800 p-8 rounded-3xl">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest px-2 py-0.5 bg-blue-400/10 rounded">Module Status: Active</span>
              <h1 className="text-3xl font-black tracking-tight">{activeModule.name}</h1>
            </div>
            <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
              Analyzing brand data across vector-space metrics to determine AI retrieval probability and semantic strength.
            </p>
          </div>
          <div className="text-center bg-black/40 p-4 rounded-2xl border border-white/5">
            <div className={`text-5xl font-black mb-1 ${activeModule.score > 80 ? 'text-green-500' : 'text-yellow-500'}`}>{activeModule.score || '--'}</div>
            <div className="text-[10px] uppercase font-bold text-gray-500">Vector Score</div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Key Insights</h3>
            <ul className="space-y-4">
              {activeModule.insights.map((insight, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  <span className="text-gray-300">{insight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Recommendations</h3>
            <div className="space-y-4">
              {activeModule.recommendations.map((rec, i) => (
                <div key={i} className="p-4 bg-black/30 border border-gray-800 rounded-xl text-sm italic text-gray-400">
                  {rec}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Identified Issues & Flags</h3>
          {activeModule.issues.length > 0 ? (
            <div className="space-y-3">
              {activeModule.issues.map(issue => (
                <div key={issue.id} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${getSeverityColor(issue.severity)}`}>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="text-sm font-semibold">{issue.message}</span>
                  </div>
                  <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full border border-current">{issue.severity}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-gray-600">
              <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-sm">No significant issues detected in this vector.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AppAudit;
