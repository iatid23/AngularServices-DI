import { Component, Input} from '@angular/core';
import { AccountService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent{
  @Input() account: {name:string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
  
    this.accountService.updateStatus(this.id,status);
    this.loggingService.logStatusChange(status);
  }

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

}
