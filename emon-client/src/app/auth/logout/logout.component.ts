import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly keycloakService: KeycloakService,
    private readonly router: Router,
    private readonly apollo: Apollo
    ) { }

  ngOnInit() {
    this.apollo.getClient().resetStore();
    this.keycloakService.logout();
    this.router.navigate(['/']);
  }

}
