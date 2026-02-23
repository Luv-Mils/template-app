import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { DataTable, PageHeader } from '../../../components';

export default function Categories() {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  useEffect(() => { getAll('categories').then(setData); }, []);

  const columns = [
    { key: 'name', label: 'Category' },
    { key: 'description', label: 'Description' },
    { key: 'post_count', label: 'Posts' },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Categories" subtitle="Organize your content"
        actions={<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">New Category</button>}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
