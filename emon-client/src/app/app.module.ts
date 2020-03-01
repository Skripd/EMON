import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { KeycloakAngularModule, KeycloakService, KeycloakConfig } from 'keycloak-angular';
import { AboutUserPageComponent } from './about-user-page/about-user-page.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppChartsModule } from './charts/appCharts.module';

import { HomepageComponent } from './homepage/homepage.component';
import { AlertComponent } from './alert/alert.component';
import { GasUsageCardComponent } from './cards/gas-usage-card/gas-usage-card.component';

const keycloakService: KeycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AlertComponent,
    AboutUserPageComponent,
    CallbackComponent,
    LogoutComponent,
    GasUsageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    NgxJsonViewerModule,
    GraphQLModule,
    HttpClientModule,
    AppChartsModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    }
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {

  ngDoBootstrap(appRef: ApplicationRef) {
    const keycloakConfig: KeycloakConfig = {
      url: 'http://localhost:8080/auth',
      realm: 'emon',
      clientId: 'emon-angular-client'
    };

    const loadingScreen = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1);
    });

    const kc = keycloakService
      .init({
        config: keycloakConfig,
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
        }
      })
      .then((loggedin) => {
        if (loggedin) {
          console.log('[ngDoBootstrap] Logged in cache detected');
        } else {
          keycloakService.login({
            redirectUri: window.location.origin + '/'
          });
        }
      })
      .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));

    Promise.all([
      kc,
      // loadingScreen
    ], ).then(() => {
      appRef.bootstrap(AppComponent);
    });
  }
}
