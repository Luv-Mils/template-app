export interface VibeConfig {
  chassis: string;
  theme?: string;
  typography?: string;
  content?: Record<string, unknown>;
}

export interface DBRecord {
  id: string;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}
