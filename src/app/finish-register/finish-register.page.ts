import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.page.html',
  styleUrls: ['./finish-register.page.scss'],
})
export class FinishRegisterPage implements OnInit {
  
  @Input() user: User;
  
  constructor() { }

  ngOnInit() {
  }

  public receiveMessage($message){
    console.log('chamou')
    console.log($message)
  }
}
