import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Load Tailwind CSS via CDN
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindScript);

// Configure Tailwind to use CSS variables
tailwindScript.onload = () => {
  // @ts-expect-error tailwind global
  if (window.tailwind) {
    // @ts-expect-error tailwind global
    window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: 'rgb(var(--color-primary) / <alpha-value>)',
            secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
            background: 'rgb(var(--color-background) / <alpha-value>)',
            surface: 'rgb(var(--color-surface) / <alpha-value>)',
            foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
            muted: 'rgb(var(--color-muted) / <alpha-value>)',
            border: 'rgb(var(--color-border) / <alpha-value>)',
            accent: 'rgb(var(--color-accent) / <alpha-value>)',
          },
          fontFamily: {
            heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
            body: ['var(--font-body)', 'system-ui', 'sans-serif'],
          },
        },
      },
    };
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
