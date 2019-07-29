import { NgModule } from '@angular/core';
import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [FindRoutingModule,NgZorroAntdModule ,CommonModule],
    declarations: [FindComponent],
    exports: [FindComponent]
  })
  export class FindModule { }