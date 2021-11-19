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
import { ParkingService }    from '../services/Parking.service';
import { Parking }           from '../interfaces/Parking';
import { MatCheckbox }       from '@angular/material/checkbox';
import { Lease }             from '../interfaces/Lease';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.page.html',
  styleUrls: ['./perfil-edit.page.scss'],
})
export class PerfilEditPage implements OnInit {
  public user: User;
  public acess: boolean;
  public selectedImage;
  public perfilImage: any = "";
  public imageUrl: string = '../../assets/images/slack perfil.jpeg';
  public hide = true;
  public mobile: boolean = false;
  public mobileWeb: boolean = false;
  public sucessMessage: string = 'Dados atualizados com sucesso!'
  public form: FormGroup;
  public emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  public car: User;
  public params:any;
  public password:string;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private parkingService: ParkingService,
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
      this.getUser();
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
        "password": ""};
  }

  getUser(): void{
    this.parkingService.getUser().subscribe(response => {
      this.user = response;
    });
  }

  accept() {
    this.acess = false;
  }

  savePerfilEdits(): void{
    this.params = JSON.stringify(this.user);
    this.parkingService.savePerfilEdits(this.params).subscribe(response => {
      console.log(response);
    })
  }

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
  }

  save():void{
    this.user.password      = this.password;
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

  

  goBack() {
    this.location.back();
  }
}
