import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerusage-card',
  templateUrl: './powerusage-card.component.html',
  styleUrls: ['./powerusage-card.component.scss']
})
export class PowerusageCardComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  onLoadingEvent(e: boolean) {
    // Promise.resolve(this.loading = e);
    setTimeout(() => {
      this.loading = e;
    }, 0);
    // this.loading = e;
  }

}
