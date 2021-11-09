import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { ActivatedRoute, Router }    from '@angular/router';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  public activeEntrance: boolean = false;
  public activeExit: boolean = false;
  public entrance: boolean = false;
  public exit: boolean = false;
  public code = 0;

  constructor(public location: Location,
              public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('activeEntrance'))
      this.activeEntrance = true;
    else if (this.route.snapshot.paramMap.get('activeExit'))
      this.activeExit = true;
  }

  close() {
    this.location.back()
  }

  aceptCode(event: any) {
    if (event.target.value.length == 8) {
      if (this.activeEntrance)
        this.router.navigate(['/tabs/QRCode', {entrance: true}]);
      if (this.activeExit)
        this.router.navigate(['/rating-page', {exit: true}]);
    }
  }

}
