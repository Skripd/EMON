import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private readonly keycloakService: KeycloakService,
    private router: Router
    ) {}

  async ngOnInit() {
    console.log('callback');
    await this.keycloakService.isLoggedIn().then((rs) => {
      if (rs) {
        console.log('Routing to home');
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/auth/login']);
      }
    });
  }

}
