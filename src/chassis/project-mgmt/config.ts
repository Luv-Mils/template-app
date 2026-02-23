import React from 'react';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const projectMgmtConfig: ChassisConfig = {
  id: 'project-mgmt',
  name: 'Project Manager',
  icon: '📋',
  description: 'Track projects, tasks, and team progress',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/projects', label: 'Projects', icon: '📁', component: Projects },
    { path: '/tasks', label: 'Tasks', icon: '✅', component: Tasks },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "projects": [
          {
              "id": "prj-001",
              "name": "Website Redesign",
              "description": "Complete overhaul of company website",
              "status": "active",
              "priority": "high",
              "progress": 65,
              "due_date": "2026-02-09T07:49:02.860Z",
              "created_at": "2026-01-09T07:49:02.860Z",
              "updated_at": "2026-02-23T07:49:02.860Z"
          },
          {
              "id": "prj-002",
              "name": "Mobile App v2",
              "description": "Native app rebuild with React Native",
              "status": "active",
              "priority": "high",
              "progress": 30,
              "due_date": "2025-12-25T07:49:02.860Z",
              "created_at": "2026-01-24T07:49:02.860Z",
              "updated_at": "2026-02-22T07:49:02.860Z"
          },
          {
              "id": "prj-003",
              "name": "API Documentation",
              "description": "Comprehensive API docs with examples",
              "status": "completed",
              "priority": "medium",
              "progress": 100,
              "due_date": "2026-02-28T07:49:02.860Z",
              "created_at": "2025-12-25T07:49:02.860Z",
              "updated_at": "2026-02-18T07:49:02.860Z"
          },
          {
              "id": "prj-004",
              "name": "Analytics Dashboard",
              "description": "Real-time metrics and reporting",
              "status": "active",
              "priority": "medium",
              "progress": 15,
              "due_date": "2026-01-24T07:49:02.860Z",
              "created_at": "2026-02-13T07:49:02.860Z",
              "updated_at": "2026-02-23T07:49:02.860Z"
          }
      ],
      "tasks": [
          {
              "id": "tsk-001",
              "title": "Design hero section",
              "project_name": "Website Redesign",
              "assignee": "Alice",
              "status": "done",
              "priority": "high",
              "due_date": "2026-02-25T07:49:02.860Z",
              "created_at": "2026-02-03T07:49:02.860Z",
              "updated_at": "2026-02-21T07:49:02.860Z"
          },
          {
              "id": "tsk-002",
              "title": "Build navigation component",
              "project_name": "Website Redesign",
              "assignee": "Bob",
              "status": "in-progress",
              "priority": "high",
              "due_date": "2026-02-20T07:49:02.860Z",
              "created_at": "2026-02-08T07:49:02.860Z",
              "updated_at": "2026-02-23T07:49:02.860Z"
          },
          {
              "id": "tsk-003",
              "title": "Set up CI/CD pipeline",
              "project_name": "Mobile App v2",
              "assignee": "Charlie",
              "status": "review",
              "priority": "medium",
              "due_date": "2026-02-22T07:49:02.860Z",
              "created_at": "2026-02-13T07:49:02.860Z",
              "updated_at": "2026-02-23T07:49:02.860Z"
          },
          {
              "id": "tsk-004",
              "title": "Write API reference",
              "project_name": "API Documentation",
              "assignee": "Alice",
              "status": "done",
              "priority": "medium",
              "due_date": "2026-02-28T07:49:02.860Z",
              "created_at": "2026-01-24T07:49:02.860Z",
              "updated_at": "2026-02-18T07:49:02.860Z"
          },
          {
              "id": "tsk-005",
              "title": "Create dashboard wireframes",
              "project_name": "Analytics Dashboard",
              "assignee": "David",
              "status": "todo",
              "priority": "low",
              "due_date": "2026-02-16T07:49:02.860Z",
              "created_at": "2026-02-18T07:49:02.860Z",
              "updated_at": "2026-02-23T07:49:02.860Z"
          }
      ]
  },
  schema: `
    CREATE TABLE projects (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, description TEXT, status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'on-hold', 'cancelled')), priority TEXT DEFAULT 'medium', progress INTEGER DEFAULT 0, due_date DATE, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE tasks (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), title TEXT NOT NULL, project_name TEXT, assignee TEXT, status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in-progress', 'review', 'done')), priority TEXT DEFAULT 'medium', due_date DATE, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
