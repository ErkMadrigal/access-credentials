import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then( m => m.HomePage)
      },
      {
        path: 'links',
        loadComponent: () => import('../links/links.page').then( m => m.LinksPage)
      },
      {
        path: 'notes',
        loadComponent: () => import('../notes/notes.page').then( m => m.NotesPage)
      },
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      // {
      //   path: 'detail-link',
      //   loadComponent: () => import('../detail-link/detail-link.component').then( m => m.DetailLinkComponent)
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  
  
];
