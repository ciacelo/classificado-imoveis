import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { PropertyDetailsComponent } from './property-details.component';


@NgModule({
    imports: [
      PropertyDetailsRoutingModule,
      NgZorroAntdModule,
      CommonModule,
    ],
    declarations: [PropertyDetailsComponent],
    exports: [PropertyDetailsComponent]
  })
  export class PropertyDetailsModule { } 

