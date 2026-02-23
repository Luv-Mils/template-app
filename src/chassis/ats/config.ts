import React from 'react';
import Dashboard from './pages/Dashboard';
import Candidates from './pages/Candidates';
import Jobs from './pages/Jobs';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const atsConfig: ChassisConfig = {
  id: 'ats',
  name: 'Applicant Tracker',
  icon: '👔',
  description: 'Track candidates, job postings, and hiring pipeline',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/candidates', label: 'Candidates', icon: '👤', component: Candidates },
    { path: '/jobs', label: 'Job Postings', icon: '💼', component: Jobs },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "candidates": [
          {
              "id": "cnd-001",
              "name": "Alex Rivera",
              "email": "alex@example.com",
              "position": "Senior Engineer",
              "status": "interview",
              "rating": 4,
              "source": "LinkedIn",
              "created_at": "2026-02-13T07:49:02.863Z",
              "updated_at": "2026-02-22T07:49:02.863Z"
          },
          {
              "id": "cnd-002",
              "name": "Priya Patel",
              "email": "priya@example.com",
              "position": "Product Designer",
              "status": "offer",
              "rating": 5,
              "source": "Referral",
              "created_at": "2026-02-03T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "cnd-003",
              "name": "Marcus Lee",
              "email": "marcus@example.com",
              "position": "Senior Engineer",
              "status": "screening",
              "rating": 3,
              "source": "Indeed",
              "created_at": "2026-02-18T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "cnd-004",
              "name": "Sofia Garcia",
              "email": "sofia@example.com",
              "position": "Marketing Manager",
              "status": "applied",
              "rating": 0,
              "source": "Website",
              "created_at": "2026-02-22T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "cnd-005",
              "name": "Tom Chen",
              "email": "tom@example.com",
              "position": "DevOps Engineer",
              "status": "hired",
              "rating": 5,
              "source": "LinkedIn",
              "created_at": "2026-01-09T07:49:02.863Z",
              "updated_at": "2026-02-13T07:49:02.863Z"
          }
      ],
      "jobs": [
          {
              "id": "job-001",
              "title": "Senior Engineer",
              "department": "Engineering",
              "location": "Remote",
              "type": "full-time",
              "status": "open",
              "applicants": 12,
              "created_at": "2026-01-24T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "job-002",
              "title": "Product Designer",
              "department": "Design",
              "location": "NYC",
              "type": "full-time",
              "status": "open",
              "applicants": 8,
              "created_at": "2026-01-29T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "job-003",
              "title": "Marketing Manager",
              "department": "Marketing",
              "location": "Remote",
              "type": "full-time",
              "status": "open",
              "applicants": 5,
              "created_at": "2026-02-08T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "job-004",
              "title": "DevOps Engineer",
              "department": "Engineering",
              "location": "SF",
              "type": "full-time",
              "status": "closed",
              "applicants": 20,
              "created_at": "2025-12-25T07:49:02.863Z",
              "updated_at": "2026-02-13T07:49:02.863Z"
          }
      ]
  },
  schema: `
    CREATE TABLE candidates (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, email TEXT, position TEXT, status TEXT DEFAULT 'applied' CHECK (status IN ('applied', 'screening', 'interview', 'offer', 'hired', 'rejected')), rating INTEGER DEFAULT 0, source TEXT, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE jobs (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), title TEXT NOT NULL, department TEXT, location TEXT, type TEXT DEFAULT 'full-time', status TEXT DEFAULT 'open' CHECK (status IN ('open', 'closed', 'draft', 'on-hold')), applicants INTEGER DEFAULT 0, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
