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

  currentRate: number = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private router: Router,
              private _userMessage: MatSnackBar
  ) { }

  public rate() {
    if(this.currentRate != 0){
      this.router.navigate(['/tabs/home']);
      this._userMessage.open('Obrigado pela sua avaliação!', '',{
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
         duration: 5 * 1000
      });
    } else {
      this._userMessage.open('Você não deixou uma avaliação', '',{
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
         duration: 5 * 1000
      });
    }
  }

  createStars(lenght: number): Array<number> {
    if (lenght > 0) {
      return new Array(lenght);
    }
    
  }
} 


