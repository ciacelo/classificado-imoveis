import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserFavoriteRoutingModule } from './user-favorite-routing.module';
import { UserFavoriteComponent } from './user-favorite.component';
import { PropertyListModule } from 'src/app/components/property-list/property-list.module';

@NgModule({
    imports: [ UserFavoriteRoutingModule,NgZorroAntdModule ,CommonModule, NzFormModule , ReactiveFormsModule, PropertyListModule],
    declarations: [UserFavoriteComponent],
    exports: [UserFavoriteComponent]
  })
  export class UserFavoriteModule { }