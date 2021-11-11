import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router }                    from '@angular/router';
import { Location }                                  from '@angular/common';
import jsQR                                          from 'jsqr';
import { UserService }                               from '../services/user.service';
import { ParkingService }                            from '../services/Parking.service';
import { MatSnackBar, 
         MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition }               from '@angular/material/snack-bar';
import { RequestsService }                           from '../services/requests.service';
import { HttpClient, HttpParams }                    from '@angular/common/http';
import { FinancialService }                          from '../services/financial.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  public entrance: boolean = false;
  public activeEntrance: boolean = false;
  public activeExit: boolean = false;
  public exit: boolean = false;
  public scanResult = null;
  public loading = true;
  public today = new Date();
  public userName: string;
  public entranceQrCode: string;
  public exitQrCode: string;
  public qrCode: string;
  public lease: string;
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router,
              private location: Location,
              public route: ActivatedRoute,
              public _user: UserService,
              private _userMessage: MatSnackBar,
              private apiService: RequestsService,
              private httpClient: HttpClient,
              private _financialService: FinancialService
  ) { }
 

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  ngOnInit() {
    let activeEntrance = this.route.snapshot.paramMap.get('activeEntrance');
    let activeExit = this.route.snapshot.paramMap.get('activeExit');
    this.getUser();
    if (activeEntrance)
      this.scanEntrance();
    else if (activeExit)
      this.scanExit();

  }

  getUser() {
    this._user.getUser().subscribe(user => {
      this.userName = user.name;
    });
  }

  async scanEntrance() {
    this.activeEntrance = true;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    });
    this.videoElement.srcObject = stream
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this))
    this.loading = false;
  }

  async scanExit() {
    this.activeExit = true;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    });
    this.videoElement.srcObject = stream
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
    this.loading = false;
  }

  scan() {
    if(this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height,
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const qrCode = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert'
      });

      if (qrCode) {
        this.qrCode = qrCode.data;
        let scanDate = `${this.today.getHours()}':'${this.today.getMinutes()}':'${this.today.getSeconds()}`;
        let QRData = {
          'user_name': this.userName,
          'date': scanDate,
          'QrCode': qrCode.data
        }
        this.scanResult = qrCode.data;
        this.reset();
        if (this.validateQrCode(QRData)) {
          this.acceptQrCode();
        }
      } else {
        requestAnimationFrame(this.scan.bind(this))
      }
    } else {
      if (this.activeEntrance || this.activeExit)
        requestAnimationFrame(this.scan.bind(this))
    }
  }

  stopScan() {
    if (this.activeEntrance)
      this.router.navigate(['/tabs/QRCode', {entrance: true}]);
    if (this.activeExit)
      this.router.navigate(['/rating-page', {exit: true}]);
    this.activeEntrance = false;
    this.activeExit = false;
    this.reset();
  }

  reset() {
    this.scanResult = null;
    this.videoElement = this.video.nativeElement.srcObject.getTracks()[0].stop();
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }
  
  close() {
    this.reset();
    this.location.back();
  }


  blockMessage() {
    this._userMessage.open(`Você não tem uma locação ativa, verifique seus dados!
     no caso de mais 2 tentativas de acesso seu usuário será bloqueado por 15 dias`, '',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:  10000
   });
  }

  revisionMessage() {
    this._userMessage.open(`Verifique se o código escaneado está correto ou tente de um novo angulo e iluminação! 
    Caso o erro persista dirija se ao atendimento para liberarem o acesso. Obrigado.`, '',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:  10000
   });
  }

  validateQrCode(qrCode: Object): any {
    // this._financialService.validateQrCode(qrCode).subscribe(accept => {
    //   if (accept)
    //     return true
    //   else
    //     return false
    // });
    return true;
  }

  acceptQrCode() {
    if (this.activeEntrance && this.qrCode == this.entranceQrCode && this.lease) {
      this.router.navigate(['/tabs/QRCode', { entrance: true, skipLocationChange: true }]);
      this.activeEntrance = false;
      this.entrance = true;
      this.stopScan();
    }
    else
      this.rejectEntranceCode();
    if (this.activeExit && this.qrCode == this.exitQrCode && this.lease) { 
      this.activeExit = false;
      this.exit = true;
      this.router.navigate(['/rating-page', { exit: true, skipLocationChange: true }]);
      this.stopScan();
    } 
    else 
      this.rejectExitCode();
    
  }


  rejectEntranceCode() {
    if (this.activeEntrance && this.entranceQrCode != this.qrCode && !this.lease || 
      this.activeEntrance && this.entranceQrCode == this.qrCode && !this.lease)
      this.blockMessage()
    else if (this.activeEntrance && this.entranceQrCode  != this.qrCode && this.lease ||
             this.activeEntrance && this.entranceQrCode  == this.qrCode && this.lease)
      this.revisionMessage();
  }

  rejectExitCode() {
    if (this.activeExit && this.exitQrCode  != this.qrCode && !this.lease ||
      this.activeExit && this.exitQrCode  == this.qrCode && !this.lease)
      this.blockMessage()
    else if (this.activeExit && this.exitQrCode  != this.qrCode && this.lease ||
            this.activeExit && this.exitQrCode  == this.qrCode && !this.lease)
      this.revisionMessage();
  }
  

}
