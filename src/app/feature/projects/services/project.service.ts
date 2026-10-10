import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly _projects = signal<Project[]>([
    {
      id: 'hrms',
      title: 'HRMS',
      category: 'Human Resource Management System',
      description:
        'A modern HR management platform for handling employee information, attendance, leave management, workflows and other HR operations.',
      image: 'assets/images/projects/hrms.webp',
      technologies: ['React', 'Redux-toolkit', 'CSS3', 'HTML5', 'AG-GRID', 'CHARTJS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Akshaysarsamkar',
      featured: true,
      year: '2026',
    },
    {
      id: 'ai-mbd',
      title: 'AI MBD',
      category: 'AI-Powered Application',
      description:
        'An AI-powered application designed to simplify complex workflows and provide intelligent, data-driven solutions.',
      image: 'assets/images/projects/ai-mbd.webp',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Akshaysarsamkar',
      featured: false,
      year: '2026',
    },
    {
      id: 'ai-assisted',
      title: 'AI Assisted',
      category: 'AI-Assisted Platform',
      description:
        'An AI-assisted platform that improves productivity by combining intelligent assistance with modern web application workflows.',
      image: 'assets/images/projects/ai-assisted.webp',
      technologies: ['React', 'TypeScript', 'AI', 'SCSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Akshaysarsamkar',
      featured: false,
      year: '2026',
    },
    {
      id: 'tender-orbit',
      title: 'Tender-Orbit',
      category: 'Tender Management Platform',
      description:
        'A modern tender management platform for discovering, tracking, managing and analyzing tender information through an intuitive enterprise interface.',
      image: 'assets/images/projects/tender-orbit.webp',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Akshaysarsamkar',
      featured: false,
      year: '2026',
    },
    {
      id: 'internal-job-portal',
      title: 'Internal Job Portal',
      category: 'Internal Recruitment Platform',
      description:
        'An internal job portal that enables employees to discover opportunities, apply for positions and manage internal job applications through a streamlined workflow.',
      image: 'assets/images/projects/internal-job-portal.webp',
      technologies: ['React', 'TypeScript', 'SCSS', 'Java'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Akshaysarsamkar',
      featured: false,
      year: '2026',
    },
  ]);

  readonly allProjects = this._projects.asReadonly();
}
