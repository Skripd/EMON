import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart-hourly-card',
  templateUrl: './barchart-hourly-card.component.html',
  styleUrls: ['./barchart-hourly-card.component.scss']
})
export class BarchartHourlyCardComponent implements OnInit {

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
