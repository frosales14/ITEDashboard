import { NgFor } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'app/models/interfaces/menu.interface';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './menu-item.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MenuItemComponent {
  menuItems = input.required<MenuItem[]>();
}
