import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDataService } from '../../services/service-data.service';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-what-i-do-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './what-i-do-section.component.html',
  styleUrl: './what-i-do-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIDoSectionComponent {
  private readonly serviceDataService = inject(ServiceDataService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  readonly services = this.serviceDataService.services;
  readonly isVisible = signal<boolean>(false);

  /** Code lines for the editor panel — kept static for perf */
  readonly codeLines: Array<{ tokens: Array<{ text: string; cls: string }> }> = [
    { tokens: [{ text: 'const', cls: 'kw' }, { text: ' developer', cls: 'var' }, { text: ' = {', cls: 'punc' }] },
    { tokens: [] },
    { tokens: [{ text: '  skills', cls: 'prop' }, { text: ': [', cls: 'punc' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'Angular', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'React', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'TypeScript', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'UI/UX', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'API Integration', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'Authentication', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'State Management', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'Responsive Web', cls: 'str' }, { text: "',", cls: 'str' }] },
    { tokens: [{ text: "    '", cls: 'str' }, { text: 'Performance', cls: 'str' }, { text: "'", cls: 'str' }] },
    { tokens: [{ text: '  ],', cls: 'punc' }] },
    { tokens: [] },
    { tokens: [{ text: '  mindset', cls: 'prop' }, { text: ': ', cls: 'punc' }, { text: "'Build, Learn, Improve'", cls: 'str' }, { text: ',', cls: 'punc' }] },
    { tokens: [] },
    { tokens: [{ text: '  goal', cls: 'prop' }, { text: ': ', cls: 'punc' }, { text: "'Create meaningful products'", cls: 'str' }, { text: ',', cls: 'punc' }] },
    { tokens: [] },
    { tokens: [{ text: '  tools', cls: 'prop' }, { text: ': [', cls: 'punc' }, { text: "'VS Code'", cls: 'str' }, { text: ', ', cls: 'punc' }, { text: "'Git'", cls: 'str' }, { text: ', ', cls: 'punc' }, { text: "'Figma'", cls: 'str' }, { text: '],', cls: 'punc' }] },
    { tokens: [] },
    { tokens: [{ text: '  passion', cls: 'prop' }, { text: ': ', cls: 'punc' }, { text: 'true', cls: 'bool' }] },
    { tokens: [] },
    { tokens: [{ text: '};', cls: 'punc' }] },
  ];

  readonly stats: Array<{ value: string; label: string; iconPath: string }> = [
    {
      value: '4+',
      label: 'Core Services',
      iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    },
    {
      value: '100%',
      label: 'Passion',
      iconPath: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    },
    {
      value: '∞',
      label: 'Continuous Learning',
      iconPath: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
    },
    {
      value: 'Better',
      label: 'Products',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    },
  ];

  constructor() {
    afterNextRender(() => {
      if (typeof window === 'undefined') return;
      const hostEl = this.elementRef.nativeElement;

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                this.isVisible.set(true);
                observer.disconnect();
                break;
              }
            }
          },
          { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(hostEl);
        this.destroyRef.onDestroy(() => observer.disconnect());
      } else {
        this.isVisible.set(true);
      }
    });
  }
}
