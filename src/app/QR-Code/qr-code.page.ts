import { Component, EventEmitter, Input, Output }  from '@angular/core';
import { Location }                                from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'qr-code',
  templateUrl: 'qr-code.page.html',
  styleUrls: ['qr-code.page.scss']
})
export class QRCodePage {

  constructor(private location: Location,
              private router: Router,
              private navController: NavController,
              public route: ActivatedRoute,
              ) {}

  public activeEntrance: boolean = false;
  public activeExit: boolean = false;
  public entrance: boolean = false;
  public exit: boolean = false;

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('entrance'))
      this.entrance =  true;
    else if (this.route.snapshot.paramMap.get('exit'))
      this.exit = true;
  }

  Entrance(){
    this.activeEntrance = true;
    this.router.navigate(['/scan',  {activeEntrance: this.activeEntrance}]);
  }

  public Exit(){
    this.activeExit = true;
    this.router.navigate(['/scan', {activeExit: this.activeExit}]);
  }

  goBack() {
    this.location.back();
  }
}
