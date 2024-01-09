import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetFTPComponent } from './widget-ftp/widget-ftp.component';



@NgModule({
    declarations: [
        WidgetFTPComponent
    ],
    exports: [
        WidgetFTPComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FTPModule { }
