import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app

import localEs from "@angular/common/locales/es-CO";

import {registerLocaleData} from "@angular/common";

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    MenubarModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
    
   
  ],
  providers: [
 
    {provide: LOCALE_ID, useValue:"es-CO"}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
