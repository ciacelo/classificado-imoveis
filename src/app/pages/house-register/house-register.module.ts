import { NgModule } from '@angular/core';

import { HouseRegisterRoutingModule } from './house-register-routing.module';

import { HouseRegisterComponent } from './house-register.component';

@NgModule({
    imports: [HouseRegisterRoutingModule],
    declarations: [HouseRegisterComponent],
    exports: [HouseRegisterComponent]
  })
  export class HouseRegisterModule { }

