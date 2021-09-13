import { Component, EventEmitter, Input, Output }  from '@angular/core';
import { Location }                                from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'qr-code',
  templateUrl: 'qr-code.page.html',
  styleUrls: ['qr-code.page.scss']
})
export class QRCodePage {

  constructor(private location: Location,
              private router: Router
              ) {}

  @Output() activeEntrance = new EventEmitter<string>();
  @Output() activeExit = new EventEmitter<boolean>();
  public entrance: string;
  @Input() exit: boolean = false;

  public Entrance(){
    this.activeEntrance.emit('TESTANDO');
    this.entrance = 'olá';
    this.router.navigate(['/scan']);
  }

  public Exit(){
    this.activeExit.emit(true);
  }

  goBack() {
    this.location.back();
  }
}
