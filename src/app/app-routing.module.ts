import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScanPageComponent } from './scan-page/scan-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome-page/welcome-page.module').then(m => m.WelcomePagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'register-page',
    loadChildren: () => import('./register-page/register-page.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'finish-register',
    loadChildren: () => import('./finish-register/finish-register.module').then( m => m.FinishRegisterPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./parking-details/parking-details.module').then( m => m.ParkingDetailsPageModule)
  },
  {
    path: 'paid',
    loadChildren: () => import('./paid-page/paid-page.module').then( m => m.PaidPagePageModule)
  },
  {
    path: 'scan',
    component: ScanPageComponent
  },
  {
    path: 'rating-page',
    loadChildren: () => import('./rating-page/rating-page.module').then( m => m.RatingPagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
