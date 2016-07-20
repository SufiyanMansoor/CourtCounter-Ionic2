import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NgFor} from '@angular/common';

@Component({
 templateUrl: `build/pages/courtcounter/courtcounter.html`
})
export class CourtcounterPage {
    counter:number;
    counter1:number;

  constructor() {
    this.counter=0;
    this.counter1=0;
  }

  addCounter():void{
      this.counter++;

  }
  addCounter1():void{
      this.counter1++;

  }
}
