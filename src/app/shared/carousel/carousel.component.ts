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
    @HostListener('window:resize', ['$event'])
    onResize(event) { // detecta el cambio de pantalla (responsive)
        this.innerWidth = window.innerWidth;
        //this.innerWidth = innerWidth;
    }
	constructor() { }

	ngOnInit(): void { }

	onPrevButtonClicked(): void {
		const previus = this.currentSlide - 1;
		this.contentTarjetas.nativeElement.scrollLeft -= this.contentTarjetas.nativeElement.scrollWidth; 
		this.currentSlide = previus < 0 ? this.slides.length - 1 : previus;
		//this.contentTarjetas.nativeElement.
	}

	onNextButtonClicked(): void {
		const next = this.currentSlide + 1;
		this.contentTarjetas.nativeElement.scrollRight += this.contentTarjetas.nativeElement.scrollWidth;
		this.currentSlide = next === this.slides.length ? 0 : next;
	}

	getBgColor(item:any):string {
        switch (item.type) {
            case 'VISA':
                if(item.isTitular){
                    return 'bg-primary-300';// VISA && titular
                }
                return 'bg-warn-300';// VISA && !titular
            default:
                if(item.isTitular){
                    return 'bg-primary-300';// PURA && titular
                }
                return 'bg-accent-300 border-1 border-white';// PURA && !titular
        }
    }

}
