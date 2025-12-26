
import { Brand, Severity, AuditReport } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'brand-1',
    name: 'Lumiera Tech',
    domain: 'lumiera.io',
    visibilityScore: 78,
    eeatScore: 84,
    keywordCoverage: '42%',
    lastAudit: '2024-05-12T14:30:00Z',
    logo: 'https://picsum.photos/seed/lumiera/40/40'
  },
  {
    id: 'brand-2',
    name: 'Vertex Finance',
    domain: 'vertex-fin.com',
    visibilityScore: 62,
    eeatScore: 91,
    keywordCoverage: '28%',
    lastAudit: '2024-05-15T09:15:00Z',
    logo: 'https://picsum.photos/seed/vertex/40/40'
  }
];

export const AUDIT_MODULE_METADATA = [
  { id: 'semantic', name: 'Semantic Coverage', icon: 'M12 21l-8-18h16l-8 18z' },
  { id: 'eeat', name: 'E-E-A-T Analysis', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'tech', name: 'Technical AI Readiness', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 'utility', name: 'Content Utility', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'kg', name: 'Knowledge Graph', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 'comp', name: 'Competitive Intel', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'roi', name: 'Predictive ROI', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
];

export const MOCK_AUDIT_DATA: Record<string, AuditReport> = {
  'brand-1': {
    brandId: 'brand-1',
    timestamp: '2024-05-12T14:30:00Z',
    modules: {
      semantic: {
        id: 'semantic',
        name: 'Semantic Coverage',
        score: 82,
        insights: [
          'High authority on "Generative AI Infrastructure"',
          'Weak semantic linkage between "Compute Costs" and "Sustainability"',
          'Topic cluster for "Edge AI" is growing in relevance'
        ],
        issues: [
          { id: 's1', severity: Severity.MEDIUM, message: 'Missing contextual links in primary pillar pages.' },
          { id: 's2', severity: Severity.LOW, message: 'Outdated terminology in documentation headers.' }
        ],
        recommendations: [
          'Develop a comprehensive FAQ for Edge AI Deployment.',
          'Inject semantic triples into the knowledge base schema.'
        ],
        icon: 'semantic'
      },
      eeat: {
        id: 'eeat',
        name: 'E-E-A-T Analysis',
        score: 84,
        insights: [
          'Strong author profiles detected for core engineering team.',
          'External citations from Tier-1 tech publications found.',
          'Missing clear "Review Process" documentation.'
        ],
        issues: [
          { id: 'e1', severity: Severity.HIGH, message: 'Lack of external expert validation on 3 major whitepapers.' }
        ],
        recommendations: [
          'Add detailed author bios to every technical blog post.',
          'Create a "Trust Center" detailing research methodologies.'
        ],
        icon: 'eeat'
      }
      // Other modules would be populated similarly in a real app
    }
  }
};
