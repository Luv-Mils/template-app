import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { seedDatabase } from '../../../lib/seed';
import { StatCard, PageHeader } from '../../../components';
import { useContent } from '../../../lib/content-loader';

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, confirmed: 0, pending: 0, clients: 0 });
  const { section } = useContent();
  const dashContent = section('dashboard');
  const [recent, setRecent] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    seedDatabase('booking');
    loadData();
  }, []);

  async function loadData() {
    const appointments = await getAll('appointments');
    const clients = await getAll('clients');
    setStats({
      total: appointments.length,
      confirmed: appointments.filter(a => a.status === 'confirmed').length,
      pending: appointments.filter(a => a.status === 'pending').length,
      clients: clients.length,
    });
    setRecent(appointments.slice(0, 5));
  }

  return (
    <div className="p-6">
      <PageHeader title={dashContent.heading || "Dashboard"} subtitle={dashContent.subheading || "Overview of your booking activity"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Appointments" value={stats.total} icon="📅" />
        <StatCard label="Confirmed" value={stats.confirmed} icon="✅" trend={{ value: '12%', positive: true }} />
        <StatCard label="Pending" value={stats.pending} icon="⏳" />
        <StatCard label="Total Clients" value={stats.clients} icon="👥" trend={{ value: '8%', positive: true }} />
      </div>
      <div className="bg-surface border border-border rounded-xl p-5">
        <h2 className="font-heading font-semibold text-foreground mb-4">Recent Appointments</h2>
        <div className="space-y-3">
          {recent.map((apt) => (
            <div key={apt.id as string} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{apt.client_name as string}</p>
                <p className="text-xs text-muted">{apt.service as string} — {apt.time as string}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                apt.status === 'confirmed' ? 'bg-green-500/10 text-green-500' :
                apt.status === 'pending' ? 'bg-amber-500/10 text-amber-500' :
                'bg-muted/10 text-muted'
              }`}>{apt.status as string}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
