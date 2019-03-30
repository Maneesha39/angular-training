import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// var formatNumber = require('simple-format-number');
import * as formatNumber from 'simple-format-number';


@Component({
  selector: 'app-usersview',
  templateUrl: './usersview.component.html',
  styleUrls: ['./usersview.component.css']
})
export class UsersviewComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
  }

  ngOnInit() {
  }
  getId() {
    return formatNumber(this.id);
  }

}
