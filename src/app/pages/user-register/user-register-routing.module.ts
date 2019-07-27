import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register.component';

const routes: Routes = [
    {path: '', component: UserRegisterComponent}
]
@NgModule( 
    {imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]   
     
    }
)

export class UserRegisterRoutingModule{}