
import React from 'react';

const Platform: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">The Infrastructure of Trust</h1>
          <p className="text-xl text-gray-400 mb-12">
            Kasparro is a sophisticated data pipeline designed to bridge the gap between static brand assets and dynamic LLM responses.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">What Data Kasparro Consumes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Digital Assets', items: ['Website HTML', 'API Documentation', 'Whitepapers', 'Blog Archives'] },
                { title: 'Social Proof', items: ['Expert LinkedIn profiles', 'GitHub Contributions', 'Peer Reviews'] },
                { title: 'Contextual Signals', items: ['Competitor SERP analysis', 'Knowledge Graph gaps', 'Semantic trends'] }
              ].map((card, i) => (
                <div key={i} className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-bold mb-4 text-blue-400">{card.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {card.items.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-purple-500 pl-4">The 7-Module Audit Vector</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                'Semantic', 'E-E-A-T', 'Technical', 'Utility', 'Graph', 'Intel', 'ROI'
              ].map((mod, i) => (
                <div key={i} className="aspect-square bg-gray-900 flex flex-col items-center justify-center p-4 rounded-xl border border-gray-800 text-center">
                  <div className="text-xs font-mono text-gray-500 mb-2">MOD-0{i+1}</div>
                  <div className="text-sm font-bold">{mod}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-400 max-w-2xl text-sm italic">
              "Every module uses a specialized ensemble of models to evaluate specific trustworthiness markers that LLMs prioritize during retrieval."
            </p>
          </section>

          <section className="bg-blue-600/5 rounded-3xl p-8 lg:p-12 border border-blue-500/10">
            <h2 className="text-2xl font-bold mb-6">The Output: Your Brand, Grounded.</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-400">
                  When the pipeline completes, brands receive a <strong>Structured Action Plan</strong> that directly influences:
                </p>
                <div className="space-y-4">
                  {[
                    'Search Generative Experience (SGE) visibility',
                    'Knowledge Panel reliability',
                    'Perplexity/OpenAI Search Citation Probability',
                    'Traditional Organic Ranking'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800 font-mono text-xs text-blue-300">
                <pre>{`{
  "brand_authority": {
    "score": 0.942,
    "primary_entities": ["AI Infrastructure", "Compute"],
    "trust_markers": [
      { "id": "auth_expert_1", "status": "verified" }
    ]
  },
  "action_items": [
    "Inject schema.org/Review on pricing pages",
    "Update Knowledge Graph node for CEO"
  ]
}`}</pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Platform;
