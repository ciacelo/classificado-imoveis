import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyService } from 'src/app/service/property/property.service';

const routes: Routes = [
  { path: 'property/:id', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: 'PropertyService', useClass: PropertyService}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
