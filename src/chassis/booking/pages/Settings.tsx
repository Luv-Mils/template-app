import React from 'react';
import { PageHeader } from '../../../components';

export default function Settings() {
  return (
    <div className="p-6">
      <PageHeader title="Settings" subtitle="Configure your booking system" />
      <div className="space-y-6">
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Business Hours</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-muted">Monday - Friday:</span> <span className="text-foreground ml-2">9:00 AM - 6:00 PM</span></div>
            <div><span className="text-muted">Saturday:</span> <span className="text-foreground ml-2">10:00 AM - 4:00 PM</span></div>
            <div><span className="text-muted">Sunday:</span> <span className="text-foreground ml-2">Closed</span></div>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Services</h3>
          <p className="text-sm text-muted">Configure available services, durations, and pricing.</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5">
          <h3 className="font-heading font-semibold text-foreground mb-3">Notifications</h3>
          <p className="text-sm text-muted">Set up email and SMS reminders for appointments.</p>
        </div>
      </div>
    </div>
  );
}
