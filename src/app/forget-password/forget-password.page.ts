import { Component, OnInit }          from '@angular/core';
import { FormBuilder, 
         FormControl, 
         FormGroup, 
         Validators, 
         FormsModule }                from '@angular/forms';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  public emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  form: FormGroup;
  public email: string;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private formBuilder: FormBuilder,
              private _userMessage: MatSnackBar) { }

  ngOnInit() {
    this.validateFormFields();
  }

  validateFormFields() {
    this.form = this.formBuilder.group({
      email: [this.email, Validators.pattern(this.emailValidator)],
    });
  }

  emailSend() {
    this._userMessage.open('Email para redefinir senha enviado ao seu email', '',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5 * 1000,
   });
  }

  error() {
    this._userMessage.open('Email não cadastrado', '',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5 * 1000,
   });
  }


  

}
