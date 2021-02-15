// console.log for printing in concole...
console.log('Hello World!!!');

// this is a single line comment...

/**********************************
here goes the comment...
this is a multi line comment
***********************************/
// declaring variables like string number boolean undefined...
var firstName = 'keerthanaa';
var lastName = 'Narayanan';
var age = 22;
var married = false;
var boyFriend;

// alert will give a pop up...
alert(firstName + ' ' + lastName + ' ' + age + ' ' + married + ' ' + boyFriend);

// prompt will ask for answer in pop up...
var frnd = prompt('what is your name?');
console.log('Welcome ' + frnd + ' to keerthanaa\'s website');

// basic math operators...
var year = 2019;
var yearKen, yearHari, yearRaji, yearNara;
yearKen = 1996;
yearHari = 2001;
yearRaji = 1973;
yearNara = 1971;
var ageKen = year - yearKen;
var ageHari = year - yearHari;
var ageRaji = year - yearRaji;
var ageNara = year - yearNara;
console.log(yearKen + ' ' + yearHari + ' ' + yearRaji + ' ' + yearNara);
console.log(ageKen + ' ' + ageHari + ' ' + ageRaji + ' ' + ageNara);

// logical operators...
var kenOlder = ageHari < ageKen;
console.log(kenOlder);

// typeof operator gives the type of the variable...
console.log(typeof firstName);
console.log(typeof year);
console.log(typeof married);
console.log(typeof boyFriend);

// operator precedence...
var age = 23;
var fullAge = year - yearKen >= age;
console.log(fullAge);

// multiple assignments...
var x, y;
x = y = (3 + 2) * 6 - 1;
console.log(x, y);

// more operators...
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
