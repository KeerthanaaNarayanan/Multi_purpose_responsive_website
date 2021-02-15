var firstName = 'Lakshith';
var std = 1;
var age = 29;
if (std === 2){
  console.log('lakshith is studying second standard');
}
else{
  console.log('lakshith is studying first std');
}
if(age < 13){
  console.log(firstName + ' is a kiddo');
}else if(age >= 13 && age < 20){
  console.log(firstName + ' is a teenager');
}else if(age >= 20 && age <30){
  console.log(firstName + ' is an young man');
}else{
  console.log(firstName + ' is a family man');
}

var papa = 'swastika';
var papaAge = 21;
papaAge <=16 ? console.log(papa + ' goes to school') : console.log(papa + 'goes to college');

var ageKen = 22;
switch(true){
  case ageKen < 13:
  console.log('she is a kid');
  break;
  case ageKen >= 13 && age < 20:
  console.log('she is a teenager');
  break;
  case ageKen >= 20 && age < 30:
  console.log('she is a young lady');
  break;
  default:
  console.log('she is a lady');
  break;
}

// truthy and falsy values

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
console.log(height);
if (height){
  console.log(height  + ' it is defined');
}
else{
  console.log(height  + ' it is undefined');
}

height = 12;
console.log(height);
if (height){
  console.log(height  + ' it is defined');
}
else{
  console.log(height  + ' it is undefined');
}

height = ''
console.log(height);
if (height){
  console.log(height  + ' it is defined');
}
else{
  console.log(height  + ' it is undefined');
}

height = null;
console.log(height);
if (height){
  console.log(height  + ' it is defined');
}
else{
  console.log(height  + ' it is undefined');
}
height = 0;
console.log(height);
if (height){
  console.log(height  + ' it is defined');
}
else{
  console.log(height  + ' it is undefined');
}

// equality operators: the '==' is the equality operator which does type coercion
height = '23';
if(height == 23){
  console.log('the operator == does the type coercion');
}
