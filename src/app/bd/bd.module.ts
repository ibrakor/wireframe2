import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBDComponent } from './widget-bd/widget-bd.component';



@NgModule({
    declarations: [
        WidgetBDComponent
    ],
    exports: [
        WidgetBDComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BdModule { }
