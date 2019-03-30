import { Component, OnInit, Input } from '@angular/core';
import * as formatNumber from 'simple-format-number';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  @Input() price: number = 0;
  @Input() heading: string = '';
  constructor() { }

  ngOnInit() {
  }
  getPrice() {
    return formatNumber(this.price);
  }
}
