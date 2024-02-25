import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-profile/user-form/user-form.component';
import { UserMapComponent } from './user-map/user-map.component';

const routes: Routes = [
  UserProfileComponent.Route,
  AppComponent.Route,
  UserFormComponent.Route,
  UserMapComponent.Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
