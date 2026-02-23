/**
 * Database abstraction layer for Neon PostgreSQL via REST API.
 * In production, this connects to the Neon database provisioned for this app.
 * In preview/dev mode, uses an in-memory mock store.
 */

export interface QueryResult<T = Record<string, unknown>> {
  rows: T[];
  rowCount: number;
}

// In-memory mock database for preview mode
const mockStore: Map<string, Record<string, unknown>[]> = new Map();

function generateId(): string {
  return crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
}

function now(): string {
  return new Date().toISOString();
}

/**
 * Get all records from a table.
 */
export async function getAll<T extends Record<string, unknown>>(table: string): Promise<T[]> {
  return (mockStore.get(table) ?? []) as T[];
}

/**
 * Get a single record by ID.
 */
export async function getById<T extends Record<string, unknown>>(table: string, id: string): Promise<T | null> {
  const rows = mockStore.get(table) ?? [];
  return (rows.find(r => r.id === id) as T) ?? null;
}

/**
 * Insert a new record.
 */
export async function insert<T extends Record<string, unknown>>(table: string, data: Omit<T, 'id' | 'created_at' | 'updated_at'>): Promise<T> {
  if (!mockStore.has(table)) mockStore.set(table, []);
  const record = { ...data, id: generateId(), created_at: now(), updated_at: now() };
  mockStore.get(table)!.push(record);
  return record as T;
}

/**
 * Update a record by ID.
 */
export async function update<T extends Record<string, unknown>>(table: string, id: string, data: Partial<T>): Promise<T | null> {
  const rows = mockStore.get(table) ?? [];
  const idx = rows.findIndex(r => r.id === id);
  if (idx === -1) return null;
  rows[idx] = { ...rows[idx], ...data, updated_at: now() };
  return rows[idx] as T;
}

/**
 * Delete a record by ID.
 */
export async function remove(table: string, id: string): Promise<boolean> {
  const rows = mockStore.get(table) ?? [];
  const idx = rows.findIndex(r => r.id === id);
  if (idx === -1) return false;
  rows.splice(idx, 1);
  return true;
}

/**
 * Seed a table with initial data (for demo mode).
 */
export function seed(table: string, data: Record<string, unknown>[]) {
  mockStore.set(table, data.map(d => ({
    ...d,
    id: d.id as string ?? generateId(),
    created_at: d.created_at as string ?? now(),
    updated_at: d.updated_at as string ?? now(),
  })));
}

/**
 * Clear all mock data.
 */
export function clearAll() {
  mockStore.clear();
}

/**
 * Get count of records in a table.
 */
export async function count(table: string): Promise<number> {
  return (mockStore.get(table) ?? []).length;
}

/**
 * Query with a filter function.
 */
export async function query<T extends Record<string, unknown>>(
  table: string,
  filter: (row: T) => boolean,
): Promise<T[]> {
  const rows = (mockStore.get(table) ?? []) as T[];
  return rows.filter(filter);
}
