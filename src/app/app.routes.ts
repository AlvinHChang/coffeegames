import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./core/pages/home/home.component')).HomeComponent,
  },
  {
    path: 'games',
    children: [
      {
        path: '',
        loadComponent: async () =>
          (await import('./features/games/pages/home/home.component'))
            .HomeComponent,
      },
    ],
  },
];
