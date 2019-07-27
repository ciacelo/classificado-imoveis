import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [LoginRoutingModule,NgZorroAntdModule ,CommonModule, NzFormModule , ReactiveFormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
  })
  export class LoginModule { }