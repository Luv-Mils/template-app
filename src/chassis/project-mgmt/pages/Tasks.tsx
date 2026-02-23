import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Tasks() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('tasks').then(setData); }, []);

  const columns = [
    { key: 'title', label: 'Task' },
    { key: 'project_name', label: 'Project' },
    { key: 'assignee', label: 'Assignee' },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
    { key: 'priority', label: 'Priority' },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Tasks" subtitle="Track all tasks across projects"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Task</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
