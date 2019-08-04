import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonToggleOverviewExample } from '../button-toggle-overview-example';
const authRoutes: Routes = [
  { path: 'buttonToggle', component: ButtonToggleOverviewExample }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRouter {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/