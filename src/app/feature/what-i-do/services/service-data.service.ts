import { Injectable, signal } from '@angular/core';
import { Service } from '../models/service.model';

@Injectable({ providedIn: 'root' })
export class ServiceDataService {

  readonly services = signal<Service[]>([
    {
      id: 'angular',
      number: '01',
      title: 'Angular Development',
      description: 'Building scalable enterprise applications with angular Framework',
      iconColor: '#DD0031',
      featured: true,
      technologies: [
        { name: 'Angular', color: '#DD0031' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'RxJS', color: '#B7178C' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L2 6.5l1.5 12.5L12 22l8.5-3L22 6.5L12 2.5zm0 2.1l7.4 2.9-1.3 10.8L12 19.9l-6.1-1.6L4.6 7.5 12 4.6zm0 2.9L7.5 17h1.9l.9-2.3h3.4l.9 2.3h1.9L12 7.5zm0 2.3l1.3 3.4h-2.6L12 9.8z"/>
      </svg>`,
    },
    {
      id: 'react',
      number: '02',
      title: 'React Development',
      description: 'Creating modern interactive user interfaces',
      iconColor: '#61DAFB',
      featured: true,
      technologies: [
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'JavaScript', color: '#F7DF1E' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.05"/>
        <path d="M12 6.5c-3.5 0-6.5 1.1-6.5 2.5s3 2.5 6.5 2.5 6.5-1.1 6.5-2.5S15.5 6.5 12 6.5zm0 8c-3.5 0-6.5-1.1-6.5-2.5S8.5 9.5 12 9.5s6.5 1.1 6.5 2.5-3 2.5-6.5 2.5z" opacity=".3"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" display="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(120 12 12)"/>
      </svg>`,
    },
    {
      id: 'uiux',
      number: '03',
      title: 'UI/UX Development',
      description: 'Designing clean, responsive and accessible interfaces',
      iconColor: '#7C3AED',
      featured: true,
      technologies: [
        { name: 'HTML', color: '#E34F26' },
        { name: 'SCSS', color: '#CD6799' },
        { name: 'Tailwind', color: '#06B6D4' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h4M7 11h8"/>
      </svg>`,
    },
    {
      id: 'api',
      number: '04',
      title: 'API Integration',
      description: 'Connecting applications with secure and scalable APIs',
      iconColor: '#06B6D4',
      featured: true,
      technologies: [
        { name: 'REST API', color: '#06B6D4' },
        { name: 'GraphQL', color: '#E10098' },
        { name: 'Postman', color: '#FF6C37' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>`,
    },
    {
      id: 'auth',
      number: '05',
      title: 'Authentication & Authorization',
      description: 'Building secure and role-based application access',
      iconColor: '#34D399',
      technologies: [
        { name: 'JWT', color: '#D63AFF' },
        { name: 'OAuth', color: '#F97316' },
        { name: 'Firebase', color: '#FFCA28' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>`,
    },
    {
      id: 'state',
      number: '06',
      title: 'State Management',
      description: 'Managing scalable and predictable application state',
      iconColor: '#8B5CF6',
      technologies: [
        { name: 'Signals', color: '#DD0031' },
        { name: 'RxJS', color: '#B7178C' },
        { name: 'NgRx', color: '#8B5CF6' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>`,
    },
    {
      id: 'responsive',
      number: '07',
      title: 'Responsive Web Development',
      description: 'Creating pixel-perfect experiences across all devices',
      iconColor: '#38BDF8',
      technologies: [
        { name: 'CSS', color: '#1572B6' },
        { name: 'SCSS', color: '#CD6799' },
        { name: 'Bootstrap', color: '#7952B3' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>`,
    },
    {
      id: 'performance',
      number: '08',
      title: 'Performance Optimization',
      description: 'Improving application speed and user experience',
      iconColor: '#F59E0B',
      technologies: [
        { name: 'Lighthouse', color: '#F59E0B' },
        { name: 'Webpack', color: '#8DD6F9' },
        { name: 'Vite', color: '#646CFF' },
      ],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>`,
    },
  ]);
}
