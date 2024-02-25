import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {

  public static Route = {
    path: 'home',
    title: 'Home',
    component: AppComponent,
    pathMatch: "full" as PathMatch
  };

  title = 'Pearl_Hacks-2024';

  constructor(public auth: AuthService) {}
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