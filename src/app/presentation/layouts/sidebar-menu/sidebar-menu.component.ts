import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [MenuItemComponent, RouterLink],
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
      url: '/dashboard',
      icon: 'monitoring',
      name: 'Dashboard',
      id: 1,
    },
    {
      url: '/users',
      icon: 'group',
      name: 'Users',
      id: 2,
    },
    {
      url: '/storage-rooms',
      icon: 'shelves',
      name: 'Storage rooms',
      id: 3,
    },
    {
      url: '/categories',
      icon: 'category',
      name: 'Categories',
      id: 4,
    },
    {
      url: '/products',
      icon: 'headset_mic',
      name: 'Products',
      id: 5,
    },
    {
      url: '/campaigns',
      icon: 'inventory',
      name: 'Campaigns',
      id: 6,
    },
    {
      url: '/stations',
      icon: 'universal_local',
      name: 'Stations',
      id: 7,
    },
  ];
}
