import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.page.html',
  styleUrls: ['./register-card.page.scss'],
})
export class RegisterCardPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
