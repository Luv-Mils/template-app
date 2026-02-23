import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader } from '../../../components';

export default function Responses() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('responses').then(setData); }, []);

  const columns = [
    { key: 'survey_title', label: 'Survey' },
    { key: 'respondent', label: 'Respondent' },
    { key: 'completion', label: 'Completion' },
    { key: 'submitted_at', label: 'Submitted', render: (v: unknown) => v ? new Date(v as string).toLocaleDateString() : '—' },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Responses" subtitle="View collected responses"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Export Data</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
