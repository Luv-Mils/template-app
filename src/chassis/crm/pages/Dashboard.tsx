import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { seedDatabase } from '../../../lib/seed';
import { StatCard, PageHeader } from '../../../components';

export default function Dashboard() {
  const [stats, setStats] = useState({ contacts: 0, deals: 0, pipeline: 0, wonValue: 0 });

  useEffect(() => {
    seedDatabase('crm');
    loadData();
  }, []);

  async function loadData() {
    const contacts = await getAll('contacts');
    const deals = await getAll('deals');
    const pipeline = deals.filter(d => d.stage !== 'closed-won' && d.stage !== 'closed-lost').reduce((s, d) => s + (d.value as number), 0);
    const won = deals.filter(d => d.stage === 'closed-won').reduce((s, d) => s + (d.value as number), 0);
    setStats({ contacts: contacts.length, deals: deals.length, pipeline, wonValue: won });
  }

  return (
    <div className="p-6">
      <PageHeader title="Dashboard" subtitle="Sales pipeline overview" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Contacts" value={stats.contacts} icon="👤" />
        <StatCard label="Active Deals" value={stats.deals} icon="💰" />
        <StatCard label="Pipeline Value" value={`$${(stats.pipeline / 1000).toFixed(0)}k`} icon="📈" trend={{ value: '15%', positive: true }} />
        <StatCard label="Won Revenue" value={`$${(stats.wonValue / 1000).toFixed(0)}k`} icon="🏆" trend={{ value: '22%', positive: true }} />
      </div>
    </div>
  );
}
