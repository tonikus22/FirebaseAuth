import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service.spec.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AuthService, private router: Router) {
  	this.authService.afAuth.authState.subscribe(
  		(auth) => {
  			if (auth == null) {
  				this.isLoggedIn = false;
  				this.user_displayName = '';
  				this.user_email = '';
  				this.router.navigate(['login']);
  			} else {
  				this.isLoggedIn = true;
  				this.user_displayName = auth.displayName;
  				this.user_email = auth.email;
  				this.router.navigate(['']);
  			}
  		}
  	)
  }
}
