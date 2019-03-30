import { Component, OnInit, Input } from '@angular/core';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';

@Component({
  selector: 'app-productsdesc',
  templateUrl: './productsdesc.component.html',
  styleUrls: ['./productsdesc.component.css']
})
export class ProductsdescComponent implements OnInit {
  @Input() color;
  @Input() desc;
  @Input() image;
  @Input() code;
  @Input() price;
  constructor() { }

  ngOnInit() {
  }

}
