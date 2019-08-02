import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReformPageRoutingModule } from './reform-page-routing.module';
import { ReformPageComponent } from './reform-page.component';



@NgModule({
    imports: [
      ReformPageRoutingModule,
      NgZorroAntdModule,
      CommonModule,
    ],
    declarations: [ReformPageComponent],
    exports: [ReformPageComponent]
  })
  
  export class ReformPageModule { } 

