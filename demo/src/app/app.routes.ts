import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';
import { Booking } from './pages/booking/booking';
import { Customer } from './pages/customer/customer';
import { authGuardGuard } from './auth-guard-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuardGuard],
      },
      {
        path: 'vehicles',
        component: Vehicles,
        canActivate: [authGuardGuard],
      },
      {
        path: 'booking',
        component: Booking,
        canActivate: [authGuardGuard],
      },
      {
        path: 'customer',
        component: Customer,
        canActivate: [authGuardGuard],
      },
    ],
  },
];
