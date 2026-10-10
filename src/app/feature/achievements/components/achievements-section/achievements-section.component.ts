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
import { AchievementService } from '../../services/achievement.service';

@Component({
  selector: 'app-achievements-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements-section.component.html',
  styleUrl: './achievements-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsSectionComponent {
  private readonly achievementService = inject(AchievementService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  readonly stats = this.achievementService.stats;
  readonly journeySteps = this.achievementService.journeySteps;
  readonly isVisible = signal<boolean>(false);

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
          { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(hostEl);
        this.destroyRef.onDestroy(() => observer.disconnect());
      } else {
        this.isVisible.set(true);
      }
    });
  }
}
