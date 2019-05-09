import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service.spec.ts.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
	apiKey: "AIzaSyCscTwd15vGij6unbyTEgDc2gr7eT2Aszw",
    authDomain: "fir-auth-93771.firebaseapp.com",
    databaseURL: "https://fir-auth-93771.firebaseio.com",
    projectId: "fir-auth-93771",
    storageBucket: "fir-auth-93771.appspot.com",
    messagingSenderId: "547272459734",
    appId: "1:547272459734:web:f47f69116bd2e954"
}

const routes: Routes = [
	{path: '', component: HomePageComponent},
	{path: 'login', component: LoginPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
