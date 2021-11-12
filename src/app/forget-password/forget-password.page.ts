import { Component, OnInit }          from '@angular/core';
import { FormBuilder, 
         FormControl, 
         FormGroup, 
         Validators, 
         FormsModule }                from '@angular/forms';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  public emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  form: FormGroup;
  public email: string;
  public emailSendMessage: string = 'Email para redefinir senha enviado ao seu email';
  public errorMessage: string = 'Email não cadastrado';
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private formBuilder: FormBuilder,
              private _messageService: MessageService) { }

  ngOnInit() {
    this.validateFormFields();
  }

  validateFormFields() {
    this.form = this.formBuilder.group({
      email: [this.email, Validators.pattern(this.emailValidator)],
    });
  }

  emailSend() {
    this._messageService.showMessage(this.emailSendMessage, 5000)
  }

  error() {
    this._messageService.showMessage(this.errorMessage, 5000);
  }


  

}
