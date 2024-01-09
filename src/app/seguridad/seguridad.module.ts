import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetFireWallComponent } from './widget-fire-wall/widget-fire-wall.component';



@NgModule({
    declarations: [
        WidgetFireWallComponent
    ],
    exports: [
        WidgetFireWallComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SeguridadModule { }
