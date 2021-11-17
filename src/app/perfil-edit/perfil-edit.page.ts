<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { User }              from '../interfaces/User';
import { Location }          from '@angular/common';
import { ParkingService }    from '../services/Parking.service';
=======
import { MessageService }            from './../services/message.service';
import { Component, OnInit }         from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { User }                      from '../interfaces/User';
import { Location }                  from '@angular/common';
import { FormBuilder, 
         FormGroup, 
         Validators,   
         FormControl }                   from '@angular/forms';
import { WebView }                       from '@ionic-native/ionic-webview/ngx';
import { Camera,
         CameraOptions }     from '@ionic-native/camera/ngx';
import { AlertController, 
         Platform }          from '@ionic/angular';
import { UserService }       from './../services/user.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.page.html',
  styleUrls: ['./perfil-edit.page.scss'],
})
export class PerfilEditPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
<<<<<<< Updated upstream
              private parkingService: ParkingService,) { }
<<<<<<< Updated upstream

=======
              
  public params: Object;
>>>>>>> Stashed changes
  public user: User =
  {
  "name": '',
  "email": '',
  "address": "",
  "cpf": "",
  "birthday": "",
  "sex": "",
  "car":{
      "color": "",
      "brand": "",
      "model": "" },
  "password": ""};

public car: User;

  ngOnInit() {
    if (JSON.parse(this.route.snapshot.params['user']))
      this.user = JSON.parse(this.route.snapshot.params['user']);
    this.getUser();
=======
              private router: Router,
              private _messageService: MessageService,
              private formBuilder: FormBuilder,
              private webView: WebView,
              private camera: Camera,
              private alertctrl: AlertController,
              private userService: UserService,
              private platform: Platform) { }

  ngOnInit() {
    this.initializeUser();
    if (this.platform.is('mobileweb'))
      this.mobileWeb = true;
    else
      this.mobile = true;
    this.acess = true;
    this.user = JSON.parse(this.route.snapshot.params['user']);
    this.validateFormFields();
  }

  
  initializeUser() {
    this.user =  {
      "id": 0,
      "name": '',
      "email": '',
      "address": "",
      "cpf": "",
      "birthday": "",
      "phone": '',
      "sex": "",
      "car":{
        "color": "",
        "category": '',
        "brand": '',
        "model": '',
        'renavam': 0,
        'plaque': '',
        'chassi': ''
    },
      "password": ""
>>>>>>> Stashed changes
  }

  getUser(): void{
    this.parkingService.getUser().subscribe(response => {
      this.user = response;
    })
<<<<<<< Updated upstream
=======
  }

<<<<<<< Updated upstream
  savePerfilEdits(): void{
    this.params = JSON.stringify(this.user);
    this.parkingService.savePerfilEdits(this.params).subscribe(response => {
      console.log(response);
    })
>>>>>>> Stashed changes
  }

=======
  validateUser() {
  }

  validateFormFields() {
    this.form = this.formBuilder.group({
      email: [this.user.email, Validators.pattern(this.emailValidator)],
      address: [this.user.address, Validators.required],
      brand: [this.user.car.brand, Validators.required],
      model: [this.user.car.model, Validators.required],
      color: [this.user.car.color, Validators.required],
      phone: [this.user.phone, Validators.required],
      password: [this.user.password, Validators.required]
    });
    // this.getUser();
  }

  // getUser(): void{
  //   this.parkingService.getUser().subscribe(response => {
  //     this.user = response;
  //   })
  // }

  save():void{
    this.user.password      = this.form.value.password;
    this.user.phone         = this.form.value.phone;
    this.user.email			    = this.form.value.email
    this.user.address       = this.form.value.address
    this.user.car.brand     = this.form.value.brand
    this.user.car.model     = this.form.value.model
    this.user.car.color     = this.form.value.color
    
    this.userService.updateUser(this.user).subscribe(response => {
      if (response["mensagem"]=="true"){
        this.router.navigate(['/tabs/options']);
        this._messageService.showMessage(this.sucessMessage, 5000)
      }else{
        console.log(response["mensagem"]);
        this._messageService.showMessage(response["mensagem"], 5000);
      }
    })
  }

  imageSelected(event) {
    this.selectedImage = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
          this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }
}

galeryOptions: CameraOptions = {
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  destinationType: this.camera.DestinationType.FILE_URI,
  quality: 100,
  allowEdit: true,
  encodingType: this.camera.EncodingType.JPEG || this.camera.EncodingType.PNG,
  mediaType: this.camera.MediaType.PICTURE,
  correctOrientation: true
}

async chooseImage() {
  let alert = await this.alertctrl.create({
    header: 'Selecionar imagem',
    buttons: [{
      text: 'Galeria',
      handler: () => {
        this.camera.getPicture(this.galeryOptions).then(res => {
          this.perfilImage = res;
        })
      }
    }]
  })

  await alert.present();
}

  
>>>>>>> Stashed changes
  goBack() {
    this.location.back();
  }

}
