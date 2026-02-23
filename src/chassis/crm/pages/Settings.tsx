import React from 'react';
import { PageHeader } from '../../../components';

export default function Settings() {
  return (
    <div className="p-6">
      <PageHeader title="Settings" subtitle="Configure your CRM" />
      <div className="space-y-6">
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Pipeline Stages</h3>
          <p className="text-sm text-muted">Customize deal stages and win probability defaults.</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Email Integration</h3>
          <p className="text-sm text-muted">Connect your email to track communication with contacts.</p>
        </div>
      </div>
    </div>
  );
}
