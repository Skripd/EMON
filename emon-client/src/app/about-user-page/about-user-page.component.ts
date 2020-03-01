import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-about-user-page',
  templateUrl: './about-user-page.component.html',
  styleUrls: ['./about-user-page.component.scss']
})
export class AboutUserPageComponent implements OnInit {

  profile: KeycloakProfile;

  constructor(private readonly keycloakService: KeycloakService) {

  }

  async ngOnInit() {
    await this.keycloakService.loadUserProfile().then((value) => {
      this.profile = value;
      // console.log(this.profile);
      // console.log(JSON.stringify(this.profile));
    });
  }

}
