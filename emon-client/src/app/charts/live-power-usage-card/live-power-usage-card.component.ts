import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-power-usage-card',
  templateUrl: './live-power-usage-card.component.html',
  styleUrls: ['./live-power-usage-card.component.scss']
})
export class LivePowerUsageCardComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onLoadingEvent(e: boolean): void  {
    setTimeout(() => {
      this.loading = e;
    }, 0);
  }

}
