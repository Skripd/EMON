import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from './models/appState.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalAppService {

  private _state = new BehaviorSubject<AppState>(
    {
      showAlert: false,
      showSidenav: true,
      showHeader: true,
      showSubnav: false,
    });

    private datastore: { state: AppState } = {state: {
      showAlert: false,
      showSidenav: true,
      showHeader: true,
      showSubnav: false,
    }};

    readonly state = this._state.asObservable();

  constructor() { }

   public setHeader(state: boolean): void {
     this.datastore.state.showHeader = state;
     this.pingState();
   }

   public setSidenav(state: boolean): void {
    this.datastore.state.showSidenav = state;
    this.pingState();
   }

   public setAlert(state: boolean): void {
    this.datastore.state.showAlert = state;
    this.pingState();
   }

   public setSubnav(state: boolean): void {
    this.datastore.state.showSubnav = state;
    this.pingState();
   }

   public pingState(): void {
    this._state.next(Object.assign({}, this.datastore).state);
   }
}
