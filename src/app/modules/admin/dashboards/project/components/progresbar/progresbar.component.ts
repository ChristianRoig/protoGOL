import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-progresbar',
	templateUrl: './progresbar.component.html',
	styleUrls: ['./progresbar.component.scss']
})
export class ProgresbarComponent implements OnInit {

	@Input() progress: number;
	@Input() total: number;
	color: string;

	middleBar: number = 65;
	endBar: number = 95;
	showTrueLimite:number;
	shoowTrueProgress: number;
	showDisp: number;


	constructor() { 
		
	}

	ngOnInit(): void {
		if(!this.progress){
			this.progress = 0;
		}

		if(this.total === 0){
			this.total = this.progress;
		}else if(!this.total) {
			this.total = 100;
		}

		this.showTrueLimite = this.total;
		this.shoowTrueProgress = this.progress;
		this.showDisp = this.total - this.progress;

		if(this.progress > this.total) {
			this.progress = 100;
			this.total = 100;
		}

		this.progress = (this.progress / this.total) * 100;

		if(this.progress < this.middleBar) {
			this.color = 'green';
		}else if(this.progress < this.endBar) {
			this.color = 'yellow';
		}else {
			this.color = 'red';
		}
	}

}