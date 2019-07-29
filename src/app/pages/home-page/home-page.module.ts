import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { PropertyListModule } from 'src/app/components/property-list/property-list.module';
import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [HomePageRoutingModule, PropertyListModule, SearchBarModule, FormsModule, NgZorroAntdModule],
    declarations: [HomePageComponent],
    exports: [HomePageComponent]
  })

  export class HomePageModule { }