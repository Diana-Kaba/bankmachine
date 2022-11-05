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

const bank = [card1, card2];

let bankMachine1 = {
  number: 9876,
  cards: bank,
  showAccount: function (card) {
    if (this.check(card)) {
      alert(card.account);
    } else {
      alert("Error");
    }
  },
  getMoney: function (card, sum) {
    if (this.check(card)) {
      alert((card.account -= sum));
    } else {
      alert("Error");
    }
  },
  check: function (card) {
    // let number = 1243456;
    // let code = prompt("Input code:");
    for (let i = 0; i < bank.length; i++) {
      if (bank[i].code == card.code && card.number == bank[i].number) {
        return true;
      }
    }
    return false;
  },
};

bankMachine1.showAccount(card1);
bankMachine1.getMoney(card1, 1000);
alert(bankMachine1.check(card1));
alert(bankMachine1.check(card2));
