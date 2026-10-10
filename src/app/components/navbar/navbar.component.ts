import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
