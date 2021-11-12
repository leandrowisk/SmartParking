import { Component, OnInit }                from '@angular/core';

import { ActivatedRoute, Router }           from '@angular/router';
import { User }                             from '../interfaces/User';
import { UserService }                      from '../services/user.service';
import { FormBuilder, 
         FormControl, 
         FormGroup, 
         Validators, 
         FormsModule }                      from '@angular/forms';
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
   // getCategories();
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

  
  // categories: carCategory[] = [
  //   { id: 1, name: 'Sedan' },
  //   { id: 2, name: 'Picape' },
  // ]

  // models: carModel[] = [
  //   { id: 1, name: 'Mustang' },
  //   { id: 2, name: 'Hilux' }
  // ]

  // brands: carBrand[] = [
  //   { id: 1, name: 'Chevrolet' },
  //   { id: 2, name: 'Fiat' }
  // ]

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

  finishRegister() {
    this.validateFormFields();
    if(this.form.status == 'VALID')
      this.router.navigate(['/tabs/home']);
    else
      this.errorMessage();
  }

  chooseCategory(category) {
    if (category)
      this.selectedCategory = category;
  }
  
   
  //  finishRegister() {
  //    this._userService.register(this.user).subscribe(response => {
  //    if (response['mensagem'] == 'true') {
  //       this.router.navigate(['/tabs/home']);
  //    }
  //    else
  //       alert(response['mensagem']);
  //    })
  //  }

/* 
   finishRegister() {
     this._userService.register(this.user).subscribe(response => {
     if (response == 'Cadastro criado com sucesso!') {
        this.router.navigate(['/tabs/home']);
     }
     else
        this._messageService.showMessage(this.registerErrorMessage, 5000);
     })
   }
*/
}