import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillService } from './services/skill.service';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillDetailsComponent } from './components/skill-details/skill-details.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCardComponent, SkillDetailsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  private readonly skillService = inject(SkillService);

  readonly allSkills = this.skillService.getSkills();
  readonly row1 = this.skillService.getRow1Skills();
  readonly row2 = this.skillService.getRow2Skills();
  readonly row3 = this.skillService.getRow3Skills();

  readonly selectedSkill = signal<Skill>(this.allSkills[0]);

  selectSkill(skill: Skill): void {
    this.selectedSkill.set(skill);
  }
}
