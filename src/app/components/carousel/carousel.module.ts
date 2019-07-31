import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CommonModule } from '@angular/common';
import { CarouselRoutingModule } from './carousel-routing.module';

@NgModule({
    imports: [CarouselRoutingModule, CommonModule],
    declarations: [CarouselComponent],
    exports: [CarouselComponent]
})
export class CarouselModule{}