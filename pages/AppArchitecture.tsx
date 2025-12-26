
import React from 'react';

const AppArchitecture: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <header className="text-center">
        <h1 className="text-3xl font-black tracking-tight mb-4">Core System Architecture</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Kasparro's proprietary "Context-Aware Retrieval Engine" (CARE) transforms fragmented brand signals into structured knowledge.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {/* Connector Lines (Simulated with layout) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/50 to-blue-500/20 -z-10" />

        {/* Layer 1: Input */}
        <div className="space-y-4">
          <div className="bg-gray-900 border-2 border-blue-500/30 p-6 rounded-3xl text-center">
            <div className="text-[10px] font-mono text-blue-400 mb-2 uppercase">Layer 01</div>
            <h3 className="font-bold text-sm mb-2">InputAssembler</h3>
            <p className="text-[10px] text-gray-500 leading-tight">Normalizes heterogenous data sources (HTML, PDF, API, RSS).</p>
          </div>
          <div className="flex flex-col items-center space-y-1 text-gray-700">
            <div className="w-0.5 h-4 bg-gray-800" />
            <div className="w-0.5 h-4 bg-gray-800" />
          </div>
        </div>

        {/* Layer 2: Context */}
        <div className="space-y-4">
          <div className="bg-gray-900 border-2 border-purple-500/30 p-6 rounded-3xl text-center">
            <div className="text-[10px] font-mono text-purple-400 mb-2 uppercase">Layer 02</div>
            <h3 className="font-bold text-sm mb-2">ContextPack</h3>
            <p className="text-[10px] text-gray-500 leading-tight">Enriches data with industry taxonomy and competitor semantic maps.</p>
          </div>
        </div>

        {/* Layer 3: Audit Modules */}
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
            <div className="text-[10px] font-mono text-gray-500 mb-2 text-center">Layer 03: Parallel Audits</div>
            {['Semantic', 'EEAT', 'Technical', 'ROI'].map(m => (
              <div key={m} className="bg-black/40 py-2 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-center">
                {m} Module
              </div>
            ))}
            <div className="text-[10px] text-center text-gray-600 font-bold">+ 3 More</div>
          </div>
        </div>

        {/* Layer 4: Intelligence */}
        <div className="space-y-4">
          <div className="bg-gray-900 border-2 border-blue-500/30 p-6 rounded-3xl text-center">
            <div className="text-[10px] font-mono text-blue-400 mb-2 uppercase">Layer 04</div>
            <h3 className="font-bold text-sm mb-2">Inference Hub</h3>
            <p className="text-[10px] text-gray-500 leading-tight">Cross-references module outputs for systemic anomalies.</p>
          </div>
        </div>

        {/* Layer 5: Output */}
        <div className="space-y-4">
          <div className="bg-blue-600 p-6 rounded-3xl text-center shadow-2xl shadow-blue-500/20">
            <div className="text-[10px] font-mono text-blue-100 mb-2 uppercase">Output</div>
            <h3 className="font-bold text-sm mb-2">Output Surfaces</h3>
            <p className="text-[10px] text-blue-100/70 leading-tight">Strategy JSON, Console Dashboard, and API Push.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
        <h3 className="text-xl font-bold mb-6">System Specifications</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-blue-400 mb-2">Data Ingestion (InputAssembler)</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Uses headless browsing and semantic parsing to extract meaning, not just text. Handles JavaScript-heavy single-page apps and dynamically generated content with 99% fidelity.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-400 mb-2">Enrichment Engine (ContextPack)</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Injects industry-specific embeddings. For example, in Finance, it prioritizes regulatory compliance and "YMYL" trust signals automatically.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-purple-400 mb-2">Parallel Processing</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Audit modules run in ephemeral serverless containers. Total audit latency averages 12 seconds per 1,000 URLs.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-purple-400 mb-2">Synthesis & Logic</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                The final layer uses a proprietary reasoning model to resolve conflicts between modules (e.g., if a technical fix hurts semantic utility).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppArchitecture;
