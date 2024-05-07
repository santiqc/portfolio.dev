import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component'),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
