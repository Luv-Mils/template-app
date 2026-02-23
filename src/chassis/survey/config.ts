import React from 'react';
import Dashboard from './pages/Dashboard';
import Surveys from './pages/Surveys';
import Responses from './pages/Responses';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const surveyConfig: ChassisConfig = {
  id: 'survey',
  name: 'Survey Builder',
  icon: '📋',
  description: 'Create surveys, collect responses, and analyze results',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/surveys', label: 'Surveys', icon: '📋', component: Surveys },
    { path: '/responses', label: 'Responses', icon: '📬', component: Responses },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "surveys": [
          {
              "id": "srv-001",
              "title": "Customer Satisfaction Q1",
              "description": "Quarterly customer feedback survey",
              "status": "closed",
              "questions_count": 12,
              "responses_count": 156,
              "created_at": "2025-11-25T07:49:02.865Z",
              "updated_at": "2026-01-24T07:49:02.865Z"
          },
          {
              "id": "srv-002",
              "title": "Employee Engagement 2026",
              "description": "Annual employee satisfaction survey",
              "status": "active",
              "questions_count": 20,
              "responses_count": 45,
              "created_at": "2026-02-08T07:49:02.865Z",
              "updated_at": "2026-02-23T07:49:02.865Z"
          },
          {
              "id": "srv-003",
              "title": "Product Feature Priorities",
              "description": "Help us decide what to build next",
              "status": "active",
              "questions_count": 8,
              "responses_count": 89,
              "created_at": "2026-02-13T07:49:02.865Z",
              "updated_at": "2026-02-23T07:49:02.866Z"
          },
          {
              "id": "srv-004",
              "title": "Website Redesign Feedback",
              "description": "Tell us what you think of the new design",
              "status": "draft",
              "questions_count": 6,
              "responses_count": 0,
              "created_at": "2026-02-21T07:49:02.866Z",
              "updated_at": "2026-02-23T07:49:02.866Z"
          }
      ],
      "responses": [
          {
              "id": "rsp-001",
              "survey_title": "Employee Engagement 2026",
              "respondent": "Anonymous #1",
              "completion": 100,
              "submitted_at": "2026-02-23T07:49:02.866Z",
              "created_at": "2026-02-23T07:49:02.866Z",
              "updated_at": "2026-02-23T07:49:02.866Z"
          },
          {
              "id": "rsp-002",
              "survey_title": "Product Feature Priorities",
              "respondent": "user@example.com",
              "completion": 100,
              "submitted_at": "2026-02-23T07:49:02.866Z",
              "created_at": "2026-02-23T07:49:02.866Z",
              "updated_at": "2026-02-23T07:49:02.866Z"
          },
          {
              "id": "rsp-003",
              "survey_title": "Employee Engagement 2026",
              "respondent": "Anonymous #2",
              "completion": 75,
              "submitted_at": "2026-02-22T07:49:02.866Z",
              "created_at": "2026-02-22T07:49:02.866Z",
              "updated_at": "2026-02-22T07:49:02.866Z"
          },
          {
              "id": "rsp-004",
              "survey_title": "Product Feature Priorities",
              "respondent": "feedback@company.com",
              "completion": 100,
              "submitted_at": "2026-02-22T07:49:02.866Z",
              "created_at": "2026-02-22T07:49:02.866Z",
              "updated_at": "2026-02-22T07:49:02.866Z"
          },
          {
              "id": "rsp-005",
              "survey_title": "Customer Satisfaction Q1",
              "respondent": "customer@test.com",
              "completion": 100,
              "submitted_at": "2026-01-24T07:49:02.866Z",
              "created_at": "2026-01-24T07:49:02.866Z",
              "updated_at": "2026-01-24T07:49:02.866Z"
          }
      ]
  },
  schema: `
    CREATE TABLE surveys (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), title TEXT NOT NULL, description TEXT, status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'closed', 'archived')), questions_count INTEGER DEFAULT 0, responses_count INTEGER DEFAULT 0, created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE responses (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), survey_title TEXT, respondent TEXT, completion NUMERIC DEFAULT 100, submitted_at TIMESTAMPTZ DEFAULT now(), created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
