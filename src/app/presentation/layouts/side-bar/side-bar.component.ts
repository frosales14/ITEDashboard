import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, SidebarMenuComponent],
  templateUrl: './side-bar.component.html',
  styles: `
  `,
})
export class SideBarComponent {
  public showSidebar = input.required<boolean>();
}
