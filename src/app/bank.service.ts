import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
amount: any = '';
  constructor() {
    
   }
   account: any = {
    fname: 'Lou',
    lname: 'Sutton',
    age: 26,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'canada'
    },
    balance: 100.00,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd',
       
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
      
      


      
    ]
   };
   withdraw() {
    let withDrawnAmount = this.amount;
    let myBalance = this.account.balance;
    let dt = new Date();
    const newBalance = myBalance - withDrawnAmount
    this.account.balance = newBalance;
    this.account.transactions.unshift({
      date:"[" + dt.getDate() + "-" + (dt.getMonth()+ 1) + "-" + dt.getFullYear() + "]",
      type:'Withdrawal',
      amount: withDrawnAmount,
      currency: 'USD'
      })  
      console.log(this.account.transactions);
  };
  
  deposit() {
    let DepositAmount = this.amount;
    let myBalance = this.account.balance;
    let dt = new Date();
  
    const newBalance = myBalance + DepositAmount
    this.account.balance = newBalance;this.account.transactions.unshift({
      date:"[" + dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear() + "]",
      type:'Deposit',
      amount: DepositAmount,
      currency: 'USD'
    
    })
    console.log(this.account.transactions);
  
  }
  
  balanceInquiry() {
  
  console.log(this.account.transactions);
  }
  
  transactionsHistory() {
  let  ListofTrans = this
  }
  
  
   
   }; 

