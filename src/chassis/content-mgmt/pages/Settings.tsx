import React from 'react';
import { PageHeader } from '../../../components';

export default function Settings() {
  return (
    <div className="p-6">
      <PageHeader title="Settings" subtitle="Configure your content manager" />
      <div className="space-y-6">
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">General</h3>
          <p className="text-sm text-muted">App name, timezone, and language preferences.</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Notifications</h3>
          <p className="text-sm text-muted">Configure email and in-app notification preferences.</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Integrations</h3>
          <p className="text-sm text-muted">Connect with third-party services and APIs.</p>
        </div>
      </div>
    </div>
  );
}
