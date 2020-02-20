import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuGuard } from '../core/au.guard';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service.spec.ts.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	{
		path: '',
		children: []
	},
	{ path: '', component: HomePageComponent, },
	{ path: 'login', component: LoginPageComponent, canActivate: [AuGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
