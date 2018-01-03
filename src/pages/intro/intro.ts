import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  about:any;
  intro:any;
  allprofiles:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.intro="IntroPage";
    this.about="AboutPage";
    this.allprofiles="AllprofilesPage";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
