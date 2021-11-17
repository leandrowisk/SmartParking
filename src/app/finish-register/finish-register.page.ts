import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, Router }           from '@angular/router';
import { User }                             from '../interfaces/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.page.html',
  styleUrls: ['./finish-register.page.scss'],
})
export class FinishRegisterPage implements OnInit {
  
  public user: User;
  public hide: boolean = true;
  public checked: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _userService: UserService
    ) { }

  ngOnInit() {
    this.user = JSON.parse(this.route.snapshot.params['user']);
    this.user.password = '';
<<<<<<< Updated upstream
    this.user.car = {
      model: '',
      color: '',
      brand:  ''
    }
=======
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
/*
  finishRegister() {
    this.validateFormFields();
    if(this.form.status == 'VALID') 
      this.router.navigate(['/tabs/home']);
    else
      this.errorMessage();
  }
*/
  chooseCategory(category) {
    if (category)
      this.selectedCategory = category;
>>>>>>> Stashed changes
  }
  
   
   finishRegister() {
     this._userService.register(this.user).subscribe(response => {
     if (response['mensagem'] == 'true') {
        this.router.navigate(['/tabs/home']);
     }
     else
        alert(response['mensagem']);
     })
   }

 
   finishRegister() {
    this.user.password      = this.form.value.password;
    this.user.car.model	  	= this.form.value.model
    this.user.car.brand     = this.form.value.brand
    this.user.car.color     = this.form.value.color
    this.user.car.category  = this.form.value.category
    this.user.car.chassi    = this.form.value.chassi
    this.user.car.renavam   = this.form.value.renavam
    this.user.car.plaque    = this.form.value.plaque

     this._userService.register(this.user).subscribe(response => {
     if (response['mensagem'] == 'true') {
        this.router.navigate(['/login-page']);
     }
     else
<<<<<<< Updated upstream
        alert('erro ao cadastrar');
     })
   }
*/
 // finishRegister() {
 //   this.router.navigate(['/tabs/home']);
 // }
=======
        this._messageService.showMessage(response['mensagem'], 5000);
     })
   }
 
>>>>>>> Stashed changes
}