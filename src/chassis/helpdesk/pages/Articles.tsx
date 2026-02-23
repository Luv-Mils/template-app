import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Articles() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('articles').then(setData); }, []);

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'views', label: 'Views' },
    { key: 'helpful_votes', label: 'Helpful' },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Knowledge Base" subtitle="Help articles and documentation"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Article</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
