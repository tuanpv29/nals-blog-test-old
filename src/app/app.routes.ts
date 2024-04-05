import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/blog-home/blog-home.component').then(
        mod => mod.BlogHomeComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/blog-create/blog-create.component').then(
        mod => mod.BlogCreateComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/blog-edit/blog-edit.component').then(
        mod => mod.BlogEditComponent
      ),
  },
  {
    path: 'view/:id',
    loadComponent: () =>
      import('./pages/blog-view/blog-view.component').then(
        mod => mod.BlogViewComponent
      ),
  },
];
