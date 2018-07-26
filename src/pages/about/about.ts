import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNewsProvider } from '../../providers/call-news/call-news'
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [CallNewsProvider]
})
export class AboutPage {

  text:string;
  textTel;
  show_text:boolean = false;
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public callNewsProvider: CallNewsProvider) 
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  showText(text_view){
    this.show_text  = true;
    this.text = text_view;
    
  }

  saveTel(){
    this.callNewsProvider.addTel(this.textTel)
      .subscribe(val => {
        if(val){
          alert("Ok");
        }
      },
      error => {
        console.log(error)
      },
    );
  }

}
