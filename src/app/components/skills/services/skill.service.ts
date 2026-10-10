import { Injectable } from '@angular/core';

export type SkillCategory = 'all' | 'frontend' | 'styling' | 'tools' | 'backend' | 'data';

export interface ProficiencyItem {
  name: string;
  value: number;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  cardSubtitle: string;
  subtitle: string;
  description: string;
  exploreText?: string;
  docsUrl: string;
  imageDark?: string;
  imageLight?: string;
  proficiency: number;
  experience: string;
  color: string;
  features: string[];
  proficiencyBars: ProficiencyItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private readonly skills: Skill[] = [
    // 1. Angular
    {
      id: 'angular',
      name: 'Angular',
      category: 'frontend',
      color: '#dd0031',
      cardSubtitle: 'Build. Scale. Maintain.',
      subtitle: 'Build. Learn. Grow.',
      description: 'I use Angular to build scalable, maintainable and high-performance web applications with modern features and best practices.',
      exploreText: 'Explore Angular →',
      docsUrl: 'https://angular.dev',
      imageDark: '/assets/skills/angular-dark.png',
      imageLight: '/assets/skills/angular-light.png',
      proficiency: 90,
      experience: '1.5+ Years',
      features: [
        'Standalone Components',
        'Signals (Angular 16+)',
        'Reactive Forms',
        'Routing & Navigation',
        'HTTP & Interceptors',
        'Guards & Authentication',
        'Lazy Loading',
        'State Management (RxJS)'
      ],
      proficiencyBars: [
        { name: 'Angular', value: 90, color: '#f43f5e' },
        { name: 'TypeScript', value: 85, color: '#38bdf8' },
        { name: 'RxJS', value: 80, color: '#06b6d4' },
        { name: 'SCSS', value: 85, color: '#ec4899' }
      ],
      icon: `<svg viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/><polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F"/><polygon points="125,52.1 66.8,182.6 90.6,182.6 102.3,153.4 125,153.4 147.7,153.4 159.4,182.6 183.2,182.6" fill="#F2F2F2"/><polygon points="125,93.5 111.4,126.7 125,126.7 138.6,126.7" fill="#FFFFFF"/><polygon points="125,52.1 125,93.5 125,126.7 125,153.4 147.7,153.4 159.4,182.6 183.2,182.6" fill="#EFEFEF"/></svg>`
    },
    // 2. React
    {
      id: 'react',
      name: 'React',
      category: 'frontend',
      color: '#61dafb',
      cardSubtitle: 'Modern UI Development',
      subtitle: 'Declarative & Component-Driven',
      description: 'Building reactive and interactive single-page web applications with React components, custom hooks, and modern frontend ecosystems.',
      exploreText: 'Explore React →',
      docsUrl: 'https://react.dev',
      imageDark: '/assets/skills/dark-react.png',
      imageLight: '/assets/skills/light-react.png',
      proficiency: 85,
      experience: '1+ Years',
      features: [
        'Functional Components',
        'React Hooks (State & Effects)',
        'React Query Data Fetching',
        'Context API & State',
        'Reusable Architecture',
        'Virtual DOM Performance',
        'Client Routing',
        'REST & GraphQL APIs'
      ],
      proficiencyBars: [
        { name: 'React', value: 85, color: '#06b6d4' },
        { name: 'JavaScript', value: 90, color: '#f59e0b' },
        { name: 'HTML / CSS', value: 92, color: '#38bdf8' },
        { name: 'SCSS / Styling', value: 88, color: '#ec4899' }
      ],
      icon: `<svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`
    },
    // 3. TypeScript
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend',
      color: '#3178c6',
      cardSubtitle: 'Type Safe Code',
      subtitle: 'Typed JavaScript at Any Scale',
      description: 'Writing safe, scalable, and self-documenting code with TypeScript type systems, interfaces, generics, and strict compile-time checks.',
      exploreText: 'Explore TypeScript →',
      docsUrl: 'https://www.typescriptlang.org',
      imageDark: '/assets/skills/ts-dark.png',
      imageLight: '/assets/skills/ts-light.png',
      proficiency: 88,
      experience: '1.5+ Years',
      features: [
        'Interfaces & Types',
        'Generics & Constraints',
        'Union & Intersections',
        'Utility Types (Pick, Omit)',
        'Type Guards & Narrowing',
        'Enums & Literals',
        'Strict Null Checking',
        'Advanced Decorators'
      ],
      proficiencyBars: [
        { name: 'TypeScript', value: 88, color: '#38bdf8' },
        { name: 'JavaScript', value: 90, color: '#f59e0b' },
        { name: 'OOP Architecture', value: 85, color: '#10b981' },
        { name: 'Type Safety', value: 92, color: '#8b5cf6' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#3178C6"/><path d="M38 48h40v12H64v44H50V60H38V48zm47.2 26.6c4-2.8 9.5-4.6 15.6-4.6 10.4 0 16.8 5.6 16.8 14.8 0 9.8-6.8 15.6-17.6 15.6-7.8 0-14.2-2.8-18.4-6.4l6.4-9.2c3 2.6 7.4 4.6 12 4.6 4.4 0 7.2-2 7.2-5.4 0-3.2-2.4-4.8-7.6-6.6-8.6-3-12.8-6.6-12.8-14 0-8.6 6.6-14.8 16.4-14.8 6.4 0 12.2 2.2 16 5.2l-5.6 9.4c-2.8-2-6.4-3.6-10.4-3.6-4 0-6.4 1.8-6.4 4.4 0 2.8 2.2 4.2 7.8 6.2 8.4 2.8 12.8 6.6 12.8 14.4 0 9.2-7.4 15.4-18.2 15.4-8 0-14.8-3-19.4-7.4l6.4-9.6z" fill="#FFFFFF"/></svg>`
    },
    // 4. JavaScript
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'frontend',
      color: '#f7df1e',
      cardSubtitle: 'Dynamic Web',
      subtitle: 'Core Engine of the Web',
      description: 'Mastering modern ECMAScript features, async workflows, event-driven DOM architecture, and high-performance browser execution.',
      exploreText: 'Explore JavaScript →',
      docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      imageDark: '/assets/skills/dark-js.png',
      imageLight: '/assets/skills/light-js.png',
      proficiency: 90,
      experience: '2+ Years',
      features: [
        'ES6+ Modern Syntax',
        'Promises & Async/Await',
        'Event Loop Concurrency',
        'DOM Manipulation & Events',
        'Closures & Scopes',
        'Web APIs (Fetch, Storage)',
        'Functional Paradigms',
        'Modern Modular ESM'
      ],
      proficiencyBars: [
        { name: 'JavaScript', value: 90, color: '#f59e0b' },
        { name: 'DOM APIs', value: 92, color: '#38bdf8' },
        { name: 'Async / Await', value: 88, color: '#10b981' },
        { name: 'ES6+ Syntax', value: 94, color: '#f97316' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#F7DF1E"/><path d="M34 84.4l11.4-6.9c2.3 4.1 4.5 7.6 9.3 7.6 4.8 0 7.8-1.9 7.8-9.1V40.2h14v35.8c0 14.7-8.6 21.2-21.5 21.2-11.7 0-18.2-6.1-21-12.8zm45.8-1.6l11.2-6.5c3.1 5 7.2 8.7 13.5 8.7 5.7 0 9.4-2.8 9.4-6.8 0-4.7-3.8-6.4-12.5-10.1-12.5-5.4-16.5-12.1-16.5-20.7 0-11.2 8.6-19.8 22-19.8 9.6 0 16.5 3.5 21.2 11.9l-10.7 6.9c-2.4-4.3-5.2-6.2-10.5-6.2-4.5 0-7.6 2.6-7.6 6 0 4.2 3.2 5.9 11.2 9.4 13.7 5.9 17.8 12.4 17.8 21.6 0 12.4-9.7 20.6-23.7 20.6-13.2 0-20.9-6.4-24.3-15z" fill="#000000"/></svg>`
    },
    // 5. HTML
    {
      id: 'html',
      name: 'HTML',
      category: 'styling',
      color: '#e44d26',
      cardSubtitle: 'Semantic Markup',
      subtitle: 'Foundation of the Modern Web',
      description: 'Crafting clean, accessible, semantic web structures with optimal search engine visibility and W3C web standard compliance.',
      exploreText: 'Explore HTML5 →',
      docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      imageDark: '/assets/skills/html-dark.png',
      imageLight: '/assets/skills/html-light.png',
      proficiency: 95,
      experience: '2+ Years',
      features: [
        'Semantic HTML5 Elements',
        'Accessibility (ARIA Standards)',
        'Modern Forms & Validation',
        'SEO Friendly Structure',
        'Responsive Meta & Viewport',
        'Clean DOM Hierarchy',
        'Media & Canvas Tags',
        'Web Performance Standards'
      ],
      proficiencyBars: [
        { name: 'HTML5', value: 95, color: '#f97316' },
        { name: 'Accessibility (a11y)', value: 88, color: '#38bdf8' },
        { name: 'SEO Architecture', value: 86, color: '#10b981' },
        { name: 'Semantic Layouts', value: 95, color: '#8b5cf6' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 116.8l-11-96.8h112l-11 96.8-45 12.4-45-12.4z" fill="#E44D26"/><path d="M64 120.3l37.2-10.3 9.4-82.8H64v93.1z" fill="#F16529"/><path d="M64 51.5H45.7l-1.3-14.4H64V24.5H31.1l3.8 42.4H64v-15.4zm0 32.5l-.2.1-15.3-4.1-1-11.2H34.4l1.9 21.6 27.7 7.7V84z" fill="#EBEBEB"/><path d="M64 51.5v15.4h17.1l-1.6 17.9-15.5 4.2v14.1l27.8-7.7 3.5-39.8H64zm0-27v12.6h33.4l1.1-12.6H64z" fill="#FFFFFF"/></svg>`
    },
    // 6. CSS
    {
      id: 'css',
      name: 'CSS',
      category: 'styling',
      color: '#1572b6',
      cardSubtitle: 'Modern Styling',
      subtitle: 'Visual Styling & Layouts',
      description: 'Designing pixel-perfect, responsive layouts with CSS Grid, Flexbox, glassmorphic surfaces, keyframe animations, and custom styling.',
      exploreText: 'Explore CSS3 →',
      docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      imageDark: '/assets/skills/css-dark.png',
      imageLight: '/assets/skills/css-light.png',
      proficiency: 90,
      experience: '2+ Years',
      features: [
        'CSS Grid & Flexbox Engines',
        'Fluid Responsive Breakpoints',
        'Keyframe Animations',
        'Glassmorphism & Shadows',
        'Mobile-First Layouts',
        'Modern Pseudo-Classes',
        'CSS Custom Properties',
        'Cross-Browser Consistency'
      ],
      proficiencyBars: [
        { name: 'CSS3', value: 90, color: '#38bdf8' },
        { name: 'Flexbox & Grid', value: 95, color: '#06b6d4' },
        { name: 'Animations', value: 85, color: '#ec4899' },
        { name: 'Responsive Design', value: 92, color: '#10b981' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 116.8l-11-96.8h112l-11 96.8-45 12.4-45-12.4z" fill="#1572B6"/><path d="M64 120.3l37.2-10.3 9.4-82.8H64v93.1z" fill="#33A9DC"/><path d="M64 51.5H45.7l-1.3-14.4H64V24.5H31.1l3.8 42.4H64v-15.4zm0 32.5l-.2.1-15.3-4.1-1-11.2H34.4l1.9 21.6 27.7 7.7V84z" fill="#EBEBEB"/><path d="M64 51.5v15.4h17.1l-1.6 17.9-15.5 4.2v14.1l27.8-7.7 3.5-39.8H64zm0-27v12.6h33.4l1.1-12.6H64z" fill="#FFFFFF"/></svg>`
    },
    // 7. SCSS
    {
      id: 'scss',
      name: 'SCSS',
      category: 'styling',
      color: '#cf649a',
      cardSubtitle: 'Advanced Styling',
      subtitle: 'Modular & Maintainable Sass',
      description: 'Architecting scalable style systems using modern Sass modules (@use / @forward), variables, mixins, and strict BEM naming.',
      exploreText: 'Explore SCSS →',
      docsUrl: 'https://sass-lang.com',
      imageDark: '/assets/skills/scss-light.png',
      imageLight: '/assets/skills/scss-light.png',
      proficiency: 90,
      experience: '1.5+ Years',
      features: [
        'Sass Module System (@use)',
        'Mixins & Functions',
        'BEM Naming Methodology',
        '7-1 Architecture Pattern',
        'Color Maps & Token Systems',
        'Nested CSS Scoping',
        'Responsive Breakpoint Mixins',
        'Clean CSS Compilation'
      ],
      proficiencyBars: [
        { name: 'SCSS', value: 90, color: '#ec4899' },
        { name: 'BEM Methodology', value: 92, color: '#38bdf8' },
        { name: 'Mixins & Functions', value: 88, color: '#8b5cf6' },
        { name: 'Architecture Systems', value: 90, color: '#10b981' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#CF649A"/><path d="M64 24C41.9 24 24 41.9 24 64s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm22.4 49.3c-1.3 4.5-4.4 8.2-8.8 10.3-4.5 2.1-9.9 2.1-14.7.2-2.9-1.2-5.4-3.1-7.1-5.6l5.8-4.6c1.2 1.7 2.9 3 4.8 3.8 2.8 1.1 5.9 1 8.5-.2 2.5-1.2 4.2-3.3 4.9-5.9.8-3.1-.1-6.4-2.4-8.7-2.6-2.6-6.3-4.1-10.5-5.3-4.5-1.3-8.8-3.1-12.4-6-3.8-3.1-5.8-7.8-5.4-12.7.5-5.2 3.4-9.9 7.9-12.5 4.7-2.7 10.4-3.1 15.5-1.1 3.5 1.4 6.5 3.9 8.5 7.1l-6.1 4.7c-1.4-2.1-3.4-3.7-5.8-4.5-3.3-1.1-6.9-.8-9.9.9-2.7 1.5-4.4 4.2-4.6 7.3-.2 3.2 1.3 6.2 3.9 8.1 2.8 2 6.3 3.3 10.2 4.4 4.9 1.4 9.4 3.4 13 6.6 3.6 3.2 5.5 8 4.7 13z" fill="#FFFFFF"/></svg>`
    },
    // 8. Git
    {
      id: 'git',
      name: 'Git',
      category: 'tools',
      color: '#f05032',
      cardSubtitle: 'Version Control',
      subtitle: 'Collaboration & Version Control',
      description: 'Managing code repositories, branching workflows, pull request reviews, and collaborative development across distributed teams.',
      exploreText: 'Explore Git →',
      docsUrl: 'https://git-scm.com',
      imageDark: '/assets/skills/git-dark.png',
      imageLight: '/assets/skills/git-light.png',
      proficiency: 85,
      experience: '2+ Years',
      features: [
        'Git Flow & Branching',
        'Pull Requests & Reviews',
        'Merge Conflict Resolution',
        'Interactive Rebasing',
        'Commit History Management',
        'Tagging & Releases',
        'GitHub Workflows',
        'CI/CD Pipelines'
      ],
      proficiencyBars: [
        { name: 'Git', value: 85, color: '#f97316' },
        { name: 'GitHub Workflows', value: 88, color: '#38bdf8' },
        { name: 'Branch Management', value: 90, color: '#10b981' },
        { name: 'Merge & Rebase', value: 84, color: '#8b5cf6' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125.7 57.6L70.4 2.3c-3.1-3.1-8.1-3.1-11.1 0L44.8 16.8l14.1 14.1c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.5 6.6 2.3 9.9l13.6 13.6c3.3-1.1 7.2-.4 9.9 2.3 3.8 3.8 3.8 9.9 0 13.7s-9.9 3.8-13.7 0c-2.8-2.8-3.5-6.9-2-10.2L66.3 49.9v28.8c.8.4 1.5.9 2.1 1.5 3.8 3.8 3.8 9.9 0 13.7s-9.9 3.8-13.7 0c-3.8-3.8-3.8-9.9 0-13.7.8-.8 1.8-1.4 2.8-1.8V49.1c-1-.4-2-.9-2.8-1.8-2.8-2.8-3.5-6.9-2-10.2L38.4 22.9 2.3 59c-3.1 3.1-3.1 8.1 0 11.1l55.3 55.3c3.1 3.1 8.1 3.1 11.1 0l57-56.7c3.1-3.1 3.1-8.1 0-11.1z" fill="#F05032"/></svg>`
    },
    // 9. Java
    {
      id: 'java',
      name: 'Java',
      category: 'backend',
      color: '#ea2d2e',
      cardSubtitle: 'Backend Basics',
      subtitle: 'Object-Oriented Backend Foundation',
      description: 'Implementing clean Object-Oriented principles, collections, data structures, and backend API engineering for robust services.',
      exploreText: 'Explore Java →',
      docsUrl: 'https://dev.java',
      imageDark: '/assets/skills/java-dark.png',
      imageLight: '/assets/skills/java-light.png',
      proficiency: 78,
      experience: '1+ Years',
      features: [
        'Object-Oriented Principles',
        'Java Collections Framework',
        'Exception Handling Systems',
        'Multithreading Basics',
        'REST API Fundamentals',
        'Clean Code Architecture',
        'Unit Testing with JUnit',
        'Maven Dependencies'
      ],
      proficiencyBars: [
        { name: 'Java', value: 78, color: '#ef4444' },
        { name: 'OOP Principles', value: 85, color: '#38bdf8' },
        { name: 'Collections', value: 80, color: '#10b981' },
        { name: 'Backend Basics', value: 78, color: '#f59e0b' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.4 96.6s-5.6 3.2 3.9 4.3c11.6 1.3 17.6 1.2 30.5-1.5 0 0 4.3 2.7 9.8 4.9-38.3 15.9-63.5-4.1-44.2-7.7zm-4.7-14.8s-6.3 4.2 3.3 5.4c12.4 1.6 23.3 1.7 41.5-2.2 0 0 2.9 3 7.6 4.3-39.7 12-68.5-4.3-52.4-7.5zm25.9-27.4c5.5 6.4-1.4 12.3-1.4 12.3s14-7.2 7.5-16.1c-6-8.3-10.6-12.4 14.3-27.1-23.7 7.7-27.8 22.5-20.4 30.9zm27.6 22.2c1.7 5.7-9.5 9.8-17.7 11.5 13.4 1.7 26.6-.4 26.6-.4s-3.5 4.5-9.6 5.8c18.5-3.3 22.8-13.2 12.7-17.1-4.7-1.8-8.8-1.2-12-.2.1.1 0 .3 0 .4zm-22.1-46.7c10.4 12.4-10.6 22.2-2.1 35.8-11.2-12.8 1.4-23.2-6.5-30.8-6.1-5.9-10.5-7.7-18.4-10.6 24.3-2.6 21 2.3 27 5.6zM96.7 110.8c-28.5 7.3-64.8 4-68.5-.7 6.4-3.1 16.3-1.8 16.3-1.8s-13.4-6.3-27.4 1.3c15.2 6.6 54.3 6.9 83.2-1.9 4-1.2 2.3-4.3-3.6 3.1z" fill="#EA2D2E"/></svg>`
    },
    // 10. MySQL
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'backend',
      color: '#00758f',
      cardSubtitle: 'Database',
      subtitle: 'Relational Database Management',
      description: 'Designing relational databases, writing performant SQL queries, normalization, indexing, and maintaining ACID transaction integrity.',
      exploreText: 'Explore MySQL →',
      docsUrl: 'https://www.mysql.com',
      imageDark: '/assets/skills/mysql-dark.png',
      imageLight: '/assets/skills/mysql-light.png',
      proficiency: 80,
      experience: '1+ Years',
      features: [
        'Relational Schema Design',
        'Complex Joins & Subqueries',
        'Foreign Key Relations',
        'Indexing & Optimization',
        'ACID Transactions',
        'Database Normalization',
        'Stored Procedures',
        'Data Integrity Rules'
      ],
      proficiencyBars: [
        { name: 'MySQL', value: 80, color: '#0284c7' },
        { name: 'SQL Queries', value: 85, color: '#38bdf8' },
        { name: 'Schema Design', value: 82, color: '#10b981' },
        { name: 'Indexing', value: 76, color: '#f59e0b' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M117 76.5c-4.2-1.5-12.8-2.6-21.2.6-8.3 3.1-13.2 10.3-21.6 12.4-7.7 1.9-15.6-.2-21.4-5.2-1.9-1.6-4.5-2.6-7-2.6-4 0-7.7 2.4-9.3 6.1-.7 1.7-.8 3.5-.5 5.3.7 3.5 3.3 6.3 6.7 7.3 6.2 1.8 13.2 1 19.3-2.1 7.2-3.7 13.1-9.9 20.9-12.4 8.7-2.8 17.5-1.5 25.4 3.7 3 2 6.6 2.4 10 .9l-1.3-14zM42.2 46.8c3.2-8.5 9.7-15.6 18.2-19.3 8.3-3.6 17.8-3.4 26 0 14.8 6.1 23.3 21.6 20.8 37.3l9.8 4.2c3.5-19.7-6.8-39.2-25.2-46.7-10.3-4.2-22.1-4.4-32.5-.1-10.6 4.4-18.9 13.1-22.8 23.8l5.7.8z" fill="#00758F"/><path d="M57.6 62.1c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12 12 5.4 12 12z" fill="#F29111"/></svg>`
    },
    // 11. AgGrid
    {
      id: 'aggrid',
      name: 'AgGrid',
      category: 'data',
      color: '#0096e6',
      cardSubtitle: 'Data Grids',
      subtitle: 'Enterprise Data Tables',
      description: 'Configuring high-performance enterprise data grids with virtualization, custom cell renderers, sorting, and dynamic filtering.',
      exploreText: 'Explore AG Grid →',
      docsUrl: 'https://www.ag-grid.com',
      proficiency: 85,
      experience: '1+ Years',
      features: [
        'Column Definitions & Widths',
        'Multi-Column Sorting',
        'Custom Angular Cell Renderers',
        'Client & Server Pagination',
        'Row Selection & Batching',
        'DOM Virtualization Engine',
        'Export to CSV / Excel',
        'Theme Customization'
      ],
      proficiencyBars: [
        { name: 'AG Grid', value: 85, color: '#0284c7' },
        { name: 'Custom Renderers', value: 88, color: '#3b82f6' },
        { name: 'Virtualization', value: 85, color: '#10b981' },
        { name: 'Grid Configuration', value: 90, color: '#8b5cf6' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#0096E6"/><rect x="24" y="24" width="36" height="36" rx="6" fill="#FFFFFF"/><rect x="68" y="24" width="36" height="36" rx="6" fill="#FFFFFF" fill-opacity="0.85"/><rect x="24" y="68" width="36" height="36" rx="6" fill="#FFFFFF" fill-opacity="0.85"/><rect x="68" y="68" width="36" height="36" rx="6" fill="#FFFFFF" fill-opacity="0.5"/></svg>`
    },
    // 12. Chart.js
    {
      id: 'chartjs',
      name: 'Chart.js',
      category: 'data',
      color: '#ff6384',
      cardSubtitle: 'Data Visualization',
      subtitle: 'Interactive Visual Analytics',
      description: 'Transforming complex datasets into visual dashboards with animated, interactive, and responsive canvas charts.',
      exploreText: 'Explore Chart.js →',
      docsUrl: 'https://www.chartjs.org',
      proficiency: 82,
      experience: '1+ Years',
      features: [
        'Line, Bar & Area Charts',
        'Doughnut & Pie Charts',
        'Real-Time Data Streams',
        'Responsive Canvas Engine',
        'Custom Tooltips & Legends',
        'Multi-Axis Datasets',
        'Animated Transitions',
        'Performance Tuning'
      ],
      proficiencyBars: [
        { name: 'Chart.js', value: 82, color: '#f43f5e' },
        { name: 'Data Visualization', value: 86, color: '#3b82f6' },
        { name: 'Canvas API', value: 80, color: '#10b981' },
        { name: 'Dashboard Design', value: 85, color: '#8b5cf6' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="50" stroke="#FF6384" stroke-width="14" stroke-dasharray="190 314" stroke-linecap="round"/><circle cx="64" cy="64" r="50" stroke="#36A2EB" stroke-width="14" stroke-dasharray="80 314" stroke-dashoffset="-200" stroke-linecap="round"/><circle cx="64" cy="64" r="28" fill="#FF6384" fill-opacity="0.2"/><circle cx="64" cy="64" r="14" fill="#FF6384"/></svg>`
    },
    // 13. RxJS
    {
      id: 'rxjs',
      name: 'RxJS',
      category: 'tools',
      color: '#d80095',
      cardSubtitle: 'Reactive Programming',
      subtitle: 'Reactive Asynchronous Streams',
      description: 'Orchestrating asynchronous operations with reactive observable pipelines, operators, event debounce management, and subject multicasting.',
      exploreText: 'Explore RxJS →',
      docsUrl: 'https://rxjs.dev',
      proficiency: 86,
      experience: '1.5+ Years',
      features: [
        'Observables & Observers',
        'Pipable Operators',
        'Subjects & BehaviorSubjects',
        'Event Streams & Debounce',
        'Error Handling & Retry',
        'Memory Leak Prevention',
        'Async Composition',
        'State Management'
      ],
      proficiencyBars: [
        { name: 'RxJS', value: 86, color: '#d946ef' },
        { name: 'Pipable Operators', value: 88, color: '#3b82f6' },
        { name: 'State Streams', value: 85, color: '#10b981' },
        { name: 'Async Pipelines', value: 88, color: '#06b6d4' }
      ],
      icon: `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm25 76.5c-3.5 3.5-9.2 3.5-12.7 0L64 76.2l-12.3 12.3c-3.5 3.5-9.2 3.5-12.7 0-3.5-3.5-3.5-9.2 0-12.7L51.3 63.5 39 51.2c-3.5-3.5-3.5-9.2 0-12.7 3.5-3.5 9.2-3.5 12.7 0L64 50.8l12.3-12.3c3.5-3.5 9.2-3.5 12.7 0 3.5 3.5 3.5 9.2 0 12.7L76.7 63.5 89 75.8c3.5 3.5 3.5 9.2 0 12.7z" fill="#D80095"/><path d="M64 26c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zm0 64c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z" fill="#E01A4F"/></svg>`
    }
  ];

  getSkills(): Skill[] {
    return this.skills;
  }

  getRow1Skills(): Skill[] {
    return this.skills.slice(0, 4); // Angular, React, TypeScript, JavaScript
  }

  getRow2Skills(): Skill[] {
    return this.skills.slice(4, 8); // HTML, CSS, SCSS, Git
  }

  getRow3Skills(): Skill[] {
    return this.skills.slice(8, 13); // Java, MySQL, AgGrid, Chart.js, RxJS
  }

  getSkillById(id: string): Skill | undefined {
    return this.skills.find(s => s.id === id);
  }
}
