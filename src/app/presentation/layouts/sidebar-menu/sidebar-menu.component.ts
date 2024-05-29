import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './sidebar-menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SidebarMenuComponent {
  menuItems = [
    {
      url: '',
      icon: 'monitoring',
      name: 'Dashboard',
      id: 1,
    },
    {
      url: '',
      icon: 'group',
      name: 'Users',
      id: 2,
    },
    {
      url: '',
      icon: 'shelves',
      name: 'Storage rooms',
      id: 3,
    },
    {
      url: '',
      icon: 'category',
      name: 'Categories',
      id: 4,
    },
    {
      url: '',
      icon: 'headset_mic',
      name: 'Products',
      id: 5,
    },
    {
      url: '',
      icon: 'inventory',
      name: 'Campaigns',
      id: 6,
    },
    {
      url: '',
      icon: 'universal_local',
      name: 'Stations',
      id: 7,
    },
  ];
}
