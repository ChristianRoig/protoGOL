import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
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
