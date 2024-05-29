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
    path: '',
    loadChildren: () =>
      import('./presentation/features/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: dashboardRoutes,
  },
  {
    path: 'users',
    component: DashboardLayoutComponent,
    children: userRoutes,
  },
  {
    path: 'storage-rooms',
    component: DashboardLayoutComponent,
    children: userRoutes,
  },
  {
    path: 'categories',
    component: DashboardLayoutComponent,
    children: categoryRoutes,
  },
  {
    path: 'products',
    component: DashboardLayoutComponent,
    children: productRoutes,
  },
  {
    path: 'campaigns',
    component: DashboardLayoutComponent,
    children: campaingRoutes,
  },
  {
    path: 'stations',
    component: DashboardLayoutComponent,
    children: stationRoutes,
  },
];
