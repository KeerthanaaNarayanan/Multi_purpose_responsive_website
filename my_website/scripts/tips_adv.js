var john = {
  bill : [124, 48, 268, 180, 42],
  tips : [],
  total : []
};
function calc_tipAndTotal(john)
{
  for(var i = 0; i < john.bill.length; i++){
    if(john.bill[i] <= 50){
      john.tips[i] = john.bill[i]*(20/100);
    } else if(john.bill[i] > 50 && john.bill[i] < 200){
      john.tips[i] = john.bill[i]*(15/100);
    } else {
      john.tips[i] = john.bill[i]*(10/100);
    }
    john.total[i] = john.tips[i] + john.bill[i];
  }
}
calc_tipAndTotal(john);
console.log(john);

var jane = {
  bill : [77, 375, 110, 45],
  tips : [],
  total : []
};
function calc_tipAndTotal_jane(jane)
{
  for(var i = 0; i < jane.bill.length; i++){
    if(jane.bill[i] <= 100){
      jane.tips[i] = jane.bill[i]*(20/100);
    } else if(jane.bill[i] > 100 && jane.bill[i] < 300){
      jane.tips[i] = jane.bill[i]*(10/100);
    } else {
      jane.tips[i] = jane.bill[i]*(25/100);
    }
    jane.total[i] = jane.tips[i] + jane.bill[i];
  }
}
calc_tipAndTotal_jane(jane);
console.log(jane);
var average_john = 0;
var average_jane = 0;
for(i=0; i<john.bill.length; i++){
  average_john = average_john + john.tips[i];
}
average_john = average_john / john.bill.length;
console.log("john's average tip " + average_john);
for(i=0; i<jane.bill.length; i++){
  average_jane = average_jane + jane.tips[i];
}
average_jane = average_jane / jane.bill.length;
console.log("jane's average tip " + average_jane);
if (average_jane > average_john) {
  console.log("jane is paying more tips");
}else {
console.log("john is paying more tips");
}
