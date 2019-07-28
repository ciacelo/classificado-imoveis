import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar.component';


const routes: Routes = [
    {path: '', component:SearchBarComponent}
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SearchBarRoutingModule { }