import React from 'react';
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import Clients from './pages/Clients';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const invoiceConfig: ChassisConfig = {
  id: 'invoice',
  name: 'Invoice Manager',
  icon: '🧾',
  description: 'Create and track invoices and payments',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/invoices', label: 'Invoices', icon: '🧾', component: Invoices },
    { path: '/clients', label: 'Clients', icon: '👥', component: Clients },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "invoices": [
          {
              "id": "inv-001",
              "invoice_number": "INV-001",
              "client_name": "Acme Corp",
              "amount": 4500,
              "status": "paid",
              "due_date": "2026-03-10T07:49:02.862Z",
              "issued_date": "2026-01-09T07:49:02.862Z",
              "created_at": "2026-01-09T07:49:02.862Z",
              "updated_at": "2026-02-08T07:49:02.862Z"
          },
          {
              "id": "inv-002",
              "invoice_number": "INV-002",
              "client_name": "TechStart Inc",
              "amount": 2800,
              "status": "sent",
              "due_date": "2026-02-13T07:49:02.862Z",
              "issued_date": "2026-02-18T07:49:02.862Z",
              "created_at": "2026-02-18T07:49:02.862Z",
              "updated_at": "2026-02-23T07:49:02.862Z"
          },
          {
              "id": "inv-003",
              "invoice_number": "INV-003",
              "client_name": "Global Media",
              "amount": 7200,
              "status": "overdue",
              "due_date": "2026-02-28T07:49:02.862Z",
              "issued_date": "2026-01-29T07:49:02.862Z",
              "created_at": "2026-01-29T07:49:02.862Z",
              "updated_at": "2026-02-18T07:49:02.862Z"
          },
          {
              "id": "inv-004",
              "invoice_number": "INV-004",
              "client_name": "DataFlow",
              "amount": 1500,
              "status": "draft",
              "due_date": "2026-01-24T07:49:02.862Z",
              "issued_date": "2026-02-23T07:49:02.862Z",
              "created_at": "2026-02-23T07:49:02.862Z",
              "updated_at": "2026-02-23T07:49:02.862Z"
          },
          {
              "id": "inv-005",
              "invoice_number": "INV-005",
              "client_name": "BrightWave",
              "amount": 3200,
              "status": "paid",
              "due_date": "2026-03-15T07:49:02.862Z",
              "issued_date": "2026-01-04T07:49:02.862Z",
              "created_at": "2026-01-04T07:49:02.862Z",
              "updated_at": "2026-02-03T07:49:02.862Z"
          }
      ],
      "clients": [
          {
              "id": "cli-001",
              "name": "Acme Corp",
              "email": "billing@acme.com",
              "company": "Acme Corporation",
              "total_billed": 4500,
              "invoices_count": 1,
              "created_at": "2025-11-25T07:49:02.862Z",
              "updated_at": "2026-02-08T07:49:02.862Z"
          },
          {
              "id": "cli-002",
              "name": "TechStart Inc",
              "email": "finance@techstart.io",
              "company": "TechStart",
              "total_billed": 2800,
              "invoices_count": 1,
              "created_at": "2025-12-25T07:49:02.862Z",
              "updated_at": "2026-02-23T07:49:02.862Z"
          },
          {
              "id": "cli-003",
              "name": "Global Media",
              "email": "ap@globalmedia.com",
              "company": "Global Media Group",
              "total_billed": 7200,
              "invoices_count": 1,
              "created_at": "2026-01-09T07:49:02.862Z",
              "updated_at": "2026-02-18T07:49:02.862Z"
          }
      ]
  },
  schema: `
    CREATE TABLE invoices (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), invoice_number TEXT NOT NULL, client_name TEXT NOT NULL, amount NUMERIC NOT NULL, status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue', 'cancelled')), due_date DATE, issued_date DATE DEFAULT CURRENT_DATE, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE clients (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, email TEXT, company TEXT, total_billed NUMERIC DEFAULT 0, invoices_count INTEGER DEFAULT 0, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
