import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


/**
 * @title Basic button-toggles
 */
@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: 'button-toggle-overview-example.html',
  styleUrls: ['button-toggle-overview-example.css'],
})
export class ButtonToggleOverviewExample {
  constructor(
     private _router: Router
   ){}

  buttonSelected(event) {
    alert(event.value)
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */