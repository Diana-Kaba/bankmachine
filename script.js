"use strict";
let card1 = {
  number: 1243456,
  name: "Diana",
  surname: "Kaba",
  code: 1905,
  account: 1000000,
  bank: "PrivatBank",
};

let card2 = {
    number: 3467351,
    name: "Marina",
    surname: "Ivanova",
    code: 3010,
    account: 1000,
    bank: "Monobank",
  };

let bankMachine1 = {
  number: 9876,
  showAccount: function (card) {
    alert(card.account);
  },
  getMoney: function (card, sum) {
    alert((card.account -= sum));
  },
  check: function (card) {
    let number = 1243456;
    let code = 1905;
    if (code == card.code && number == card.number) {
    //   return true;
    alert(card.account -= this.sum);
    } else {
        // return false;
        alert("Error!");
    }
  },
};

bankMachine1.showAccount(card1);
bankMachine1.getMoney(card1, 1000);
alert(bankMachine1.check(card1));
alert(bankMachine1.check(card2));