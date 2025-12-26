
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-blue-500/30">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-900/20 to-transparent blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            The New Standard in AI-SEO
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Own the Answer Engine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Before the Click.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Kasparro is an AI-native SEO platform built for the LLM era. We don't just optimize for keywords; we engineer brand authority for Knowledge Graphs and AI responses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/app/audit" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all transform hover:scale-105">
              Run AI-SEO Audit
            </Link>
            <Link to="/platform" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 border-y border-gray-900 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Traditional SEO is Dead. <br /><span className="text-blue-500">Semantic SEO is Binary.</span></h2>
              <p className="text-gray-400 mb-6">
                Legacy tools track links and keyword density. Kasparro analyzes how AI models perceive your brand's expertise, authoritativeness, and trust (E-E-A-T).
              </p>
              <ul className="space-y-4">
                {[
                  'Entity-based optimization vs. Keyword stuffing',
                  'AI Response Grounding vs. Click-through rates',
                  'Knowledge Graph injection vs. Meta-tag hacking'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="text-center p-8 bg-black/40 backdrop-blur rounded-xl border border-white/5">
                  <div className="text-4xl font-mono text-blue-400 mb-2">98.4</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">AI Trust Score</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline View */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Kasparro Works</h2>
            <p className="text-gray-400">Our pipeline transforms raw data into AI visibility.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Input Assembler', desc: 'Ingests site data, social signals, and docs.', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' },
              { title: 'Context Pack', desc: 'Adds industry context and intent mapping.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { title: 'Audit Engine', desc: '7 parallel AI modules run multi-vector audits.', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'Response Output', desc: 'Actionable JSON & strategy for humans.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors relative group">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon} /></svg>
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 text-gray-700 z-10"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>© 2024 Kasparro Labs. AI-First SEO for the modern web.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
