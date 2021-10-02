import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { User }              from '../interfaces/User';
import { Location }          from '@angular/common';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.page.html',
  styleUrls: ['./perfil-edit.page.scss'],
})
export class PerfilEditPage implements OnInit {
  public user: User;

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    if (JSON.parse(this.route.snapshot.params['user']))
      this.user = JSON.parse(this.route.snapshot.params['user']);
  }

  goBack() {
    this.location.back();
  }

}
