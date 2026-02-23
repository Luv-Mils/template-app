import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Contacts() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('contacts').then(setData); }, []);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'company', label: 'Company' },
    { key: 'email', label: 'Email' },
    { key: 'stage', label: 'Stage', render: (v: unknown) => {
      const variant = v === 'customer' ? 'success' : v === 'negotiation' ? 'warning' : v === 'churned' ? 'error' : 'info';
      return <StatusBadge label={v as string} variant={variant} />;
    }},
    { key: 'value', label: 'Value', render: (v: unknown) => `$${Number(v).toLocaleString()}` },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Contacts" subtitle="Manage your relationships"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Add Contact</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
