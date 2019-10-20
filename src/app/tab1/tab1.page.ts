import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public joke = null;

  constructor(private http: HttpClient) {
    this.getJoke();
   }

  public getJoke(): void {
    this.http.get('https://geek-jokes.sameerkumar.website/api')
      .subscribe((response) => {
        console.log(response);
        this.joke = response;
      });
  }
}
