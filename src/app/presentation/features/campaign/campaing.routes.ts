import { Routes } from '@angular/router';

export const campaingRoutes: Routes = [
  {
    path: 'campaings',
    loadComponent: () => import('./campaign.component'),
  },
];
