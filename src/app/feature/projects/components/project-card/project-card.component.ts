import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  /** The project to display — required. */
  readonly project = input.required<Project>();

  /** Whether this is the active center card. */
  readonly isFeatured = input<boolean>(false);
}
