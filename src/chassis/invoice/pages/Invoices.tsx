import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Invoices() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('invoices').then(setData); }, []);

  const columns = [
    { key: 'invoice_number', label: 'Invoice #' },
    { key: 'client_name', label: 'Client' },
    { key: 'amount', label: 'Amount', render: (v: unknown) => `$${Number(v).toLocaleString()}` },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
    { key: 'due_date', label: 'Due Date', render: (v: unknown) => v ? new Date(v as string).toLocaleDateString() : '—' },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Invoices" subtitle="Manage your invoices"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Invoice</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
