import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyRegisterComponent } from './property-register.component';

const routes: Routes = [
    {path: '', component:PropertyRegisterComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PropertyRegisterRoutingModule { }
