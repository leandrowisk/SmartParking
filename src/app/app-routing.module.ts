import { CodeComponent }                           from './code/code.component';
import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome-page',
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
    path: 'rating-page',
    loadChildren: () => import('./rating-page/rating-page.module').then( m => m.RatingPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'filter-result',
    loadChildren: () => import('./filter-result/filter-result.module').then( m => m.FilterResultPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./historic/historic.module').then( m => m.HistoricPageModule)
  },
  {
    path: 'payment-options',
    loadChildren: () => import('./payment-options/payment-options.module').then( m => m.PaymentOptionsPageModule)
  },
  {
    path: 'payment-management',
    loadChildren: () => import('./payment-management/payment-management.module').then( m => m.PaymentManagementPageModule)
  },
  {
    path: 'monthly-lease',
    loadChildren: () => import('./monthly-lease/monthly-lease.module').then( m => m.MonthlyLeasePageModule)
  },
  {
    path: 'register-informations',
    loadChildren: () => import('./register-informations/register-informations.module').then( m => m.RegisterInformationsPageModule)
  },
  {
    path: 'perfil-edit',
    loadChildren: () => import('./perfil-edit/perfil-edit.module').then( m => m.PerfilEditPageModule)
  },
  {
    path: 'register-card',
    loadChildren: () => import('./register-card/register-card.module').then( m => m.RegisterCardPageModule)
  },
  {
    path: 'code',
    component: CodeComponent
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
