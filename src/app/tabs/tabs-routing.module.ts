import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'tab4',
        loadChildren: () =>
          import('../tab4/tab4.module').then((m) => m.Tab4PageModule),
      },
      {
        path: 'asian',
        loadChildren: () =>
          import('../asian/asian.module').then((m) => m.AsianPageModule),
      },
      {
        path: 'breakfast',
        loadChildren: () =>
          import('../breakfast/breakfast.module').then(
            (m) => m.BreakfastPageModule
          ),
      },
      {
        path: 'dessert',
        loadChildren: () =>
          import('../dessert/dessert.module').then((m) => m.DessertPageModule),
      },
      {
        path: 'dinner',
        loadChildren: () =>
          import('../dinner/dinner.module').then((m) => m.DinnerPageModule),
      },
      {
        path: 'italian',
        loadChildren: () =>
          import('../italian/italian.module').then((m) => m.ItalianPageModule),
      },
      {
        path: 'under30mins',
        loadChildren: () =>
          import('../under30mins/under30mins.module').then(
            (m) => m.Under30minsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'asian',
    loadChildren: () =>
      import('../asian/asian.module').then((m) => m.AsianPageModule),
  },
  {
    path: 'breakfast',
    loadChildren: () =>
      import('../breakfast/breakfast.module').then(
        (m) => m.BreakfastPageModule
      ),
  },
  {
    path: 'dessert',
    loadChildren: () =>
      import('../dessert/dessert.module').then((m) => m.DessertPageModule),
  },
  {
    path: 'dinner',
    loadChildren: () =>
      import('../dinner/dinner.module').then((m) => m.DinnerPageModule),
  },
  {
    path: 'italian',
    loadChildren: () =>
      import('../italian/italian.module').then((m) => m.ItalianPageModule),
  },
  {
    path: 'under30mins',
    loadChildren: () =>
      import('../under30mins/under30mins.module').then(
        (m) => m.Under30minsPageModule
      ),
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
