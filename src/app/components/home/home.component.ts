import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsSectionComponent } from '../../feature/projects/components/projects-section/projects-section.component';
import { ExperienceSectionComponent } from '../../feature/experience/components/experience-section/experience-section.component';
import { WhatIDoSectionComponent } from '../../feature/what-i-do/components/what-i-do-section/what-i-do-section.component';
import { AchievementsSectionComponent } from '../../feature/achievements/components/achievements-section/achievements-section.component';
import { ContactSectionComponent } from '../../feature/contact/components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SkillsComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    WhatIDoSectionComponent,
    AchievementsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
