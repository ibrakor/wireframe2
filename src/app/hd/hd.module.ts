import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspacioComponent } from './espacio/espacio.component';



@NgModule({
    declarations: [
        EspacioComponent
    ],
    exports: [
        EspacioComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HDModule { }
