import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public static Route = {
    path: '',
    title: 'Home',
    component: AppComponent
  };

  title = 'Pearl_Hacks-2024';

  // constructor(protected auth: AuthService) {}
}
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