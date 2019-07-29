import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFavoriteComponent } from './user-favorite.component';


const routes: Routes = [
    {path: '', component: UserFavoriteComponent}
]
@NgModule( 
    {imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]   
     
    }
)

export class UserFavoriteRoutingModule{}