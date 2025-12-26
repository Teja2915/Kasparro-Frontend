
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-black tracking-tighter mb-8">Engineering Truth in the Age of Synthesis.</h1>
        
        <div className="prose prose-invert lg:prose-xl">
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Kasparro was founded by a collective of SEO engineers and machine learning researchers who realized that the transition from "Search Engines" to "Answer Engines" would leave 90% of brands invisible.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-12">Our Philosophy</h2>
          <p className="text-gray-400 mb-6">
            We believe that SEO is no longer about "winning" a keyword. It's about being the most <strong>provable</strong> answer. In an AI-first world, truth is computed through consensus, E-E-A-T, and structured data.
          </p>

          <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl my-12">
            <h3 className="text-lg font-bold mb-2">The Mission</h3>
            <p className="text-sm text-blue-200">
              To build the infrastructure that allows brands to maintain high-fidelity representation in LLM latent spaces.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Why Us?</h2>
          <p className="text-gray-400 mb-8">
            Our team spent a decade optimizing for Google's classic algorithm. We understand the heritage of search, but we aren't bound by it. We treat SEO as a technical engineering challenge, not a marketing gimmick.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-900">
          <div>
            <div className="text-3xl font-black text-blue-500">14</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Engineers</div>
          </div>
          <div>
            <div className="text-3xl font-black text-blue-500">2B+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Pages Analyzed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
