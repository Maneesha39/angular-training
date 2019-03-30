import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-loginalerts',
  templateUrl: './loginalerts.component.html',
  styleUrls: ['./loginalerts.component.css']
})
export class LoginalertsComponent implements OnInit {
  @Input() success;
  @Input() message;
  constructor() { }

  ngOnInit() {
  }
  isValid() {
    return this.success;
  }
  isDefined() {
    return this.success !== undefined;
  }
}
