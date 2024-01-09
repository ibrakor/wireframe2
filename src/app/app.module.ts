import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {TraficoModule} from "./trafico/trafico.module";
import {HDModule} from "./hd/hd.module";
import {EmialModule} from "./emial/emial.module";
import {FTPModule} from "./ftp/ftp.module";
import {BdModule} from "./bd/bd.module";
import {SeguridadModule} from "./seguridad/seguridad.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    TraficoModule,
    HDModule,
    EmialModule,
    FTPModule,
    BdModule,
    SeguridadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
