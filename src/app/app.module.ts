import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Material UI Dependencies */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthButtonWidget } from './login-widget/login-widget';
import { UserCardWidget } from './user-profile/user-card/user-card.widget';
import { UserPrivateCardWidget } from './user-profile/user-private-card/user-private-card.widget';

import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,

    AuthButtonWidget,
    UserCardWidget,
    UserPrivateCardWidget
  ],
  imports: [
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,

    // Material UI
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,

    // auth0 configuration
    AuthModule.forRoot({
      domain: 'dev-y0qb0t1o6xvr4py2.us.auth0.com',
      clientId: '29IPxG2KZa9O5XiinNKm65VgFWUnXlJ7',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
