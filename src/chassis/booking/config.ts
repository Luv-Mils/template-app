import React from 'react';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Clients from './pages/Clients';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const bookingConfig: ChassisConfig = {
  id: 'booking',
  name: 'Booking Manager',
  icon: '📅',
  description: 'Appointment scheduling and client management',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/appointments', label: 'Appointments', icon: '📅', component: Appointments },
    { path: '/clients', label: 'Clients', icon: '👥', component: Clients },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "appointments": [
          {
              "id": "apt-001",
              "client_name": "Sarah Johnson",
              "service": "Deep Tissue Massage",
              "date": "2026-02-25T07:49:02.859Z",
              "time": "10:00 AM",
              "duration": 60,
              "status": "confirmed",
              "notes": "Prefers firm pressure",
              "created_at": "2026-01-24T07:49:02.859Z",
              "updated_at": "2026-02-21T07:49:02.859Z"
          },
          {
              "id": "apt-002",
              "client_name": "Michael Chen",
              "service": "Swedish Massage",
              "date": "2026-02-24T07:49:02.859Z",
              "time": "2:00 PM",
              "duration": 90,
              "status": "confirmed",
              "notes": "",
              "created_at": "2026-01-29T07:49:02.859Z",
              "updated_at": "2026-02-22T07:49:02.859Z"
          },
          {
              "id": "apt-003",
              "client_name": "Emily Rodriguez",
              "service": "Hot Stone Therapy",
              "date": "2026-02-23T07:49:02.859Z",
              "time": "11:00 AM",
              "duration": 75,
              "status": "pending",
              "notes": "First visit",
              "created_at": "2026-02-18T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          },
          {
              "id": "apt-004",
              "client_name": "James Wilson",
              "service": "Sports Recovery",
              "date": "2026-02-22T07:49:02.859Z",
              "time": "4:00 PM",
              "duration": 60,
              "status": "confirmed",
              "notes": "Marathon training",
              "created_at": "2026-02-20T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          },
          {
              "id": "apt-005",
              "client_name": "Lisa Park",
              "service": "Aromatherapy",
              "date": "2026-02-21T07:49:02.859Z",
              "time": "9:00 AM",
              "duration": 60,
              "status": "pending",
              "notes": "Lavender allergy",
              "created_at": "2026-02-22T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          },
          {
              "id": "apt-006",
              "client_name": "David Thompson",
              "service": "Deep Tissue Massage",
              "date": "2026-02-28T07:49:02.859Z",
              "time": "3:00 PM",
              "duration": 90,
              "status": "completed",
              "notes": "",
              "created_at": "2026-02-03T07:49:02.859Z",
              "updated_at": "2026-02-18T07:49:02.859Z"
          }
      ],
      "clients": [
          {
              "id": "cli-001",
              "name": "Sarah Johnson",
              "email": "sarah@example.com",
              "phone": "(555) 123-4567",
              "visits": 12,
              "last_visit": "2026-02-21T07:49:02.859Z",
              "created_at": "2025-11-25T07:49:02.859Z",
              "updated_at": "2026-02-21T07:49:02.859Z"
          },
          {
              "id": "cli-002",
              "name": "Michael Chen",
              "email": "michael@example.com",
              "phone": "(555) 234-5678",
              "visits": 8,
              "last_visit": "2026-02-22T07:49:02.859Z",
              "created_at": "2025-12-25T07:49:02.859Z",
              "updated_at": "2026-02-22T07:49:02.859Z"
          },
          {
              "id": "cli-003",
              "name": "Emily Rodriguez",
              "email": "emily@example.com",
              "phone": "(555) 345-6789",
              "visits": 1,
              "last_visit": "2026-02-23T07:49:02.859Z",
              "created_at": "2026-02-18T07:49:02.859Z",
              "updated_at": "2026-02-23T07:49:02.859Z"
          },
          {
              "id": "cli-004",
              "name": "James Wilson",
              "email": "james@example.com",
              "phone": "(555) 456-7890",
              "visits": 5,
              "last_visit": "2026-02-09T07:49:02.859Z",
              "created_at": "2026-01-09T07:49:02.859Z",
              "updated_at": "2026-02-09T07:49:02.859Z"
          },
          {
              "id": "cli-005",
              "name": "Lisa Park",
              "email": "lisa@example.com",
              "phone": "(555) 567-8901",
              "visits": 3,
              "last_visit": "2026-01-24T07:49:02.859Z",
              "created_at": "2026-01-14T07:49:02.859Z",
              "updated_at": "2026-01-24T07:49:02.859Z"
          }
      ]
  },
  schema: `
    CREATE TABLE appointments (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      client_name TEXT NOT NULL,
      service TEXT NOT NULL,
      date DATE NOT NULL,
      time TEXT NOT NULL,
      duration INTEGER DEFAULT 60,
      status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
      notes TEXT DEFAULT '',
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE TABLE clients (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      visits INTEGER DEFAULT 0,
      last_visit TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
  `,
};
