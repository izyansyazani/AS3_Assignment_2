import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'asian',
    loadChildren: () => import('./asian/asian.module').then( m => m.AsianPageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'dessert',
    loadChildren: () => import('./dessert/dessert.module').then( m => m.DessertPageModule)
  },
  {
    path: 'dinner',
    loadChildren: () => import('./dinner/dinner.module').then( m => m.DinnerPageModule)
  },
  {
    path: 'italian',
    loadChildren: () => import('./italian/italian.module').then( m => m.ItalianPageModule)
  },
  {
    path: 'under30mins',
    loadChildren: () => import('./under30mins/under30mins.module').then( m => m.Under30minsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
