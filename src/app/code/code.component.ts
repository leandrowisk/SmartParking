import { Component, OnInit }           from '@angular/core';
import { Location }                    from '@angular/common';
import { ActivatedRoute, Router }      from '@angular/router';
import { FinancialService }            from '../services/financial.service';
import { UserService }                 from '../services/user.service';
import { MessageService }              from '../services/message.service';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  public activeEntrance: boolean = false;
  public activeExit: boolean = false;
  public entrance: boolean = false;
  public entranceCode: number = 123456;
  public exitCode: number = 123456;
  public exit: boolean = false;
  public lease: boolean = false;
  public code: number;
  public userId: number;
  public messageRevision = `Verifique se o código digitado está correto! Caso o erro persista dirija se ao 
  atendimento para liberarem o acesso Obrigado.`;
  public messageBlock = `Você não tem uma locação ativa, verifique seus dados!
  no caso de mais 2 tentativas de acesso seu usuário será bloqueado por 15 dias`;
  public tryNumber: number = 0;

  constructor(public location: Location,
              public route: ActivatedRoute,
              public router: Router,
              private _messageService: MessageService,
              private _userService: UserService,
              private _financialService: FinancialService) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('activeEntrance'))
      this.activeEntrance = true;
    else if (this.route.snapshot.paramMap.get('activeExit'))
      this.activeExit = true;
  }

  close() {
    this.location.back()
  }

  acceptCode() {
    if (this.activeEntrance && this.code == this.entranceCode)
      this.router.navigate(['/tabs/QRCode', { entrance: true, skipLocationChange: true }]);
    else
      this.rejectEntranceCode();
    if (this.activeExit && this.code == this.exitCode)
        this.router.navigate(['/rating-page', { exit: true, skipLocationChange: true }]);
    else 
      this.rejectExitCode();
  }

  // getLease() {
  //   this._financialService.getLease(this.userId).subscribe(lease => {
  //     if (lease) 
  //       this.lease = true;
  //     else
  //       this.lease = false;
  //   })
  // }

  // getUser() {
  //   this._userService.getUser().subscribe(user => {
  //     this.userId = user.id;
  //   })
  // }

  blockMessage() {
    this.router.navigate(['/tabs/QRCode']);
    this.tryNumber += 1;
    this._messageService.showMessage(this.messageBlock, 7000);
  }

  revisionMessage() {
    this.router.navigate(['/tabs/QRCode']);
    this._messageService.showMessage(this.messageRevision, 7000);
  }
 
  rejectEntranceCode() {
    if (this.activeEntrance && this.code != this.entranceCode && !this.lease || 
      this.activeEntrance && this.code == this.entranceCode && !this.lease)
      this.blockMessage()
    else if (this.activeEntrance && this.code != this.entranceCode && this.lease ||
             this.activeEntrance && this.code == this.entranceCode && this.lease)
      this.revisionMessage();
  }
  rejectExitCode() {
    if (this.activeExit && this.code != this.exitCode && !this.lease ||
      this.activeExit && this.code == this.exitCode && !this.lease)
      this.blockMessage()
    else if (this.activeExit && this.code != this.exitCode && this.lease ||
            this.activeExit && this.code == this.exitCode && !this.lease)
      this.revisionMessage();
  }
  

}
