import { Component }               from '@angular/core';
import { Location }                from '@angular/common';
import { ActivatedRoute, Router }  from '@angular/router';
import { NavController }           from '@ionic/angular';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA }               from '@angular/material/dialog';
import { ValidationChoicesModalComponent } from '../validation-choices-modal/validation-choices-modal.component';

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
              public dialog: MatDialog
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

  public openValidationChoices(action: string) {
    const dialogRef = this.dialog.open(ValidationChoicesModalComponent, {
      panelClass: 'custom-dialog-container',
      width: '300px',
      height: '300px',
      data: {
          action: action
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
