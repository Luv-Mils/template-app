import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Projects() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('projects').then(setData); }, []);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
    { key: 'priority', label: 'Priority' },
    { key: 'progress', label: 'Progress' },
    { key: 'due_date', label: 'Due Date', render: (v: unknown) => v ? new Date(v as string).toLocaleDateString() : '—' },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Projects" subtitle="Manage your projects"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Project</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
