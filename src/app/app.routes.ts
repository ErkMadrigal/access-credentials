import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detail-link',
    loadComponent: () => import('./detail-link/detail-link.component').then( m => m.DetailLinkComponent)
  },

];
