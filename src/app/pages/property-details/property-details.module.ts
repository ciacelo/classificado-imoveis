import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { PropertyDetailsComponent } from './property-details.component';
import { CarouselModule } from '../../components/carousel/carousel.module'


@NgModule({
    imports: [
      PropertyDetailsRoutingModule,
      NgZorroAntdModule,
      CommonModule,
      CarouselModule
    ],
    declarations: [PropertyDetailsComponent],
    exports: [PropertyDetailsComponent]
  })
  export class PropertyDetailsModule { } 

