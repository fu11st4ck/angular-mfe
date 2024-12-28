import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        loadComponent: () => loadRemoteModule('dashboard', './Component').then(m => m.AppComponent)
    },
    {
        path: 'process-master',
        loadComponent: () => loadRemoteModule('process-master', './Component').then(m => m.AppComponent)
    },
    {
        path: 'world-check',
        loadComponent: () => loadRemoteModule('world-check', './Component').then(m => m.AppComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: LoginComponent
    }
];
