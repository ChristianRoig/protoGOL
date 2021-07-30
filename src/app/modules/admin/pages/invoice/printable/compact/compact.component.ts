import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'compact',
    templateUrl    : './compact.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompactComponent
{
    innerWidth: any = window.innerWidth;
    @HostListener('window:resize', ['$event'])
    onResize(event){
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth > 600)
    }    
    /**
     * Constructor
     */
    constructor()
    {
    }
}
