import React, { useEffect, useState } from 'react';
import { getAll } from '../../../lib/db';
import { seedDatabase } from '../../../lib/seed';
import { StatCard, PageHeader } from '../../../components';
import { useContent } from '../../../lib/content-loader';

export default function Dashboard() {
  const { section } = useContent();
  const dashContent = section('dashboard');
  const [stats, setStats] = useState<(string | number)[]>([0, 0, 0, 0]);
  const [recent, setRecent] = useState<Record<string, unknown>[]>([]);
  const { section } = useContent();
  const dashContent = section('dashboard');

  useEffect(() => {
    seedDatabase('ats');
    loadData();
  }, []);

  async function loadData() {
    const items = await getAll('candidates');
    setRecent(items.slice(0, 5));
    setStats(prev => { const n = [...prev]; n[0] = items.length; return n; });
    setStats(prev => { const n = [...prev]; n[1] = items.length; return n; });
    setStats(prev => { const n = [...prev]; n[2] = items.length; return n; });
    setStats(prev => { const n = [...prev]; n[3] = items.length; return n; });
  }

  return (
    <div className="p-6">
      <PageHeader title={dashContent.heading || "Dashboard"} subtitle={dashContent.subheading || "Overview of your applicant tracker"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Active Candidates" value={stats[0]} icon="👤" trend={{ value: '3 new', positive: true }} />
        <StatCard label="Open Positions" value={stats[1]} icon="💼" />
        <StatCard label="In Pipeline" value={stats[2]} icon="🔄" />
        <StatCard label="Hired This Month" value={stats[3]} icon="🎉" />
      </div>
      <div className="bg-surface border border-border rounded-xl p-5">
        <h2 className="font-heading font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recent.map((item) => (
            <div key={item.id as string} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
              <div>
              <p className="text-sm font-medium text-foreground">{item.name as string}</p>
              <p className="text-xs text-muted">{item.position as string}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
