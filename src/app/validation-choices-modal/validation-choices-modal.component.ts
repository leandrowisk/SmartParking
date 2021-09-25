import { Component, OnInit, Inject }               from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef }           from '@angular/material/dialog';
import { Router }                                  from '@angular/router';

@Component({
  selector: 'app-validation-choices-modal',
  templateUrl: './validation-choices-modal.component.html',
  styleUrls: ['./validation-choices-modal.component.scss'],
})
export class ValidationChoicesModalComponent implements OnInit {

  public activeEntrance: boolean = false;
  public activeExit: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<ValidationChoicesModalComponent>,
              public router : Router
  ){ 
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  activeByCode() {
    if (this.data.action == 'activeEntrance') {
      this.activeEntrance = true;
      this.router.navigate(['/code', {activeEntrance: this.activeEntrance}]);
    }
    else if (this.data.action == 'activeExit') {
      this.activeExit = true;
      this.router.navigate(['/code', {activeExit: this.activeExit}]);
    }
    
    this.dialogRef.close();
  }

  activeByQrCode() {
    if (this.data.action == 'activeEntrance') {
      this.activeEntrance = true;
      this.router.navigate(['/scan',  {activeEntrance: this.activeEntrance}]);
    } 
    else if (this.data.action == 'activeExit') {
      this.activeExit = true;
      this.router.navigate(['/scan', {activeExit: this.activeExit}]);
    }
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
