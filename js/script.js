for (let i = 0; i < 1; i++) {
   let number = +prompt("Введите четное число от 10 до 50", "");
   if (
      number < 10 ||
      number > 50 ||
      number % 2 != 0 ||
      number == null ||
      number == ""
   ) {
      console.log("Error");
      i--;
   } else {
      console.log(number / 2);
   }
}

console.log(+(0.1 + 0.2).toFixed(1));

let num_1 = "1",
   num_2 = 2;
console.log(+num_1 + num_2);

let valumeFlash = prompt("Введите объем флешки", "");
console.log(parseInt(valumeFlash));
console.log(
   `Поместится ${Math.trunc((parseInt(valumeFlash) * 1000) / 820)} файлов`
);

//-------шоколадки ----//

let amountOfManey = prompt("Сколько у вас денег в кошельке?", ""),
   chocolatePrice = prompt("Сколько стоит шоколадка?", "");

amount = Math.trunc(amountOfManey) * 100 + (amountOfManey % 1) * 100;
chocolate = Math.trunc(chocolatePrice) * 100 + (chocolatePrice % 1) * 100;
numberOfChocolates = Math.trunc(amount / chocolate);
surrenderOfMoney = amount - numberOfChocolates * chocolate;
console.log(
   `Вы можете купить ${numberOfChocolates} шоколадок, сдачи останется ${Math.trunc(
      surrenderOfMoney / 100
   )} гривен ${surrenderOfMoney % 100} копеек`
);
