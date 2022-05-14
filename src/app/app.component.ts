import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})

export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[]; 


  constructor(private accountsService: AccountService) {
    
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts; // it is an refernce type so we can acceess the array imself on the service directly 
  }

}
