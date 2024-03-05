import { Route } from '@angular/router';

export const appRoutes: Array<Route & { label: string }> = [
  {
    path: 'home',
    label: 'Dashboard',
    loadChildren: () => import('./features/knowledge-base/knowledge-base.module').then((m) => m.KnowledgeBaseModule),
  },
];
