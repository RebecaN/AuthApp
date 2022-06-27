import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import myAppConfig from './config/my-app-config';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// import { MenuListItemComponent } from './features/ui/menu-list-item/menu-list-item.component';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth: any, injector: Injector) => {
     const router = injector.get(Router);
     router.navigate(['/login']);
  }
}, myAppConfig.oidc)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule

  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
