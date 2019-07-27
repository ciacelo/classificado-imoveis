import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseRegisterComponent } from './house-register.component';
import { NgModuleResolver } from '@angular/compiler';

const routes: Routes = [
    {path: '', component: HouseRegisterComponent}
]
@NgModule( 
    {imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]   

    }
)

export class HouseRegisterRoutingModule{}
