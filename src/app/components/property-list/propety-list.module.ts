import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PropertyListRoutingModule } from './propety-list-routing.module';
import { PropertyListComponent } from './property-list.component';


@NgModule({
    imports: [
      PropertyListRoutingModule,
      CommonModule,
      NgZorroAntdModule
    ],
    declarations: [PropertyListComponent],
    exports: [PropertyListComponent]
  })
  export class PropertyListModule { } 

