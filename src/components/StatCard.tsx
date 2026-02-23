import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  trend?: { value: string; positive: boolean };
}

export default function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-lg flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted">{label}</p>
        <p className="text-2xl font-heading font-bold text-foreground mt-0.5">{value}</p>
        {trend && (
          <p className={`text-xs mt-1 ${trend.positive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.positive ? '+' : ''}{trend.value}
          </p>
        )}
      </div>
    </div>
  );
}
