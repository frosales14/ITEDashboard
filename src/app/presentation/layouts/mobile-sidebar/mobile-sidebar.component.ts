import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mobile-sidebar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSidebarComponent { }
