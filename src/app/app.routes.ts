import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sobre-mi',
        loadComponent: () => import('./components/home/home.component'),
    },
    {
        path: '',
        redirectTo: 'sobre-mi',
        pathMatch: 'full'
    }
];
