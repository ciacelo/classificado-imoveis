import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
    imports: [UserProfileRoutingModule,NgZorroAntdModule ,CommonModule, NzFormModule , ReactiveFormsModule],
    declarations: [UserProfileComponent],
    exports: [UserProfileComponent]
  })
  export class UserRegisterModule { }