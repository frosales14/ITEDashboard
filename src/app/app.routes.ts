import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboard-layout/dashboard-layout.component';
import { dashboardRoutes } from './presentation/features/dashboard/dashboard.routes';
import { userRoutes } from './presentation/features/user/user.routes';
import { stationRoutes } from './presentation/features/station/station.routes';
import { productRoutes } from './presentation/features/product/product.routes';
import { categoryRoutes } from './presentation/features/category/category.routes';
import { campaingRoutes } from './presentation/features/campaign/campaing.routes';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./presentation/features/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        children: dashboardRoutes,
      },
      {
        path: 'users',
        children: userRoutes,
      },
      {
        path: 'storage-rooms',
        children: userRoutes,
      },
      {
        path: 'categories',
        children: categoryRoutes,
      },
      {
        path: 'products',
        children: productRoutes,
      },
      {
        path: 'campaigns',
        children: campaingRoutes,
      },
      {
        path: 'stations',
        children: stationRoutes,
      },
    ],
  },
];
