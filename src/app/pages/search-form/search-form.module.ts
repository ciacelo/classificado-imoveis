import { NgModule } from '@angular/core';
import { SearchFormRoutingModule } from './serach-form-routing.module';
import { SearchFormComponent } from './search-form.component';
import { CommonModule } from '@angular/common';
import { NzFormModule, NgZorroAntdModule , NzInputModule} from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports:[SearchFormRoutingModule, CommonModule, FormsModule, NzFormModule, NzInputModule, NgZorroAntdModule, ReactiveFormsModule],
    declarations:[SearchFormComponent],
    exports:[SearchFormComponent]
})

export class SearchFormModule { }