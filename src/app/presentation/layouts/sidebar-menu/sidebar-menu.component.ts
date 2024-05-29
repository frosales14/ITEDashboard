import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent {
  menuItems = [
    {
      url: '',
      icon: 'assets/svgs/chart.svg',
      name: 'Dashboard',
      id: 1,
    },
    {
      url: '',
      icon: 'assets/svgs/people.svg',
      name: 'Users',
      id: 2,
    },
    {
      url: '',
      icon: 'assets/svgs/package.svg',
      name: 'Storage rooms',
      id: 3,
    },
    {
      url: '',
      icon: 'assets/svgs/cards.svg',
      name: 'Categories',
      id: 4,
    },
    {
      url: '',
      icon: 'assets/svgs/shoppingCart.svg',
      name: 'Products',
      id: 5,
    },
    {
      url: '',
      icon: 'assets/svgs/shoppingCart.svg',
      name: 'Campaigns',
      id: 6,
    },
    {
      url: '',
      icon: 'assets/svgs/marker.svg',
      name: 'Stations',
      id: 7,
    },
  ];
}
