import { Component, OnInit } from '@angular/core';
import { GlobalAppService } from './global-app.service';
import { AppState } from './models/appState.model';
import { Subscription } from 'rxjs';
import { AlertService } from './alert/alert.service';
import { KeycloakService } from 'keycloak-angular';

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
    private readonly keycloakService: KeycloakService
  ) {
    this.appState$ = stateService.state.subscribe(rs => {
      this.appState = rs;
    });
  }

  async ngOnInit(): Promise<any> {
    this.email = (await this.keycloakService.loadUserProfile()).email;
  }
}
