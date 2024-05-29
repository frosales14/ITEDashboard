import { Routes } from '@angular/router';

export const storageRoomRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./storage-room.component'),
  },
];
