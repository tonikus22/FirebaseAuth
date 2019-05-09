import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService{

  constructor(public afAuth: AngularFireAuth) { }

  loginWithGoogle() {
  	return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(){
  	return this.afAuth.auth.signOut();
  }

}
