import React from 'react';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import type { ChassisConfig } from '../index';

export const inventoryConfig: ChassisConfig = {
  id: 'inventory',
  name: 'Inventory Tracker',
  icon: '📦',
  description: 'Track products, stock levels, and orders',
  navigation: [
    { path: '/', label: 'Dashboard', icon: '📊', component: Dashboard },
    { path: '/products', label: 'Products', icon: '📦', component: Products },
    { path: '/orders', label: 'Orders', icon: '🛒', component: Orders },
    { path: '/settings', label: 'Settings', icon: '⚙️', component: Settings },
  ],
  seedData: {
      "products": [
          {
              "id": "prd-001",
              "name": "Wireless Mouse",
              "sku": "WM-001",
              "category": "Peripherals",
              "price": 29.99,
              "stock": 150,
              "status": "active",
              "created_at": "2025-11-25T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "prd-002",
              "name": "Mechanical Keyboard",
              "sku": "MK-002",
              "category": "Peripherals",
              "price": 89.99,
              "stock": 45,
              "status": "active",
              "created_at": "2025-12-25T07:49:02.863Z",
              "updated_at": "2026-02-20T07:49:02.863Z"
          },
          {
              "id": "prd-003",
              "name": "USB-C Hub",
              "sku": "UH-003",
              "category": "Accessories",
              "price": 49.99,
              "stock": 5,
              "status": "low-stock",
              "created_at": "2026-01-09T07:49:02.863Z",
              "updated_at": "2026-02-22T07:49:02.863Z"
          },
          {
              "id": "prd-004",
              "name": "Monitor Stand",
              "sku": "MS-004",
              "category": "Accessories",
              "price": 39.99,
              "stock": 0,
              "status": "out-of-stock",
              "created_at": "2026-01-24T07:49:02.863Z",
              "updated_at": "2026-02-16T07:49:02.863Z"
          },
          {
              "id": "prd-005",
              "name": "Webcam HD",
              "sku": "WC-005",
              "category": "Peripherals",
              "price": 69.99,
              "stock": 82,
              "status": "active",
              "created_at": "2026-02-03T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          }
      ],
      "orders": [
          {
              "id": "ord-001",
              "order_number": "ORD-1001",
              "customer": "John Smith",
              "items_count": 3,
              "total": 169.97,
              "status": "delivered",
              "created_at": "2026-02-08T07:49:02.863Z",
              "updated_at": "2026-02-18T07:49:02.863Z"
          },
          {
              "id": "ord-002",
              "order_number": "ORD-1002",
              "customer": "Jane Doe",
              "items_count": 1,
              "total": 89.99,
              "status": "shipped",
              "created_at": "2026-02-18T07:49:02.863Z",
              "updated_at": "2026-02-21T07:49:02.863Z"
          },
          {
              "id": "ord-003",
              "order_number": "ORD-1003",
              "customer": "Bob Wilson",
              "items_count": 2,
              "total": 79.98,
              "status": "processing",
              "created_at": "2026-02-22T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          },
          {
              "id": "ord-004",
              "order_number": "ORD-1004",
              "customer": "Alice Brown",
              "items_count": 4,
              "total": 259.96,
              "status": "pending",
              "created_at": "2026-02-23T07:49:02.863Z",
              "updated_at": "2026-02-23T07:49:02.863Z"
          }
      ]
  },
  schema: `
    CREATE TABLE products (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, sku TEXT UNIQUE, category TEXT, price NUMERIC DEFAULT 0, stock INTEGER DEFAULT 0, status TEXT DEFAULT 'active' CHECK (status IN ('active', 'low-stock', 'out-of-stock', 'discontinued')), created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
    CREATE TABLE orders (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), order_number TEXT NOT NULL, customer TEXT, items_count INTEGER DEFAULT 1, total NUMERIC DEFAULT 0, status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')), created_at TIMESTAMPTZ DEFAULT now(), updated_at TIMESTAMPTZ DEFAULT now());
  `,
};
