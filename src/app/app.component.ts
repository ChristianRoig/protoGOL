import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnDestroy
{
    /**
     * Constructor
     */
    constructor(private _authService:AuthService)
    {
    }
    ngOnDestroy(): void {
        this._authService.signOut();
    }
}
