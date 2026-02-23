import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader } from '../../../components';

export default function Clients() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('clients').then(setData); }, []);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'visits', label: 'Visits' },
    { key: 'last_visit', label: 'Last Visit', render: (v: unknown) => v ? new Date(v as string).toLocaleDateString() : '—' },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Clients" subtitle="Your client database"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Add Client</button>}
      />
      <DataTable columns={columns} data={data} emptyMessage="No clients yet" />
    </div>
  );
}
