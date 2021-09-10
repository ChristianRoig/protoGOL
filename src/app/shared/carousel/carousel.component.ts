import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-carousel',
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
	currentSlide: number = 0;
	innerWidth: number = 1900;
	aumentum: number = 0;
    @HostListener('window:resize', ['$event'])
    onResize(event) { // detecta el cambio de pantalla (responsive)
        this.innerWidth = window.innerWidth;
        //this.innerWidth = innerWidth;
    }
	constructor() { }

	ngOnInit(): void {
		this.currentSlide = 0;
	}

	onPrevButtonClicked(): void {
		const previus = this.currentSlide - 1;
		//this.aumentum += this.aumentum >= 0 ? 360 : -360;
		this.currentSlide = previus < 0 ? this.slides.length - 1 : previus;
		// console.log(this.aumentum)
		if(this.aumentum <= 0) {
			if(previus > 0) {
				
				this.aumentum += -365;
				console.log(this.aumentum)
			}else if(this.currentSlide >= (this.slides.length/2)){
				this.aumentum -= (365 * ((this.slides.length - 1)/2) + 365);
				console.log('segundo if ',this.aumentum)
			}
			this.aumentum = 0;
		}
		//this.contentTarjetas.nativeElement.
	}

	onNextButtonClicked(): void {
		const next = this.currentSlide + 1;
		//this.aumentum += this.aumentum <= 0 || this.currentSlide === this.slides.length? -360 : 0;
		this.currentSlide = next === this.slides.length ? 0 : next;
		if(this.aumentum <= 0) {
			if(this.currentSlide >= (this.slides.length/2)) {
				this.aumentum -= 365;
			}else if(next === this.slides.length){
				this.aumentum -= this.aumentum;
			}
		}
	}
	onClickedCard(clicked:any){
		//console.log({clicked})
	}

}
