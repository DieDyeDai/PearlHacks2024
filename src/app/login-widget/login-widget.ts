import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'auth-widget',
  templateUrl: './login-widget.html',
  styleUrl: './login-widget.css',
})
export class AuthButtonWidget {
    constructor(
        @Inject(DOCUMENT) public document: Document,
        public auth: AuthService
    ) {}

    login() {
        this.auth.loginWithRedirect();
    }

    logout() {
        this.auth.logout({ 
          logoutParams: {
            returnTo: this.document.location.origin 
          }
        });
    }

}