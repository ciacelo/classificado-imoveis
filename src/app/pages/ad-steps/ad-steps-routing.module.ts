import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdStepsComponent } from './ad-steps.component';

const routes: Routes = [
    {path: '', component: AdStepsComponent}
]
@NgModule( 
    {imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]   
     
    }
)

export class AdStepsRoutingModule{}