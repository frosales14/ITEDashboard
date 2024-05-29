import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, SidebarMenuComponent],
  templateUrl: './side-bar.component.html',
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {}
