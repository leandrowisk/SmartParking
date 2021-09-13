import { Component, EventEmitter, OnInit, Output }        from '@angular/core';
import { User }                     from '../interfaces/User';
import { ParkingService }           from '../services/Parking.service';
import { Users }                    from '../mocks/Parking-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(public service: ParkingService,
              public router: Router) {}
  @Output() message = new EventEmitter<string>();
  public user: User;
  
  public sex = '';
  
  hide = true;
  
  ngOnInit() {
    this.user = <User>{};
    this.user.nome = '';
    this.user.endereco = '';
    this.user.senha = ''; 
    this.user.sexo = '';
    this.user.cpf = ''; 
    this.user.data_de_nascimento = '';
    this.user.email = '';
  }

  passMessage() {
    this.message.emit("funcionou");
    this.router.navigate(['/finish-register'])
  }

  save() {
    this.service.register(this.user);
  }

}
