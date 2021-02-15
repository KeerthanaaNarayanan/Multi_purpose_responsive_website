function tipCalculator(bill){
  var tip;
  switch(true){
    case bill < 50:
    tip = bill * (20/100);
    console.log('<50 is used for ' + bill);
    break;
    case bill >= 50 && bill <= 200:
    tip = bill * (15/100);
    console.log('>=50 to <= 200 is used for ' + bill);
    break;
    default:
    tip = bill * (10/100);
    console.log('default is used for ' + bill);
    break;
  }
return tip;
}
var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])];
var total = [ bill[0] + tips[0],
              bill[1] + tips[1],
              bill[2] + tips[2]];
console.log('the tip he has to pay for ' + bill + ' is ' + tips);
console.log('the total amount he has to pay for ' + bill + ' is ' + total);
