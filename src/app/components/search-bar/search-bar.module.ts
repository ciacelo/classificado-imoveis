import { NgModule } from "@angular/core";
import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SearchBarComponent } from './search-bar.component';
import { NgZorroAntdModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
    imports:[SearchBarRoutingModule, NgZorroAntdModule, FormsModule, NzAutocompleteModule ,CommonModule, NzInputModule, NzFormModule , ReactiveFormsModule],
    declarations:[SearchBarComponent],
    exports:[SearchBarComponent]
})

export class SearchBarModule { }