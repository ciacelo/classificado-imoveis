import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyService } from 'src/app/service/property/property.service';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'property-details', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule)},
  { path: 'property-list', loadChildren: () => import('./components/property-list/property-list.module').then(m => m.PropertyListModule)},
  { path: 'property-register', loadChildren: () => import('./pages/property-register/property-register.module').then(m => m.PropertyRegisterModule)},
  { path: 'user-register', loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'property/:id', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: 'PropertyService', useClass: PropertyService}],

  exports: [RouterModule]
})
export class AppRoutingModule { }
