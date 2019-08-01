import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { MenuInitialComponent } from './pages/menu-initial/menu-initial.component';
import { MenuProfileComponent } from './pages/menu-profile/menu-profile.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

import { PropertyService } from 'src/app/service/property/property.service';
import { UserService } from './service/user/user.service';
import { AuthService } from './service/auth/auth.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuInitialComponent,
    MenuProfileComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, {provide: 'PropertyService', useClass: PropertyService}, 
              {provide: 'UserService', useClass: UserService}, {provide: 'AuthService', useClass:AuthService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
