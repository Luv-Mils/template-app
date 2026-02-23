import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Orders() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('orders').then(setData); }, []);

  const columns = [
    { key: 'order_number', label: 'Order #' },
    { key: 'customer', label: 'Customer' },
    { key: 'items_count', label: 'Items' },
    { key: 'total', label: 'Total', render: (v: unknown) => `$${Number(v).toLocaleString()}` },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Orders" subtitle="Track customer orders"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Order</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
