import { NgModule } from '@angular/core';
import { AdStepsComponent } from './ad-steps.component';
import { AdStepsRoutingModule } from './ad-steps-routing.module';
import { PropertyListModule } from '../../components/property-list/property-list.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';



@NgModule({
    imports: [AdStepsRoutingModule,FormsModule,NzFormModule,ReactiveFormsModule,NzSelectModule,CommonModule,NzStepsModule,NzButtonModule, PropertyListModule, NgZorroAntdModule],
    declarations: [AdStepsComponent],
    exports: [AdStepsComponent]
  })

  export class AdStepsModule { }