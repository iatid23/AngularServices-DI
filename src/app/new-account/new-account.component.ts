import { Component } from '@angular/core';
import { AccountService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountService]
})
export class NewAccountComponent  {
 

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  onCreatAccount(accountName: string, accountStatus:string){
    this.accountService.addAccount(accountName,accountStatus);
 
    this.loggingService.logStatusChange(accountStatus);
  }
  


}
