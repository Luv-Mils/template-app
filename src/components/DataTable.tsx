import React from 'react';

interface Column<T> {
  key: string;
  label: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  onRowClick,
  emptyMessage = 'No records found',
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="bg-surface border border-border rounded-xl p-12 text-center">
        <p className="text-muted text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            {columns.map(col => (
              <th key={col.key} className="text-left text-xs font-medium text-muted uppercase tracking-wider px-4 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id as string ?? i}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-border/50 last:border-0 ${onRowClick ? 'cursor-pointer hover:bg-surfaceAlt/50' : ''} transition-colors`}
            >
              {columns.map(col => (
                <td key={col.key} className="px-4 py-3 text-sm text-foreground">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
