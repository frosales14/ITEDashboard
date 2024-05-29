import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
