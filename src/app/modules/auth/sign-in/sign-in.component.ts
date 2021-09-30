import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
type UserType = 'UT';
@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    styleUrls    : ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;
    ut: UserType = 'UT';
    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email     : ['LAnache@tarjetalaanonima.com.ar', [Validators.required, Validators.email]],
            password  : ['admin', Validators.required],
            rememberMe: ['']
        });
        const valueDefault = '';
        const paswwordDefault = '';
        // Create the form
       // this.signInForm = this._formBuilder.group({
            ////num_documento: [valueDefault, [Validators.required/* , Validators.pattern['[1-9]*'] */, Validators.minLength(7), Validators.maxLength(8)]],
           // password     : [paswwordDefault, Validators.required]
            /* rememberMe: [''] */
       // });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        /* const trueCredentials = {
            userName: this.signInForm.value.num_documento.length === 7? '000'+this.signInForm.value.num_documento : '00'+this.signInForm.value.num_documento,
            password: this.signInForm.value.password,
            userType: this.ut
        }; */

        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(
                () => {// success response

                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                },
                (response) => {// error response

                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Contraseña o número de documento incorrectos'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}
