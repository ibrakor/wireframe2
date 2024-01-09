import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzonesComponent } from './buzones/buzones.component';



@NgModule({
    declarations: [
        BuzonesComponent
    ],
    exports: [
        BuzonesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EmialModule { }
