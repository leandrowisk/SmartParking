import { Component, OnInit }                from '@angular/core';

import { ActivatedRoute, Router }           from '@angular/router';
import { User }                             from '../interfaces/User';
import { UserService }                      from '../services/user.service';
import { FormBuilder,
         FormGroup, 
         Validators }                       from '@angular/forms';
import { MessageService }                   from '../services/message.service';

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
  public erroMessage: string = 'Dados inválidos verifique os campos e tente novamente';
  public registerErrorMessage = 'Erro ao cadastrar! Revise suas informações'

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _userService: UserService,
              private formBuilder: FormBuilder,
              private _messageService: MessageService
    ) { }

  ngOnInit() {
    this.user = JSON.parse(this.route.snapshot.params['user']);
    this.user.password = '';
    this.initializeCar();
    this.validateFormFields();
}


 initializeCar() {
  this.user.car = {
    model: '',
    brand: '',
    color: '',
    category: '',
    chassi: '',
    renavam: 0,
    plaque: '',
  }
 }

  validateFormFields() {
    this.form = this.formBuilder.group({
      category: [this.user.car.category, Validators.required],
      brand: [this.user.car.brand, Validators.required],
      model: [this.user.car.model, Validators.required],
      chassi: [this.user.car.chassi, [Validators.required, Validators.minLength(17)]],
      plaque: [this.user.car.plaque, Validators.required],
      renavam: [this.user.car.renavam, [Validators.required, Validators.minLength(11)]],
      color: [this.user.car.color, [Validators.required, Validators.minLength(4)]],
      password:[this.user.password, [Validators.required, Validators.pattern(this.validatePassword)]]
    });
  }

  errorMessage() {
    this._messageService.showMessage(this.erroMessage, 5000);
  }

  chooseCategory(category) {
    if (category)
      this.selectedCategory = category;
  }
  
   
finishRegister() {
    this.user.password = this.form.value.password;
    this.user.car.model = this.form.value.model
    this.user.car.brand = this.form.value.brand
    this.user.car.color = this.form.value.color
    this.user.car.category = this.form.value.category
    this.user.car.chassi = this.form.value.chassi
    this.user.car.renavam = this.form.value.renavam
    this.user.car.plaque = this.form.value.plaque

    this._userService.register(this.user).subscribe(response => {
     if (response['mensagem'] == 'true')
	    	this.router.navigate(['/login-page']);
     else
        this._messageService.showMessage(response['mensagem'], 5000);
     })
   }
}