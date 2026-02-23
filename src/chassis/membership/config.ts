import React from 'react';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Plans from './pages/Plans';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const membershipConfig: ChassisConfig = {
  id: 'membership',
  name: 'Membership Manager',
  icon: '🪪',
  description: 'Manage members, plans, and subscriptions',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/members', label: 'Members', icon: '👥', component: Members },
    { path: '/plans', label: 'Plans', icon: '📋', component: Plans },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "members": [
          {
              "id": "mem-001",
              "name": "Sarah Johnson",
              "email": "sarah@example.com",
              "plan": "Premium",
              "status": "active",
              "joined_date": "2025-11-25T07:49:02.863Z",
              "renewal_date": "2026-03-25T07:49:02.863Z",
              "created_at": "2025-11-25T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "mem-002",
              "name": "Michael Chen",
              "email": "michael@example.com",
              "plan": "Basic",
              "status": "active",
              "joined_date": "2025-12-25T07:49:02.863Z",
              "renewal_date": "2026-02-25T07:49:02.863Z",
              "created_at": "2025-12-25T07:49:02.863Z",
              "updated_at": "2026-02-21T07:49:02.863Z"
          },
          {
              "id": "mem-003",
              "name": "Emily Rodriguez",
              "email": "emily@example.com",
              "plan": "Premium",
              "status": "active",
              "joined_date": "2026-01-24T07:49:02.863Z",
              "renewal_date": "2026-02-23T07:49:02.863Z",
              "created_at": "2026-01-24T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "mem-004",
              "name": "James Wilson",
              "email": "james@example.com",
              "plan": "Basic",
              "status": "expired",
              "joined_date": "2025-10-26T07:49:02.863Z",
              "renewal_date": "2026-03-25T07:49:02.863Z",
              "created_at": "2025-10-26T07:49:02.863Z",
              "updated_at": "2026-01-24T07:49:02.863Z"
          },
          {
              "id": "mem-005",
              "name": "Lisa Park",
              "email": "lisa@example.com",
              "plan": "Enterprise",
              "status": "active",
              "joined_date": "2026-01-09T07:49:02.863Z",
              "renewal_date": "2026-02-08T07:49:02.863Z",
              "created_at": "2026-01-09T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          }
      ],
      "plans": [
          {
              "id": "pln-001",
              "name": "Basic",
              "price": 9.99,
              "interval": "monthly",
              "features": "Core features, Email support",
              "member_count": 45,
              "status": "active",
              "created_at": "2025-08-27T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "pln-002",
              "name": "Premium",
              "price": 29.99,
              "interval": "monthly",
              "features": "All features, Priority support, API access",
              "member_count": 28,
              "status": "active",
              "created_at": "2025-08-27T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "pln-003",
              "name": "Enterprise",
              "price": 99.99,
              "interval": "monthly",
              "features": "All features, Dedicated support, Custom integrations, SLA",
              "member_count": 5,
              "status": "active",
              "created_at": "2025-10-26T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          }
      ]
  },
  schema: `
    CREATE TABLE members (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, email TEXT, plan TEXT, status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled', 'pending')), joined_date DATE DEFAULT CURRENT_DATE, renewal_date DATE, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE plans (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, price NUMERIC NOT NULL, interval TEXT DEFAULT 'monthly', features TEXT, member_count INTEGER DEFAULT 0, status TEXT DEFAULT 'active' CHECK (status IN ('active', 'archived')), created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
