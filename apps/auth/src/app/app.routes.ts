import { Route } from '@angular/router';
import { authGuard, isAdminGuard, loggedInGuard, PageNotFoundComponent } from '@ezms/shared';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FrontendLoginComponent } from './components/frontend-login/frontend-login.component';

export const appRoutes: Route[] = [
  {
    path: 'frontend/login',
    canActivate: [loggedInGuard],
    component: FrontendLoginComponent
  },
  {
    path: 'admin/login',
    canActivate: [loggedInGuard],
    component: AdminLoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      loadRemote<typeof import('dashboard/Routes')>('dashboard/Routes').then(
        (m) => m?.remoteRoutes ?? PageNotFoundComponent
      ),
  },
  {
    path: 'processmaster',
    canActivate: [authGuard, isAdminGuard],
    loadChildren: () =>
      loadRemote<typeof import('processmaster/Routes')>(
        'processmaster/Routes'
      ).then((m) => m?.remoteRoutes ?? PageNotFoundComponent),
  },
  {
    path: 'worldcheck',
    canActivate: [authGuard, isAdminGuard],
    loadChildren: () =>
      loadRemote<typeof import('worldcheck/Routes')>('worldcheck/Routes').then(
        (m) => m?.remoteRoutes ?? PageNotFoundComponent
      ),
  },
  {
    path: '',
    redirectTo: 'frontend/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
