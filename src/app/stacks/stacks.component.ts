import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit {
  @Input() count = 0;
  @Input() title = ''; // input values
  @Input() iconClass = '';
  @Input() color = "black"; // default values

  constructor() { }

  ngOnInit() {
  }
  getStyle() {
    return {
      'font-size': '50px',
      'color': this.color
    }
  }
}
