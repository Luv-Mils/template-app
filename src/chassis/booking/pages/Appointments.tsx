import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader, StatusBadge } from '../../../components';

export default function Appointments() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('appointments').then(setData); }, []);

  const columns = [
    { key: 'client_name', label: 'Client' },
    { key: 'service', label: 'Service' },
    { key: 'date', label: 'Date', render: (v: unknown) => new Date(v as string).toLocaleDateString() },
    { key: 'time', label: 'Time' },
    { key: 'duration', label: 'Duration', render: (v: unknown) => `${v} min` },
    { key: 'status', label: 'Status', render: (v: unknown) => {
      const variant = v === 'confirmed' ? 'success' : v === 'pending' ? 'warning' : v === 'cancelled' ? 'error' : 'neutral';
      return <StatusBadge label={v as string} variant={variant} />;
    }},
  ];

  return (
    <div className="p-6">
      <PageHeader title="Appointments" subtitle="Manage your schedule"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Appointment</button>}
      />
      <DataTable columns={columns} data={data} emptyMessage="No appointments yet" />
    </div>
  );
}
