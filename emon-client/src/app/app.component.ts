import { Component, OnInit } from '@angular/core';
import { GlobalAppService } from './global-app.service';
import { AppState } from './_models/appState.model';
import { Subscription } from 'rxjs';
import { AlertService } from './alert/alert.service';
import { KeycloakService } from 'keycloak-angular';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  email: string;

  appState$: Subscription;
  appState: AppState = {
    showAlert: false,
    showHeader: false,
    showSidenav: false,
    showSubnav: false,
  };

  constructor(
    private readonly stateService: GlobalAppService,
    private readonly alertService: AlertService,
    private readonly keycloakService: KeycloakService,
    private readonly themeService: ThemeService
  ) {
    this.appState$ = stateService.state.subscribe(rs => {
      this.appState = rs;
    });
  }

  async ngOnInit(): Promise<any> {
    this.email = (await this.keycloakService.loadUserProfile()).email;
  }

  setLightTheme(): void {
    this.themeService.setTheme(0);
  }

  setDarkTheme(): void {
    this.themeService.setTheme(1);
  }
}
