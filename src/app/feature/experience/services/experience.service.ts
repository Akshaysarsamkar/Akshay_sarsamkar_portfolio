import { Injectable, signal } from '@angular/core';
import { Experience, TechnologyItem } from '../models/experience.model';

// ── Technology SVGs ─────────────────────────────────────────────────────────

const TECH_ICONS: Record<string, TechnologyItem> = {
  React: {
    name: 'React',
    color: '#61DAFB',
    iconSvg: `<svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  },
  Angular: {
    name: 'Angular',
    color: '#DD0031',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 5.5l1.5 12.5L12 22l8.5-4L22 5.5 12 2z" fill="#DD0031"/><path d="M12 2v20l8.5-4L22 5.5 12 2z" fill="#C3002F"/><path d="M12 4.5l-5 11.5h2.1l1-2.5h3.8l1 2.5H17L12 4.5zm1.2 7.2h-2.4L12 8.8l1.2 2.9z" fill="#fff"/></svg>`,
  },
  TypeScript: {
    name: 'TypeScript',
    color: '#3178C6',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M5 9h6v2.2H8.8v7.8H6.8v-7.8H5V9zm8.5 4.5c.7-.4 1.5-.7 2.4-.7 1.4 0 2.3.8 2.3 2.1 0 1.2-.8 2-2.3 2.6-1.1.4-1.7.8-1.7 1.5 0 .6.5 1 1.4 1 .8 0 1.6-.3 2.2-.8l.7 1.4c-.8.7-1.8 1-3 1-2.1 0-3.3-1.2-3.3-2.8 0-1.4.9-2.3 2.6-2.9 1-.4 1.5-.8 1.5-1.4 0-.5-.4-.9-1.2-.9-.7 0-1.4.3-1.9.7l-.7-1.3z" fill="#fff"/></svg>`,
  },
  Redux: {
    name: 'Redux',
    color: '#764ABC',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#764ABC"/><path d="M12 6.5a2 2 0 100 4 2 2 0 000-4zm-4.5 7a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4zm-4.5-2a2 2 0 100 4 2 2 0 000-4z" fill="#fff"/></svg>`,
  },
  RxJS: {
    name: 'RxJS',
    color: '#D80095',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#D80095"/><path d="M7 8.5h3.8c1.3 0 2.2.8 2.2 2 0 .8-.5 1.5-1.3 1.8l1.5 3.2h-2.1l-1.3-2.8H8.8v2.8H7V8.5zm1.8 1.6v2.1h1.9c.4 0 .7-.3.7-.7v-.7c0-.4-.3-.7-.7-.7H8.8zm6.5-1.6l1.7 3.2L18.7 8.5h2.2l-2.7 4.1 2.8 4h-2.3l-1.8-2.9-1.8 2.9h-2.3l2.8-4-2.6-4.1h2.2z" fill="#fff"/></svg>`,
  },
  SCSS: {
    name: 'SCSS',
    color: '#CF649A',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#CF649A"/><path d="M12 5c-3.9 0-7 2.2-7 5 0 2.5 2.5 4.5 5.5 4.9-1.2.7-2 1.8-2 3.1 0 2.2 2.5 4 5.5 4s5.5-1.8 5.5-4c0-2-1.9-3.5-4.5-3.9 1.5-.7 2.5-1.8 2.5-3.1 0-2.8-3.1-5-7-5zm0 1.8c2.8 0 5 1.4 5 3.2 0 1.5-1.6 2.7-3.8 3.1-1.3-.3-2.5-.8-3.4-1.5-.5-.4-.8-.9-.8-1.6 0-1.8 2.2-3.2 5-3.2zm0 8.2c2.2 0 4 1.2 4 2.8 0 1.5-1.8 2.8-4 2.8s-4-1.2-4-2.8c0-1.1.9-2.1 2.3-2.5 1 .3 2.1.5 3.3.5-.6-.3-1.1-.5-1.6-.8z" fill="#fff"/></svg>`,
  },
  Git: {
    name: 'Git',
    color: '#F05032',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.7 10.7L13.3 1.3c-.6-.6-1.5-.6-2.1 0L9 3.5l2.6 2.6c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.4 1.8l2.5 2.5c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.3-.4-1.9l-2.4-2.4V16c.3.2.5.4.6.7.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.7-.7-.7-1.8 0-2.5.3-.3.7-.5 1.1-.6v-5.4c-.4-.1-.8-.3-1.1-.6-.5-.5-.7-1.3-.4-1.9L7.8 5.6 1.3 12c-.6.6-.6 1.5 0 2.1l9.4 9.4c.6.6 1.5.6 2.1 0l9.9-9.9c.6-.6.6-1.5 0-2.9z" fill="#F05032"/></svg>`,
  },
  JavaScript: {
    name: 'JavaScript',
    color: '#F7DF1E',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M6.3 18.5c.4.6 1.1 1.1 2.1 1.1 1.2 0 1.9-.6 1.9-1.7V11H8.6v6.5c0 .4-.2.7-.6.7-.4 0-.6-.3-.9-.6l-.8.9zm5.3-.3c.5.8 1.3 1.4 2.6 1.4 1.5 0 2.5-.7 2.5-2 0-1.2-.6-1.7-1.9-2.3l-.4-.2c-.6-.3-.9-.5-.9-.8 0-.4.3-.6.7-.6.4 0 .8.2 1 .6l1-.7c-.4-.8-1.2-1.2-2-1.2-1.3 0-2.1.7-2.1 1.8 0 1.1.6 1.6 1.8 2.1l.4.2c.6.3 1 .5 1 1 0 .5-.4.7-.9.7-.6 0-1-.3-1.3-.8l-1.5.8z" fill="#000"/></svg>`,
  },
  HTML: {
    name: 'HTML',
    color: '#E34F26',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21l-2-18h19l-2 18-7.5 2.5L3.5 21z" fill="#E34F26"/><path d="M12 21.3l6.5-2.2 1.7-15.6H12v17.8z" fill="#EF652A"/><path d="M12 7.7H7.7l.3 3.4h4V7.7zm0 6.6H9.7l-.2-2.3H7.2l.4 4.5 4.4 1.2v-3.4zm0-6.6v3.4h4.4l-.4 4.5-4 1.1v3.4l6.5-1.8.8-9.2L12 7.7h-.3l.3-1.4z" fill="#fff"/></svg>`,
  },
  CSS: {
    name: 'CSS',
    color: '#1572B6',
    iconSvg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21l-2-18h19l-2 18-7.5 2.5L3.5 21z" fill="#1572B6"/><path d="M12 21.3l6.5-2.2 1.7-15.6H12v17.8z" fill="#33A9DC"/><path d="M12 7.7H7.7l.3 3.4h4V7.7zm0 6.6H9.7l-.2-2.3H7.2l.4 4.5 4.4 1.2v-3.4zm0-6.6v3.4h4.4l-.4 4.5-4 1.1v3.4l6.5-1.8.8-9.2L12 7.7h-.3l.3-1.4z" fill="#fff"/></svg>`,
  },
};

// ── Company Logo SVGs ────────────────────────────────────────────────────────

const HARE_AND_TURTLE_LOGO = `<svg viewBox="0 0 56 56" width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ht-grad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="50%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <linearGradient id="ht-accent" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#065F46"/>
    </linearGradient>
  </defs>
  <rect width="56" height="56" rx="14" fill="url(#ht-grad)"/>
  <circle cx="28" cy="28" r="19" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <!-- Stylized H&T Monogram with AI nodes -->
  <path d="M17 19v18m11-18v18m-11-9h11" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33 19h10m-5 0v18" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  <circle cx="39" cy="35" r="2.5" fill="#A7F3D0"/>
</svg>`;

const RABBIT_AND_TURTLE_LOGO = `<svg viewBox="0 0 56 56" width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rt-grad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="50%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#3730A3"/>
    </linearGradient>
  </defs>
  <rect width="56" height="56" rx="14" fill="url(#rt-grad)"/>
  <circle cx="28" cy="28" r="19" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <!-- Stylized R&T Typography with Tech Nodes -->
  <path d="M16 37V19h7a4.5 4.5 0 0 1 4.5 4.5v0A4.5 4.5 0 0 1 23 28h-7m5 0l6.5 9" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32 19h10m-5 0v18" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  <circle cx="37" cy="37" r="2.5" fill="#C7D2FE"/>
</svg>`;

const TCS_LOGO = `<svg viewBox="0 0 56 56" width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tcs-grad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="50%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
  </defs>
  <rect width="56" height="56" rx="14" fill="url(#tcs-grad)"/>
  <!-- TCS Typography -->
  <text x="28" y="34" font-family="'Inter', -apple-system, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.5">tcs</text>
  <circle cx="28" cy="41" r="1.8" fill="#60A5FA"/>
  <path d="M16 17c3.5-1.5 8-2 12-2s8.5.5 12 2" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly _experiences = signal<Experience[]>([
    {
      id: 'hare-and-turtle',
      company: 'Hare & Turtle AI Solutions Pvt Ltd',
      companyShort: 'HNT',
      role: 'Jr. React Developer',
      location: 'Pune, India',
      period: 'Jan 2026 – Present',
      duration: 'Present',
      dateRangeDisplay: '2026 – Present',
      description:
        'Working on enterprise web applications, AI-powered solutions and modern frontend architectures using React, Angular, TypeScript, Redux, SCSS and modern web technologies.',
      technologies: [
        TECH_ICONS['React'],
        TECH_ICONS['Angular'],
        TECH_ICONS['TypeScript'],
        TECH_ICONS['Redux'],
        TECH_ICONS['JavaScript'],
        TECH_ICONS['SCSS'],
        TECH_ICONS['Git'],
      ],
      current: true,
      logoBgLight: '#ECFDF5',
      logoBgDark: '#064E3B',
      logoSvg: HARE_AND_TURTLE_LOGO,
    },
    {
      id: 'RNT',
      company: 'Rabbit & Turtle Technology Solutions',
      companyShort: 'RNT',
      role: 'React Developer (Intern)',
      location: 'Pune, India',
      period: 'Jul 2025 – Dec 2025',
      duration: '6 months',
      dateRangeDisplay: '2025',
      description:
        'Developed and maintained web applications for clients, worked on reusable UI components, performance optimization and responsive web experiences using React and Angular.',
      technologies: [
        TECH_ICONS['React'],
        TECH_ICONS['Angular'],
        TECH_ICONS['JavaScript'],
        TECH_ICONS['HTML'],
        TECH_ICONS['SCSS'],
        TECH_ICONS['Git'],
      ],
      current: false,
      logoBgLight: '#EEF2FF',
      logoBgDark: '#1E1B4B',
      logoSvg: RABBIT_AND_TURTLE_LOGO,
    },
  ]);

  readonly experiences = this._experiences.asReadonly();
}
