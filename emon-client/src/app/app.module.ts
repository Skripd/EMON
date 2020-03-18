import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { KeycloakAngularModule, KeycloakService, KeycloakConfig } from 'keycloak-angular';
import { CallbackComponent } from './auth/callback/callback.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppChartsModule } from './charts/appCharts.module';

import { AlertComponent } from './alert/alert.component';
import { AboutUserPageComponent } from './about-user-page/about-user-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const keycloakService: KeycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AlertComponent,
    AboutUserPageComponent,
    CallbackComponent,
    LogoutComponent,
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
      }, 3000);
    });

    const kc = keycloakService
      .init({
        config: keycloakConfig,
        initOptions: {
          onLoad: 'check-sso',
          promiseType: 'legacy',
          enableLogging: true,
          silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
        }
      })
      .then((loggedin) => {
        if (loggedin) {
          console.log('[ngDoBootstrap] Logged in cache detected');
          Promise.all([
            loadingScreen
          ]).then(() => {
            console.info('[ngDoBootstrap] [KEYCLOAK] Bootstrapping app now');
            appRef.bootstrap(AppComponent);
          })
        } else {
          keycloakService.login({
            redirectUri: window.location.origin + '/home'
          });
        }
      })
      .catch((reason) => {
        console.error('[ngDoBootstrap] init Keycloak failed.\n', reason);
      });//error => console.error('[ngDoBootstrap] init Keycloak failed', error));

    // Promise.all([
    //   kc,
    //   loadingScreen
    // ], ).then(() => {
    //   if(kc){
    //   } else {
    //     console.log('[ngDoBootstrap] [KEYCLOAK] Keycloak init false');
        
    //   }
    // });
  }

}
