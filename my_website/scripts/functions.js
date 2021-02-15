function age(birthYear){
  return 2019 - birthYear;
  // return, returns the result back to where it is called.
}
var kenAge = age(1996);
console.log('ken\'s age is ' + kenAge);

function retire(birthYear, firstName){
  var age = 2019 - birthYear;
  var retires = 60 - age;
  console.log(firstName + ' retires in ' + retires + ' years.');
}
var name = 'keerthanaa';
var year = 1996;
retire(year, name);

// arrays
// initializing an array...
var marks = [90, 91, 92, 93];
console.log(marks);

// mutating an Array
marks[1] = 78;
console.log(marks + ' after changing the array[1] element.');
marks[6] = 99;
console.log(marks + ' after adding an element in 6th position.');
marks[marks.length] = 89;
console.log(marks + ' after adding in length position.');

// different datatypes..
var array1 = ['keerthanaa', 'narayanan', '22', 'single', 'false'];
var array2 = new Array('Hari', 'Prasath', '18', 'single', 'false');
console.log(array1, array2);
console.log(array1.length);

// array functions some of them..
/********************
push: add element to the end.
unshift: adds an element in the first.
pop: deletes the last elememt.
shift: removes the first element.
********************/
console.log(marks + 'before using functions');
marks.push(123);
console.log(marks + 'after pushing 123');
marks.unshift(1);
console.log(marks + 'after unshifting 1');
marks.pop();
console.log(marks + 'after poping');
marks.shift();
console.log(marks + 'after shifting');
