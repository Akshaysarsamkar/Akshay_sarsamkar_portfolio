import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience.service';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, NgZone, afterNextRender, inject, signal, } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  private readonly experienceService = inject(ExperienceService);
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  readonly experiences = this.experienceService.experiences;

  readonly isVisible = signal<boolean>(false);
  readonly scrollProgress = signal<number>(0);
  readonly isEndReached = signal<boolean>(false);
  readonly reachedItemIds = signal<Set<string>>(new Set());

  isItemReached(id: string): boolean {
    return this.reachedItemIds().has(id);
  }

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
          {
            threshold: 0.05,
            rootMargin: '0px 0px -20px 0px',
          }
        );

        observer.observe(hostEl);
        this.destroyRef.onDestroy(() => { observer.disconnect(); });
      }
      else { this.isVisible.set(true); }

      let ticking = false;

      const updateScrollProgress = () => {
        ticking = false;
        const timelineEl = hostEl.querySelector<HTMLElement>('.experience-section__timeline');
        if (!timelineEl) return;
        const rect = timelineEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const focalPoint = windowHeight * 0.55;
        const totalHeight = rect.height;
        if (totalHeight <= 0) return;
        const scrolled = focalPoint - rect.top;
        const rawProgress = (scrolled / totalHeight) * 100;
        const clampedProgress = Math.min(Math.max(rawProgress, 0), 100);
        const roundedProgress = Math.round(clampedProgress * 10) / 10;
        if (Math.abs(this.scrollProgress() - roundedProgress) >= 0.2) { this.scrollProgress.set(roundedProgress); }
        const itemEls = hostEl.querySelectorAll<HTMLElement>('.experience-section__item');
        const currentReached = new Set<string>();
        itemEls.forEach((el, index) => {
          const itemId = el.getAttribute('data-item-id');
          if (!itemId) return;
          if (index === 0 && (rect.top <= focalPoint || this.isVisible())) {
            currentReached.add(itemId);
            return;
          }

          const markerEl = el.querySelector<HTMLElement>('.experience-section__marker');
          const targetEl = markerEl || el;
          const targetRect = targetEl.getBoundingClientRect();
          if (targetRect.top <= focalPoint + 30) { currentReached.add(itemId); }
        });

        const prevSet = this.reachedItemIds();
        let setChanged = prevSet.size !== currentReached.size;
        if (!setChanged) {
          for (const id of currentReached) {
            if (!prevSet.has(id)) { setChanged = true; break; }
          }
        }
        if (setChanged) { this.reachedItemIds.set(currentReached); }
        const endReached = roundedProgress >= 88;
        if (this.isEndReached() !== endReached) { this.isEndReached.set(endReached); }
      };

      const onScrollOrResize = () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateScrollProgress);
        }
      };

      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize, { passive: true });
      });
      updateScrollProgress();
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScrollOrResize);
        window.removeEventListener('resize', onScrollOrResize);
      });
    });
  }
}


