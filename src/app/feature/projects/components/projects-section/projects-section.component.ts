import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.allProjects;

  readonly selectedProjectIndex = signal<number>(0);

  /** Slide direction: 1 = forward, -1 = backward */
  readonly slideDirection = signal<1 | -1>(1);

  /** Locks navigation while a transition is in progress */
  readonly isTransitioning = signal<boolean>(false);

  // ── Computed signals ──────────────────────────────────────────────────

  readonly totalProjects = computed<number>(() => this.projects().length);

  readonly selectedProject = computed<Project>(
    () => this.projects()[this.selectedProjectIndex()]
  );

  readonly previousProject = computed<Project>(() => {
    const list = this.projects();
    const prevIndex =
      (this.selectedProjectIndex() - 1 + list.length) % list.length;
    return list[prevIndex];
  });

  readonly nextProject = computed<Project>(() => {
    const list = this.projects();
    const nextIndex = (this.selectedProjectIndex() + 1) % list.length;
    return list[nextIndex];
  });

  /** 1-indexed, zero-padded — e.g. "01", "02" */
  readonly currentProjectNumber = computed<string>(() =>
    (this.selectedProjectIndex() + 1).toString().padStart(2, '0')
  );

  readonly totalProjectsFormatted = computed<string>(() =>
    this.totalProjects().toString().padStart(2, '0')
  );

  // ── Navigation ────────────────────────────────────────────────────────

  goToNext(): void {
    if (this.isTransitioning()) return;
    this.slideDirection.set(1);
    this._navigate((this.selectedProjectIndex() + 1) % this.totalProjects());
  }

  goToPrevious(): void {
    if (this.isTransitioning()) return;
    this.slideDirection.set(-1);
    const prev =
      (this.selectedProjectIndex() - 1 + this.totalProjects()) %
      this.totalProjects();
    this._navigate(prev);
  }

  goToIndex(index: number): void {
    if (this.isTransitioning() || index === this.selectedProjectIndex()) return;
    this.slideDirection.set(index > this.selectedProjectIndex() ? 1 : -1);
    this._navigate(index);
  }

  private _navigate(index: number): void {
    this.isTransitioning.set(true);
    this.selectedProjectIndex.set(index);
    setTimeout(() => this.isTransitioning.set(false), 650);
  }
}
