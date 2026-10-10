import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  readonly service = input.required<Service>();
}
