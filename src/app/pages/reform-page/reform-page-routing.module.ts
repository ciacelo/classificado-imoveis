import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReformPageComponent } from './reform-page.component';

const routes: Routes = [
    {path: '', component: ReformPageComponent}
]

@NgModule( 
    {imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]   
    }
)

export class ReformPageRoutingModule{}
