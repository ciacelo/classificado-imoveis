import { NgModule } from '@angular/core';
import { MyAdsRoutingModule } from './my-ads-routing.module';
import { MyAdsComponent } from './my-ads.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzCardModule } from 'ng-zorro-antd/card';
import { PropertyListModule } from 'src/app/components/property-list/property-list.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [MyAdsRoutingModule,NgZorroAntdModule ,CommonModule, NzCardModule, PropertyListModule, NzIconModule],
    declarations: [MyAdsComponent],
    exports: [MyAdsComponent]
  })
  export class MyAdsModule { }