import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './serach-routing.module';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { NzFormModule, NgZorroAntdModule , NzInputModule} from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports:[SearchRoutingModule, CommonModule, FormsModule, NzFormModule, NzInputModule, NgZorroAntdModule, ReactiveFormsModule],
    declarations:[SearchComponent],
    exports:[SearchComponent]
})

export class SearchModule { }