import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./presentation/features/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
  },
];
