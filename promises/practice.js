let bill = 0;
let units = 310;
function billCalculate() {
  if (units > 100) {
    bill = 100 * 3;
    let ru = units - 100;
    //100-200
    if (ru >= 100) {
      bill += 100 * 5;
      ru = ru - 100;
    } else {
      bill += ru * 5;
    }
    //200-300
    if (ru >= 100) {
      bill += 100 * 7;
      ru = ru - 100;
    } else {
      bill += ru * 7;
    }
    //remaining units
    if (ru > 0) {
      bill += ru * 10;
    }
  }
  return bill;
}

console.log(billCalculate(units));
