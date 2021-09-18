import { Component }                                from '@angular/core';
import { Router }                                   from '@angular/router';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition }              from '@angular/material/snack-bar';


@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.page.html',
  styleUrls: ['./rating-page.page.scss'],
})

export class RatingPage{

  constructor(private router: Router,
              private _congratulationMessage: MatSnackBar
  ) { }

  currentRate: number = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public rate() {
    if(this.currentRate != 0){
      this.router.navigate(['/tabs/home']);
      this._congratulationMessage.open('Obrigado pela sua avaliação!', '',{
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
         duration: 5 * 1000
      });
    }
    }
} 


