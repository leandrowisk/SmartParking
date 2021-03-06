import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  public changeSlide() {
     setTimeout(() => {
        this.slideOpts.initialSlide += 1
     }, 4000);
     
  }
}