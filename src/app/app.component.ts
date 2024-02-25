import { Component, Inject, ViewChild } from '@angular/core';
import { UserMapComponent } from './user-map/user-map.component';
import { AuthService } from '@auth0/auth0-angular';

import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';
import { CurrentUserService } from './current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public static Route = {
    path: 'home',
    title: 'Home',
    component: AppComponent,
    pathMatch: "full" as PathMatch
  };

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  title = 'Pearl_Hacks-2024';

  constructor(public auth: AuthService,
              private observer: BreakpointObserver,
              @Inject(DOCUMENT) public document: Document,
              private currentUserService: CurrentUserService) {}

  
  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // If mobile, menu should not collapse
    } else {
      this.sidenav.open(); // If desktop/tablet, menu should not fully close
      this.isCollapsed = !this.isCollapsed;
    }
  }

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

type PathMatch = "full" | "prefix" | undefined;

/*
<div *ngIf="auth.isAuthenticated$ | async">
  User Profile Button Here
  <button
    mat-stroked-button
    routerLink="/profile">
    Profile
  </button>
</div>
*/