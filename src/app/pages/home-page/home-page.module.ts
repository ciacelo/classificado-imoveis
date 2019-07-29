import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { PropertyListModule } from '../../components/property-list/property-list.module';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';
import { FindModule } from '../../components/find/find.module';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [HomePageRoutingModule, PropertyListModule, FindModule, SearchBarModule, FormsModule, NgZorroAntdModule],
    declarations: [HomePageComponent],
    exports: [HomePageComponent]
  })

  export class HomePageModule { }