import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-carousel-tarjetas',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: fuseAnimations
})
export class CarouselComponent implements OnInit {
	/**
	 * Benja's def
	 */
	@Input('slides') slides: any[];
	@Input('bg-color') bg_color: any;
	@Output('currentSlide') currentSlideEvent: EventEmitter<number>;
	@ViewChild('contentTarjetas') contentTarjetas: ElementRef;
	@ViewChild('templateMobile') templateMobile: ElementRef;
	currentSlide: number = 0;
	innerWidth: number = window.innerWidth;
	binTarjeta: number = 421036;
	binTarjetaNoPura: number = 445532;
	displacement: number = 0;
    @HostListener('window:resize', ['$event'])
    onResize(event) { // detecta el cambio de pantalla (responsive)
        this.innerWidth = window.innerWidth;
    }
	constructor() { }

	ngOnInit(): void {
		this.currentSlide = 0;
	}

	onPrevButtonClicked(): void {
		const previus = this.currentSlide - 1;
		this.currentSlide = previus < 0 ? this.slides.length - 1 : previus;
		
		if((this.currentSlide > 0) && (this.displacement < 0)) {
			this.displacement += 325;
		} else if((this.currentSlide === (this.slides.length - 1)) && (this.displacement === 0)) {
			this.displacement -= (325 * this.slides.length/2);
		} else {
			this.displacement -= this.displacement;/* falta algo mas */
		} 
	}

	onNextButtonClicked(): void {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;

		if(this.displacement <= 0) {
			if(this.currentSlide >= (this.slides.length/2)) {
				this.displacement -= 325;
			}else if(next === this.slides.length){
				this.displacement -= this.displacement;
			}else {
				this.displacement -= 325;
			}
		}/* else {
			this.displacement = 0;
		} */
	}
	onPrevMobileButton(): void {
		const previus = this.currentSlide - 1;
		//this.displacement += this.displacement >= 0 ? 360 : -360;
		this.currentSlide = previus < 0 ? this.slides.length - 1 : previus;
	}
	onNextMobileButton(): void {
		const next = this.currentSlide + 1;
		this.currentSlide = next === this.slides.length ? 0 : next;
	}
	onClickedCard(clicked:any){
		//console.log({clicked})
	}

}
