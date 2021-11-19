import { Component }                                from '@angular/core';
import { Router }                                   from '@angular/router';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition }              from '@angular/material/snack-bar';
import { MessageService } from '../services/message.service';
import { ParkingService }    from '../services/Parking.service';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.page.html',
  styleUrls: ['./rating-page.page.scss'],
})

export class RatingPage{

  public congratulationsMessage: string = 'Obrigado pela sua avaliação!';
  public revisionMessage: string = 'Você não deixou uma avaliação. Selecione no mínimo uma estrela.';
  currentRate: number = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private router: Router,
              public parkingService:ParkingService,
              private _messageService: MessageService
  ) { }

  public rate() {
    if (this.currentRate != 0) {
      this.parkingService.publishRating(this.currentRate).subscribe(response => {
        if (response['mensagem'] == "true") {
          this.router.navigate(['/tabs/home']);
          this._messageService.showMessage(this.congratulationsMessage, 5000);
        }
        else {
          this._messageService.showMessage(response['mensagem'], 5000);
        }
      });
    } else {
      this._messageService.showMessage(this.revisionMessage, 5000)
    }
  }

  createStars(lenght: number): Array<number> {
    if (lenght > 0) {
      return new Array(lenght);
    }
    
  }
} 


