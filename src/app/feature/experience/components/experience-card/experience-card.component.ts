import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience.model';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();
}
