import { NgModule } from '@angular/core';
import { ResultPageRoutingModule } from './result-page-routing.module';
import { ResultPageComponent } from './result-page.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NzInputModule } from 'ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { PropertyListModule } from 'src/app/components/property-list/property-list.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule} from '@angular/forms';


@NgModule({
    imports: [ResultPageRoutingModule,FormsModule,PropertyListModule,NzInputModule,NgZorroAntdModule,NzSelectModule,NzCardModule,NzSliderModule, NzIconModule, NzLayoutModule ,CommonModule, NzFormModule , ReactiveFormsModule],
    declarations: [ResultPageComponent],
    exports: [ResultPageComponent]
  })
  export class ResultPageModule { }