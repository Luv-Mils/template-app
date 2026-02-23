import React from 'react';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Deals from './pages/Deals';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const crmConfig: ChassisConfig = {
  id: 'crm',
  name: 'CRM',
  icon: '🤝',
  description: 'Customer relationship management',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/contacts', label: 'Contacts', icon: '👤', component: Contacts },
    { path: '/deals', label: 'Deals', icon: '💰', component: Deals },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "contacts": [
          {
              "id": "con-001",
              "name": "Acme Corporation",
              "email": "info@acme.com",
              "phone": "(555) 100-2000",
              "company": "Acme Corp",
              "stage": "customer",
              "value": 45000,
              "created_at": "2025-11-25T07:49:02.859Z",
              "updated_at": "2026-02-18T07:49:02.859Z"
          },
          {
              "id": "con-002",
              "name": "TechStart Inc",
              "email": "hello@techstart.io",
              "phone": "(555) 200-3000",
              "company": "TechStart",
              "stage": "lead",
              "value": 12000,
              "created_at": "2026-01-24T07:49:02.859Z",
              "updated_at": "2026-02-21T07:49:02.859Z"
          },
          {
              "id": "con-003",
              "name": "Global Media",
              "email": "sales@globalmedia.com",
              "phone": "(555) 300-4000",
              "company": "Global Media",
              "stage": "prospect",
              "value": 28000,
              "created_at": "2026-02-08T07:49:02.859Z",
              "updated_at": "2026-02-22T07:49:02.859Z"
          },
          {
              "id": "con-004",
              "name": "DataFlow Systems",
              "email": "contact@dataflow.dev",
              "phone": "(555) 400-5000",
              "company": "DataFlow",
              "stage": "negotiation",
              "value": 67000,
              "created_at": "2026-01-09T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          },
          {
              "id": "con-005",
              "name": "BrightWave Marketing",
              "email": "team@brightwave.co",
              "phone": "(555) 500-6000",
              "company": "BrightWave",
              "stage": "lead",
              "value": 8500,
              "created_at": "2026-02-16T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          }
      ],
      "deals": [
          {
              "id": "deal-001",
              "title": "Enterprise License",
              "contact_name": "Acme Corporation",
              "value": 45000,
              "stage": "closed-won",
              "probability": 100,
              "close_date": "2026-03-05T07:49:02.859Z",
              "created_at": "2025-12-25T07:49:02.859Z",
              "updated_at": "2026-02-13T07:49:02.859Z"
          },
          {
              "id": "deal-002",
              "title": "Platform Integration",
              "contact_name": "DataFlow Systems",
              "value": 67000,
              "stage": "negotiation",
              "probability": 70,
              "close_date": "2026-02-09T07:49:02.859Z",
              "created_at": "2026-01-24T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          },
          {
              "id": "deal-003",
              "title": "Starter Package",
              "contact_name": "TechStart Inc",
              "value": 12000,
              "stage": "proposal",
              "probability": 50,
              "close_date": "2026-01-24T07:49:02.859Z",
              "created_at": "2026-02-08T07:49:02.859Z",
              "updated_at": "2026-02-21T07:49:02.859Z"
          },
          {
              "id": "deal-004",
              "title": "Content Campaign",
              "contact_name": "Global Media",
              "value": 28000,
              "stage": "discovery",
              "probability": 30,
              "close_date": "2026-01-09T07:49:02.859Z",
              "created_at": "2026-02-13T07:49:02.859Z",
              "updated_at": "2026-02-22T07:49:02.859Z"
          }
      ]
  },
  schema: `
    CREATE TABLE contacts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      company TEXT,
      stage TEXT DEFAULT 'lead' CHECK (stage IN ('lead', 'prospect', 'negotiation', 'customer', 'churned')),
      value NUMERIC DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE deals (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      contact_name TEXT,
      value NUMERIC DEFAULT 0,
      stage TEXT DEFAULT 'discovery' CHECK (stage IN ('discovery', 'proposal', 'negotiation', 'closed-won', 'closed-lost')),
      probability INTEGER DEFAULT 0,
      close_date DATE,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
  `,
};
