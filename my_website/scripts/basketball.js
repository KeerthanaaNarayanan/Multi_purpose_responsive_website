var johnAvgScore = (89 + 120 + 103)/3;
var mikeAvgScore = (11 + 94 + 123)/3;
var marysAvgScore = (97 + 78 + 105)/3;

console.log('John\'s score is ' + johnAvgScore);
console.log('Mike\'s score is ' + mikeAvgScore);
console.log('Mary\'s score is ' + marysAvgScore);

if (johnAvgScore > mikeAvgScore && johnAvgScore > marysAvgScore){
  console.log('John is the winner');
}else if(mikeAvgScore > marysAvgScore){
  console.log('Mike is the winner');
}else{
  console.log('Mary is the winner');
}
