import { NgModule } from '@angular/core';
import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './user-register.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [UserRegisterRoutingModule,NgZorroAntdModule ,CommonModule, NzFormModule , ReactiveFormsModule],
    declarations: [UserRegisterComponent],
    exports: [UserRegisterComponent]
  })
  export class UserRegisterModule { }