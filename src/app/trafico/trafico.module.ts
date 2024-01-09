import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetTransferenciaComponent } from './widget-transferencia/widget-transferencia.component';



@NgModule({
  declarations: [
    WidgetTransferenciaComponent
  ],
  exports: [
    WidgetTransferenciaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TraficoModule { }
