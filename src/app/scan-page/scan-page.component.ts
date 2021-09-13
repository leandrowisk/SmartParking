import { Component, OnInit, ViewChild, ElementRef, Output, Input} from '@angular/core';
import { Router }                                  from '@angular/router';
import { Location }                                from '@angular/common';
import jsQR                                        from 'jsqr';


@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.scss'],
})
export class ScanPageComponent implements OnInit {

  constructor(private router: Router,
              private location: Location) { }

  @Input() entrance: string;
  public activeEntrance: string;
  public activeExit: boolean = false;
  public exit: boolean = false;
  public scanResult = null;
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;


  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }


  ngOnInit() {
    console.log('entrance: ', this.entrance)
  }

  public recebeBoolean(message: string) {
     console.log('output: ', message)
  }

  async scanEntrance(active) {
    this.activeEntrance = active;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    });
    this.videoElement.srcObject = stream
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this))
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
          // this.activeEntrance = false;
          // this.entrance = true;
          this.router.navigate(['/tabs/QRCode']);
        }
        else if (this.activeExit){
           this.activeExit = false;
           this.exit = true;
           this.router.navigate(['/tabs/QRCode']);
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
    // this.activeEntrance = false;
    this.activeExit = false;
    this.reset();
  }

  reset() {
    this.scanResult = null;
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  close() {
    this.location.back();
  }

}
