import { Component, OnInit }                from '@angular/core';

import { ActivatedRoute, Router }           from '@angular/router';
import { carBrand, carCategory, 
         carModel, User }                   from '../interfaces/User';
import { UserService }                      from '../services/user.service';
import { FormBuilder, 
         FormControl, 
         FormGroup, 
         Validators, 
         FormsModule }                      from '@angular/forms';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition }      from '@angular/material/snack-bar';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.page.html',
  styleUrls: ['./finish-register.page.scss'],
})
export class FinishRegisterPage implements OnInit {
  
  public user: User;
  public hide: boolean = true;
  public checked: boolean = false;
  public selectedCategory: string;
  public selectedModel: string;
  public selectedBrand: string;
  public validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  public form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _userService: UserService,
              private formBuilder: FormBuilder,
              private _userMessage: MatSnackBar
    ) { }

  ngOnInit() {
    this.user = JSON.parse(this.route.snapshot.params['user']);
    this.user.password = '';
    this.user.car = {
      model: {
        name: '',
        id: 0,
      },
      brand: {
        name: '',
        id: 0,
      },
      color: '',
      category: {
        name: '',
        id: 0
      },
      chassi: '',
      renavam: 3222,
      plaque: '123456',
  }
  // getCategories();
  this.validateFormFields();
}

  
  categories: carCategory[] = [
    { id: 1, name: 'Sedan' },
    { id: 2, name: 'Picape' },
  ]

  models: carModel[] = [
    { id: 1, name: 'Mustang' },
    { id: 2, name: 'Hilux' }
  ]

  brands: carBrand[] = [
    { id: 1, name: 'Chevrolet' },
    { id: 2, name: 'Fiat' }
  ]

  // getCategories() {
  //   this._userService.getCarCategories().subscribe(categories =>{
  //     this.categories.forEach(category =>
  //       this.categories.push(category))
  //   });
  // }

  getModel(category: any) {
    console.log('category', category)
  }

  validateFormFields() {
    this.form = this.formBuilder.group({
      category: [this.selectedCategory, Validators.required],
      brand: [this.selectedBrand, Validators.required],
      model: [this.selectedModel, Validators.required],
      chassi: [this.user.car.chassi, [Validators.required, Validators.minLength(17)]],
      plaque: [this.user.car.plaque, Validators.required],
      renavam: [this.user.car.renavam, [Validators.required, Validators.minLength(11)]],
      color: [this.user.car.color, [Validators.required, Validators.minLength(4)]],
      password:[this.user.password, [Validators.required, Validators.pattern(this.validatePassword)]]
    });
  }

  errorMessage() {
    this._userMessage.open('Dados inválidos verifique os campos e tente novamente', '',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
   });
  }

  finishRegister() {
    console.log(this.form);
    this.validateFormFields();
    if(this.form.status == 'VALID')
      this.router.navigate(['/tabs/home']);
    else
      this.errorMessage();
  }
}