import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from './shared/foundation';
import { Navbar } from './shared/foundation';
import { getChassisConfig, type ChassisConfig, type NavItem } from './chassis';
import type { VibeConfig } from './types';

// Theme presets
const THEMES: Record<string, Record<string, string>> = {
  midnight: {
    primary: '99 102 241', secondary: '167 139 250', background: '15 13 26',
    surface: '26 24 48', surfaceAlt: '37 35 64', foreground: '226 232 240',
    muted: '148 163 184', border: '45 43 78', accent: '245 158 11',
  },
  ocean: {
    primary: '8 145 178', secondary: '45 212 191', background: '248 250 252',
    surface: '255 255 255', surfaceAlt: '241 245 249', foreground: '15 23 42',
    muted: '100 116 139', border: '226 232 240', accent: '59 130 246',
  },
  slate: {
    primary: '71 85 105', secondary: '100 116 139', background: '248 250 252',
    surface: '255 255 255', surfaceAlt: '241 245 249', foreground: '15 23 42',
    muted: '100 116 139', border: '226 232 240', accent: '99 102 241',
  },
  coral: {
    primary: '244 63 94', secondary: '251 146 60', background: '255 241 242',
    surface: '255 255 255', surfaceAlt: '254 226 226', foreground: '28 25 23',
    muted: '120 113 108', border: '231 229 228', accent: '244 63 94',
  },
  forest: {
    primary: '5 150 105', secondary: '16 185 129', background: '240 253 244',
    surface: '255 255 255', surfaceAlt: '220 252 231', foreground: '20 83 45',
    muted: '74 124 89', border: '187 247 208', accent: '5 150 105',
  },
  sunset: {
    primary: '217 119 6', secondary: '5 150 105', background: '255 251 240',
    surface: '255 255 255', surfaceAlt: '254 243 199', foreground: '41 37 36',
    muted: '120 113 108', border: '231 229 228', accent: '217 119 6',
  },
};

const TYPOGRAPHY: Record<string, { heading: string; body: string }> = {
  modern: { heading: 'Inter', body: 'Inter' },
  classic: { heading: 'Playfair Display', body: 'Source Sans 3' },
  friendly: { heading: 'Nunito', body: 'Open Sans' },
};

function applyTheme(themeId: string, typoId: string) {
  const colors = THEMES[themeId] ?? THEMES.midnight;
  const typo = TYPOGRAPHY[typoId] ?? TYPOGRAPHY.modern;
  const root = document.documentElement;
  Object.entries(colors).forEach(([k, v]) => root.style.setProperty('--color-' + k, v));
  root.style.setProperty('--font-heading', typo.heading);
  root.style.setProperty('--font-body', typo.body);
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full min-h-[200px]">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [config, setConfig] = useState<VibeConfig | null>(null);
  const [chassis, setChassis] = useState<ChassisConfig | null>(null);
  const [activePage, setActivePage] = useState('/');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetch('/vibe.config.json')
      .then(r => r.json())
      .then((cfg: VibeConfig) => {
        setConfig(cfg);
        applyTheme(cfg.theme ?? 'midnight', cfg.typography ?? 'modern');
        const ch = getChassisConfig(cfg.chassis ?? 'booking');
        setChassis(ch);
        setActivePage(ch.navigation[0]?.path ?? '/');
      })
      .catch(() => {
        const ch = getChassisConfig('booking');
        setChassis(ch);
        applyTheme('midnight', 'modern');
      });
  }, []);

  if (!chassis) return <LoadingSpinner />;

  const ActivePageComponent = chassis.navigation.find(n => n.path === activePage)?.component
    ?? chassis.navigation[0]?.component
    ?? (() => <div>Page not found</div>);

  const navLinks = chassis.navigation.map(n => ({
    label: n.label,
    href: n.path,
    icon: n.icon,
  }));

  return (
    <div className="flex h-screen bg-background text-foreground font-body">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-16'} flex-shrink-0 bg-surface border-r border-border transition-all duration-200 flex flex-col`}
      >
        {/* Brand */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-border">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-sm font-bold">{chassis.icon}</span>
          </div>
          {sidebarOpen && (
            <span className="font-heading font-bold text-foreground truncate">
              {chassis.name}
            </span>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {chassis.navigation.map((item) => {
            const isActive = activePage === item.path;
            return (
              <button
                key={item.path}
                onClick={() => setActivePage(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted hover:text-foreground hover:bg-surface'
                }`}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                {sidebarOpen && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="h-12 flex items-center justify-center border-t border-border text-muted hover:text-foreground transition-colors"
        >
          <svg className={`w-4 h-4 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Suspense fallback={<LoadingSpinner />}>
          <ActivePageComponent />
        </Suspense>
      </main>
    </div>
  );
}
