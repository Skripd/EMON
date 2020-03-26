import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart-daily-card',
  templateUrl: './barchart-daily-card.component.html',
  styleUrls: ['./barchart-daily-card.component.scss']
})
export class BarchartDailyCardComponent implements OnInit {

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
