import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
value;

withdraw() {
  this.bank.account.balance -= this.value
};
  constructor(public bank: BankService) { 

  }



  }

