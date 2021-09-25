import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router }                    from '@angular/router';
import { Location }                                  from '@angular/common';
import jsQR                                          from 'jsqr';

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
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  constructor(private router: Router,
              private location: Location,
              public route: ActivatedRoute,
  ) { }
 

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  ngOnInit() {
    let activeEntrance = this.route.snapshot.paramMap.get('activeEntrance');
    let activeExit = this.route.snapshot.paramMap.get('activeExit');
    if (activeEntrance)
      this.scanEntrance();
    else if (activeExit)
      this.scanExit();

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

        if (this.activeEntrance){
          this.activeEntrance = false;
          this.entrance = true;
          this.router.navigate(['/tabs/QRCode', {entrance: this.entrance}]);
          this.stopScan();
        }
        else if (this.activeExit){
           this.activeExit = false;
           this.exit = true;
           this.router.navigate(['/rating-page', {exit: this.exit}]);
        }
        
        this.scanResult = qrCode.data;
        this.reset();
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

}
