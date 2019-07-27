import { NgModule } from '@angular/core';
import { PropertyRegisterRoutingModule } from './property-register-routing.module';
import { PropertyRegisterComponent } from './property-register.component';
import { CommonModule } from '@angular/common';
import { NzFormModule, NgZorroAntdModule , NzInputModule} from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports:[PropertyRegisterRoutingModule, CommonModule, FormsModule, NzFormModule, NzInputModule, NgZorroAntdModule, ReactiveFormsModule],
    declarations:[PropertyRegisterComponent],
    exports:[PropertyRegisterComponent]
})

export class PropertyRegisterModule { }