import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio_theme';

  readonly theme = signal<Theme>(this.getInitialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');
  readonly isLight = computed(() => this.theme() === 'light');

  constructor() {
    effect(() => { const currentTheme = this.theme(); this.applyTheme(currentTheme); });
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(nextTheme);
  }

  setTheme(newTheme: Theme): void {
    this.theme.set(newTheme);
    if (typeof localStorage !== 'undefined') { localStorage.setItem(this.THEME_KEY, newTheme); }
  }

  private getInitialTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(this.THEME_KEY) as Theme | null;
      if (stored === 'light' || stored === 'dark') { return stored; }
    }
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark-theme');
        root.classList.remove('light-theme');
      } else {
        root.classList.add('light-theme');
        root.classList.remove('dark-theme');
      }
      root.setAttribute('data-theme', theme);
    }
  }
}
