import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNewsProvider } from '../../providers/call-news/call-news'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CallNewsProvider]
})
export class HomePage {

  newsList=[];
  constructor(public navCtrl: NavController,
    public callNewsProvider: CallNewsProvider) {

  }

  ionViewDidLoad() {
    this.getNews();
  }

  getNews() {
    this.callNewsProvider.callNews()
      .subscribe(val => {
        this.newsList = val.articles;
        console.log(val.articles);
      },
      error => {
        console.log(error)
      },
    );
  }

}
