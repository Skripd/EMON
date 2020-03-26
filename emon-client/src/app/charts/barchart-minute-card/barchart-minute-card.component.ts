import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart-minute-card',
  templateUrl: './barchart-minute-card.component.html',
  styleUrls: ['./barchart-minute-card.component.scss']
})
export class BarchartMinuteCardComponent implements OnInit {

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
