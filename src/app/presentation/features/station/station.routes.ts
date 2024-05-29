import { Routes } from '@angular/router';

export const stationRoutes: Routes = [
  {
    path: 'stations',
    loadComponent: () => import('./station.component'),
  },
];
