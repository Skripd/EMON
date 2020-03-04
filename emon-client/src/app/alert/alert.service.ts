import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Alert } from '../_models/alert.model';
import { GlobalAppService } from '../global-app.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alerts$ = new BehaviorSubject<Alert[]>([]);
  private datastore: { data: Alert[] } = { data: [] };
  readonly alerts = this.alerts$.asObservable();

  constructor(private appService: GlobalAppService) {
  }

  addAlert(text: string, type: string, closeable: boolean = true, globalAlert: boolean = true, button?: string): void {
    const alert: Alert = {
      uuid: uuidv4(),
      text,
      type,
      closeable,
      globalAlert,
      button
    };

    this.datastore.data.push(alert);
    this.appService.setAlert(true);
    this.alerts$.next(Object.assign({}, this.datastore).data);
  }

  removeAlert(uuid: string): void {
    this.datastore.data.forEach((alert, index) => {

      if (alert.uuid === uuid) {
        this.datastore.data.splice(index, 1);

        if (this.datastore.data.length < 1) {
          this.appService.setAlert(false);
        }
      }
    });
  }
}
