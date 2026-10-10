import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../services/skill.service';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent {
  readonly skill = input.required<Skill>();
  readonly isSelected = input<boolean>(false);

  readonly skillSelected = output<Skill>();

  onSelect(): void {
    this.skillSelected.emit(this.skill());
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onSelect();
    }
  }
}
