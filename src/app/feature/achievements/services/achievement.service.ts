import { Injectable, signal } from '@angular/core';
import { AchievementStat } from '../models/achievement.model';

@Injectable({ providedIn: 'root' })
export class AchievementService {

  readonly stats = signal<AchievementStat[]>([
    {
      value: '1.5+',
      label: 'Years Experience',
      sublabel: 'Professional Development',
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    },
    {
      value: '4+',
      label: 'Projects',
      sublabel: 'Delivered End-to-End',
      iconPath: 'M3 7h18M3 12h18M3 17h18',
    },
    {
      value: '10+',
      label: 'Technologies',
      sublabel: 'Across Frontend Stack',
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
      value: '100%',
      label: 'Dedication',
      sublabel: 'Every Single Day',
      iconPath: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    },
  ]);

  readonly journeySteps = signal<Array<{ label: string; icon: string }>>([
    { label: 'Learn', icon: '📖' },
    { label: 'Build', icon: '🛠️' },
    { label: 'Improve', icon: '📈' },
    { label: 'Grow', icon: '🚀' },
  ]);
}
