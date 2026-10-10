import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../services/skill.service';
import { ThemeService } from '../../../../service/theme.service';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-skill-details',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillDetailsComponent {
  private readonly themeService = inject(ThemeService);

  readonly skill = input.required<Skill>();

  readonly activeImage = computed(() => {
    const isDark = this.themeService.isDark();
    const currentSkill = this.skill();
    if (isDark && currentSkill.imageDark) {
      return currentSkill.imageDark;
    }
    if (!isDark && currentSkill.imageLight) {
      return currentSkill.imageLight;
    }
    return currentSkill.imageDark || currentSkill.imageLight || null;
  });
}
