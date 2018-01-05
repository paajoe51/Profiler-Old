import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdduserPage} from '../adduser/adduser'



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
  home: any;
  adduser: any;
  allprofiles: any;
  about:any;

 // intro:any;
 



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //  this.intro= IntroPage;
  
    
    this.adduser ="AdduserPage";
    this.allprofiles="AllprofilesPage";
    this.about="AboutPage";

    //this.home=("HomePage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  gotoAddprofile(){
    this.navCtrl.push(AdduserPage);
  }

  gotoAllprofile(){
    this.navCtrl.push("AllprofilesPage");
  }
}
