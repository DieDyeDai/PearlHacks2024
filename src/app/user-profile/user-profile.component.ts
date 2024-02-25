import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AuthService } from '@auth0/auth0-angular';
import { CurrentUserService, User } from '../current-user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {

  protected user: User = this.currentUserService.getUser();

  public static Route = {
    path: 'profile',
    title: 'My Profile',
    component: UserProfileComponent
  };
  
  // constructor(protected auth: AuthService) {}
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected currentUserService: CurrentUserService) {}

  back() {
    this.router.navigate([".."], {relativeTo: this.route})
  }

}



// (click)="router.navigate(['../'])"

/*
<ul *ngIf="auth.user$ | async as user">
    <li>{{ user.name }}</li>
    <li>{{ user.email }}</li>
</ul>
<button
    mat-stroked-button
    routerLink='/'>
    Home
</button>
*/