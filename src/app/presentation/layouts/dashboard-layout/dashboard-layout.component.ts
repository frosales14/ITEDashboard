import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent],
  templateUrl: './dashboard-layout.component.html',
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {}
