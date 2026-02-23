import React from 'react';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Categories from './pages/Categories';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const contentMgmtConfig: ChassisConfig = {
  id: 'content-mgmt',
  name: 'Content Manager',
  icon: '✍️',
  description: 'Create and organize content, posts, and media',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/posts', label: 'Posts', icon: '📝', component: Posts },
    { path: '/categories', label: 'Categories', icon: '🏷️', component: Categories },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "posts": [
          {
              "id": "pst-001",
              "title": "10 Tips for Better Productivity",
              "slug": "10-tips-productivity",
              "category": "Productivity",
              "status": "published",
              "author": "Sarah J.",
              "views": 1456,
              "published_at": "2026-02-18T07:49:02.865Z",
              "created_at": "2026-02-13T07:49:02.865Z",
              "updated_at": "2026-02-18T07:49:02.865Z"
          },
          {
              "id": "pst-002",
              "title": "Getting Started with Remote Work",
              "slug": "remote-work-guide",
              "category": "Remote Work",
              "status": "published",
              "author": "Michael C.",
              "views": 892,
              "published_at": "2026-02-13T07:49:02.865Z",
              "created_at": "2026-02-08T07:49:02.865Z",
              "updated_at": "2026-02-13T07:49:02.865Z"
          },
          {
              "id": "pst-003",
              "title": "The Future of AI in Business",
              "slug": "ai-business-future",
              "category": "Technology",
              "status": "draft",
              "author": "Emily R.",
              "views": 0,
              "published_at": null,
              "created_at": "2026-02-21T07:49:02.865Z",
              "updated_at": "2026-02-23T07:49:02.865Z"
          },
          {
              "id": "pst-004",
              "title": "Team Building Activities That Work",
              "slug": "team-building",
              "category": "Management",
              "status": "published",
              "author": "James W.",
              "views": 567,
              "published_at": "2026-02-03T07:49:02.865Z",
              "created_at": "2026-01-29T07:49:02.865Z",
              "updated_at": "2026-02-03T07:49:02.865Z"
          },
          {
              "id": "pst-005",
              "title": "Holiday Marketing Strategies",
              "slug": "holiday-marketing",
              "category": "Marketing",
              "status": "scheduled",
              "author": "Lisa P.",
              "views": 0,
              "published_at": null,
              "created_at": "2026-02-22T07:49:02.865Z",
              "updated_at": "2026-02-23T07:49:02.865Z"
          }
      ],
      "categories": [
          {
              "id": "cat-001",
              "name": "Productivity",
              "slug": "productivity",
              "description": "Tips and tools for getting more done",
              "post_count": 12,
              "created_at": "2025-11-25T07:49:02.865Z",
              "updated_at": "2026-02-18T07:49:02.865Z"
          },
          {
              "id": "cat-002",
              "name": "Technology",
              "slug": "technology",
              "description": "Latest tech trends and insights",
              "post_count": 8,
              "created_at": "2025-11-25T07:49:02.865Z",
              "updated_at": "2026-02-21T07:49:02.865Z"
          },
          {
              "id": "cat-003",
              "name": "Remote Work",
              "slug": "remote-work",
              "description": "Best practices for distributed teams",
              "post_count": 6,
              "created_at": "2025-12-25T07:49:02.865Z",
              "updated_at": "2026-02-13T07:49:02.865Z"
          },
          {
              "id": "cat-004",
              "name": "Marketing",
              "slug": "marketing",
              "description": "Growth strategies and campaigns",
              "post_count": 5,
              "created_at": "2025-12-25T07:49:02.865Z",
              "updated_at": "2026-02-23T07:49:02.865Z"
          },
          {
              "id": "cat-005",
              "name": "Management",
              "slug": "management",
              "description": "Leadership and team management",
              "post_count": 4,
              "created_at": "2026-01-09T07:49:02.865Z",
              "updated_at": "2026-02-03T07:49:02.865Z"
          }
      ]
  },
  schema: `
    CREATE TABLE posts (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), title TEXT NOT NULL, slug TEXT, category TEXT, status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled', 'archived')), author TEXT, views INTEGER DEFAULT 0, published_at TIMESTAMPTZ, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE categories (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, slug TEXT, description TEXT, post_count INTEGER DEFAULT 0, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
