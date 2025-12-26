
export enum Severity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export interface AuditIssue {
  id: string;
  severity: Severity;
  message: string;
}

export interface AuditModuleData {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: AuditIssue[];
  recommendations: string[];
  icon: string;
}

export interface Brand {
  id: string;
  name: string;
  domain: string;
  visibilityScore: number;
  eeatScore: number;
  keywordCoverage: string;
  lastAudit: string;
  logo: string;
}

export interface AuditReport {
  brandId: string;
  timestamp: string;
  modules: Record<string, AuditModuleData>;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  type: 'input' | 'process' | 'module' | 'output';
}
