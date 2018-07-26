import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CallNewsProvider {

  newsApiLink :string = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=208008bbc6474ba29f18a7f2f1bc33b2"; 

  telLink = "http://localhost/ExApiMobile/index.php/Welcome/addTel";
  constructor(public http: Http) {
    console.log('Hello CallNewsProvider Provider');
  }

  callNews()
  {
    console.log('CallNews Fucntion');
    return this.http.get(this.newsApiLink).map((response:Response) => response.json());
  }


  addTel(tel){
    // console.log('CallNews Fucntion');
    let tel_text = JSON.stringify({tel});
    return this.http.post(this.telLink,tel_text).map((response:Response) => response.json());
  }



}
