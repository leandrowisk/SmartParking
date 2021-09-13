import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage }             from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'filter',
        loadChildren: () => import('../fIlter/filter.module').then(m => m.FilterPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'QRCode',
        loadChildren: () => import('../QR-Code/qr-code.module').then(m => m.QRCodePageModule)
      },
        
      {
        path: 'options',
        loadChildren: () => import('../options/options.module').then(m => m.OptionsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
