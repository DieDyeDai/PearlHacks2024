import { Component, Inject } from '@angular/core';
//import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'auth-widget',
  //templateUrl: './login.widget.html',
  
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="logout()">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="login()">Log in</button>
    </ng-template>
  `,
  
  styles: [],
})
/*export class AuthButtonWidget {
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

}*/