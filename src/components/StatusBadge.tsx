import React from 'react';

const VARIANTS: Record<string, string> = {
  success: 'bg-green-500/10 text-green-500 border-green-500/20',
  warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  error: 'bg-red-500/10 text-red-500 border-red-500/20',
  info: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  neutral: 'bg-muted/10 text-muted border-border',
};

interface StatusBadgeProps {
  label: string;
  variant?: keyof typeof VARIANTS;
}

export default function StatusBadge({ label, variant = 'neutral' }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${VARIANTS[variant] ?? VARIANTS.neutral}`}>
      {label}
    </span>
  );
}
