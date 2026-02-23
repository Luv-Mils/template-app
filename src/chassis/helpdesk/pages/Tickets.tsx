import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Tickets() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('tickets').then(setData); }, []);

  const columns = [
    { key: 'subject', label: 'Subject' },
    { key: 'requester', label: 'Requester' },
    { key: 'priority', label: 'Priority' },
    { key: 'category', label: 'Category' },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Tickets" subtitle="Manage support requests"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Ticket</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
