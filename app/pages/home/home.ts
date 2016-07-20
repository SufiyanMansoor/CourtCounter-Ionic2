import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CourtcounterPage} from '../courtcounter/courtcounter';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  // courtcounterPage=CourtcounterPage;

  constructor(private navController: NavController ) {
    
  }
  goTo(){
    this.navController.push(CourtcounterPage)
  }
}
