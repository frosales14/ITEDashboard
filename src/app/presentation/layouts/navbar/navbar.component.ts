import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class NavbarComponent {
  public menuBtnClick = output<void>();
  public showProfileMenu = false;
}
