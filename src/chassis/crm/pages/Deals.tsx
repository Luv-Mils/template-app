import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Deals() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('deals').then(setData); }, []);

  const columns = [
    { key: 'title', label: 'Deal' },
    { key: 'contact_name', label: 'Contact' },
    { key: 'value', label: 'Value', render: (v: unknown) => `$${Number(v).toLocaleString()}` },
    { key: 'stage', label: 'Stage', render: (v: unknown) => {
      const variant = v === 'closed-won' ? 'success' : v === 'closed-lost' ? 'error' : v === 'negotiation' ? 'warning' : 'info';
      return <StatusBadge label={v as string} variant={variant} />;
    }},
    { key: 'probability', label: 'Probability', render: (v: unknown) => `${v}%` },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Deals" subtitle="Track your sales pipeline"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Deal</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
