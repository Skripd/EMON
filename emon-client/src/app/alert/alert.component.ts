import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Subscription, Observable } from 'rxjs';
import { Alert } from '../models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts$: Observable<Array<Alert>>;

  constructor(private alertService: AlertService) {
    this.alerts$ = this.alertService.alerts;
    // .subscribe(rs => {
    //   console.log('alert: ', rs);
    // });
  }

  ngOnInit() {
  }

  onClose(id: string) {
    this.alertService.removeAlert(id);
  }

}
