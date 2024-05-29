import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-cards-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-icon.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsIconComponent {
  class = input<string>();
}
