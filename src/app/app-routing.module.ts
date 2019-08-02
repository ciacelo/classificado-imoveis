import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { PropertyService } from './service/property/property.service';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  { path: 'property-details', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule)},
  { path: 'property-register', loadChildren: () => import('./pages/property-register/property-register.module').then(m => m.PropertyRegisterModule)},
  { path: 'user-register', loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'search-form', loadChildren: () => import('./pages/search-form/search-form.module').then(m => m.SearchFormModule) },
  { path: 'property/:id', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule) },
  { path: 'find', loadChildren: () => import('./components/find/find.module').then(m => m.FindModule), canActivate: [AuthGuard] },
  { path: 'home/my-ads', loadChildren: () => import('./components/my-ads/my-ads.module').then(m => m.MyAdsModule) },
  { path: 'ad-steps', loadChildren: () => import('./pages/ad-steps/ad-steps.module').then(m => m.AdStepsModule) },
  { path: 'user-profile', loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserRegisterModule) },
  { path: 'user-favorite', loadChildren: () => import('./pages/user-favorite/user-favorite.module').then(m => m.UserFavoriteModule) },
  { path: 'result-page', loadChildren: () => import('./pages/result-page/result-page.module').then(m => m.ResultPageModule) },
  { path: 'reform-page', loadChildren: () => import('./pages/reform-page/reform-page.module').then(m => m.ReformPageModule) }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  providers: [{provide: 'PropertyService', useClass: PropertyService}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
