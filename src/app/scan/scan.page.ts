import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router }                    from '@angular/router';
import { Location }                                  from '@angular/common';
import jsQR                                          from 'jsqr';
import { UserService }                               from '../services/user.service';
import { ParkingService }                            from '../services/Parking.service';
import { RequestsService }                           from '../services/requests.service';
import { HttpClient, HttpParams }                    from '@angular/common/http';
import { FinancialService }                          from '../services/financial.service';
import { MessageService }                            from '../services/message.service';

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
  public userId: number;
  public entranceQrCode: string;
  public exitQrCode: string;
  public qrCode: string;
  public lease: string;
  public messageBlock: string = `Você não tem uma locação ativa, verifique seus dados!
  no caso de mais 2 tentativas de acesso seu usuário será bloqueado por 15 dias`;
  public messageRevision: string = `Verifique se o código escaneado está correto ou tente de um novo angulo e iluminação! 
  Caso o erro persista dirija se ao atendimento para liberarem o acesso. Obrigado.`;
  public tryNumber: number = 0;
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;


  constructor(private router: Router,
              private location: Location,
              public route: ActivatedRoute,
              public _user: UserService,
              private _messageService: MessageService,
              private apiService: RequestsService,
              public parkingService:ParkingService,
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
      this.userId = user.id;
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
        let scanDate = new Date();
        let QRData = {
          'user_id': this.userId,
          'date': scanDate,
          'QrCode': qrCode.data
        }
        this.scanResult = qrCode.data;
        this.reset();
        if (this.validateQrCode(QRData)) {
          this.acceptQrCode(qrCode.data);
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
    this.tryNumber += 1;
    this._messageService.showMessage(this.messageBlock, 7000);
  }

  revisionMessage() {
    this._messageService.showMessage(this.revisionMessage, 7000);
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

  acceptQrCode(data) {
    if (this.activeEntrance) {
      this.parkingService.codeToEnter(data).subscribe(response => {
        if (response['mensagem'] == "true") {
          this.router.navigate(['/tabs/QRCode', { entrance: true, skipLocationChange: true }]);
        }
        else {
          this._messageService.showMessage(response['mensagem'], 7000);
        }
      });
    }
    if (this.activeExit) { 
      this.parkingService.codeToExit(data).subscribe(response => {
        if (response['mensagem'] == "true") {
          this.router.navigate(['/rating-page', { exit: true, skipLocationChange: true }]);
        }
        else {
          this._messageService.showMessage(response['mensagem'], 7000);
        }
      });
    }
  }

  rejectEntranceCode() {
    this.router.navigate(['/tabs/QRCode']);
    if (this.activeEntrance && this.entranceQrCode != this.qrCode && !this.lease || 
      this.activeEntrance && this.entranceQrCode == this.qrCode && !this.lease)
      this.blockMessage()
    else if (this.activeEntrance && this.entranceQrCode  != this.qrCode && this.lease ||
             this.activeEntrance && this.entranceQrCode  == this.qrCode && this.lease)
      this.revisionMessage();
  }

  rejectExitCode() {
    this.router.navigate(['/tabs/QRCode']);
    if (this.activeExit && this.exitQrCode  != this.qrCode && !this.lease ||
      this.activeExit && this.exitQrCode  == this.qrCode && !this.lease)
      this.blockMessage()
    else if (this.activeExit && this.exitQrCode  != this.qrCode && this.lease ||
            this.activeExit && this.exitQrCode  == this.qrCode && !this.lease)
      this.revisionMessage();
  }
  

}
