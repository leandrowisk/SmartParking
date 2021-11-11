import { Component, OnInit }         from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { User }                      from '../interfaces/User';
import { Location }                  from '@angular/common';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition }   from '@angular/material/snack-bar';
import { FormBuilder, 
         FormGroup, 
         Validators,   
         FormControl }                   from '@angular/forms';
import { WebView }                       from '@ionic-native/ionic-webview/ngx';
import { Camera,
         CameraOptions }     from '@ionic-native/camera/ngx';
import { AlertController, 
         Platform }          from '@ionic/angular';


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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  form: FormGroup;
  public emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private _userMessage: MatSnackBar,
              private formBuilder: FormBuilder,
              private webView: WebView,
              private camera: Camera,
              private alertctrl: AlertController,
              private platform: Platform) { }

  ngOnInit() {
    if (this.platform.is('mobileweb'))
      this.mobileWeb == true;
    else
      this.mobile = true;
    this.acess = true;
    if (JSON.parse(this.route.snapshot.params['user']))
      this.user = JSON.parse(this.route.snapshot.params['user']);
    this.validateFormFields();
  }

  accept() {
    this.acess = false;
  }

  validateUser() {
    this.router.navigate(['/register-informations']);
    this._userMessage.open('Dados atualizados com sucesso!', '',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
   });
  }

  validateFormFields() {
    this.form = this.formBuilder.group({
      email: [this.user.email, Validators.pattern(this.emailValidator)],
      address: [this.user.address, Validators.required],
      brand: [this.user.car.brand, Validators.required],
      model: [this.user.car.model, Validators.required],
      color: [this.user.car.color, Validators.required]

    });
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
