import React from 'react';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Articles from './pages/Articles';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const helpdeskConfig: ChassisConfig = {
  id: 'helpdesk',
  name: 'Help Desk',
  icon: '🎫',
  description: 'Support tickets and knowledge base management',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/tickets', label: 'Tickets', icon: '🎫', component: Tickets },
    { path: '/articles', label: 'Knowledge Base', icon: '📚', component: Articles },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "tickets": [
          {
              "id": "tkt-001",
              "subject": "Cannot login to dashboard",
              "requester": "John Smith",
              "priority": "high",
              "status": "open",
              "category": "Authentication",
              "assigned_to": "Support Team",
              "created_at": "2026-02-23T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "tkt-002",
              "subject": "Export feature not working",
              "requester": "Jane Doe",
              "priority": "medium",
              "status": "in-progress",
              "category": "Features",
              "assigned_to": "Dev Team",
              "created_at": "2026-02-22T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "tkt-003",
              "subject": "Billing discrepancy",
              "requester": "Bob Wilson",
              "priority": "urgent",
              "status": "waiting",
              "category": "Billing",
              "assigned_to": "Finance",
              "created_at": "2026-02-21T07:49:02.863Z",
              "updated_at": "2026-02-22T07:49:02.863Z"
          },
          {
              "id": "tkt-004",
              "subject": "Feature request: dark mode",
              "requester": "Alice Brown",
              "priority": "low",
              "status": "open",
              "category": "Features",
              "assigned_to": "",
              "created_at": "2026-02-18T07:49:02.863Z",
              "updated_at": "2026-02-18T07:49:02.863Z"
          },
          {
              "id": "tkt-005",
              "subject": "Slow page load times",
              "requester": "Charlie Kim",
              "priority": "medium",
              "status": "resolved",
              "category": "Performance",
              "assigned_to": "Dev Team",
              "created_at": "2026-02-13T07:49:02.863Z",
              "updated_at": "2026-02-20T07:49:02.863Z"
          }
      ],
      "articles": [
          {
              "id": "art-001",
              "title": "Getting Started Guide",
              "category": "Onboarding",
              "status": "published",
              "views": 1234,
              "helpful_votes": 89,
              "created_at": "2025-12-25T07:49:02.863Z",
              "updated_at": "2026-02-18T07:49:02.863Z"
          },
          {
              "id": "art-002",
              "title": "How to Reset Your Password",
              "category": "Authentication",
              "status": "published",
              "views": 856,
              "helpful_votes": 62,
              "created_at": "2026-01-09T07:49:02.863Z",
              "updated_at": "2026-02-13T07:49:02.863Z"
          },
          {
              "id": "art-003",
              "title": "Understanding Your Bill",
              "category": "Billing",
              "status": "published",
              "views": 432,
              "helpful_votes": 28,
              "created_at": "2026-01-24T07:49:02.863Z",
              "updated_at": "2026-02-08T07:49:02.863Z"
          },
          {
              "id": "art-004",
              "title": "API Rate Limits Explained",
              "category": "Technical",
              "status": "draft",
              "views": 0,
              "helpful_votes": 0,
              "created_at": "2026-02-21T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          }
      ]
  },
  schema: `
    CREATE TABLE tickets (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), subject TEXT NOT NULL, requester TEXT NOT NULL, priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')), status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in-progress', 'waiting', 'resolved', 'closed')), category TEXT, assigned_to TEXT, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE articles (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), title TEXT NOT NULL, category TEXT, status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')), views INTEGER DEFAULT 0, helpful_votes INTEGER DEFAULT 0, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
