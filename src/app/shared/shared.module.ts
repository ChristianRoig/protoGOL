import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
/**
 * matrial imports
 */
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-carousel-lib';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        FuseScrollbarModule,
        FuseScrollResetModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselComponent
    ],
    declarations: [
      CarouselComponent
    ]
})
export class SharedModule
{
}
