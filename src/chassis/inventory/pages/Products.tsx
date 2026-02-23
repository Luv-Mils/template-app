import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Products() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('products').then(setData); }, []);

  const columns = [
    { key: 'name', label: 'Product' },
    { key: 'sku', label: 'SKU' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price', render: (v: unknown) => `$${Number(v).toLocaleString()}` },
    { key: 'stock', label: 'Stock' },
    { key: 'status', label: 'Status', render: (v: unknown) => <StatusBadge label={v as string} variant={v === 'active' || v === 'published' || v === 'completed' || v === 'paid' || v === 'hired' ? 'success' : v === 'pending' || v === 'draft' || v === 'review' || v === 'in-progress' ? 'warning' : v === 'cancelled' || v === 'rejected' || v === 'overdue' || v === 'closed' ? 'error' : 'info'} /> },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Products" subtitle="Manage your inventory"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Add Product</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
