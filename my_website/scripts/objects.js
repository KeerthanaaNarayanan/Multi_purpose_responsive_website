var keerthanaa = {
  firstName : 'Keerthanaa',
  lastName : 'Narayanan',
  birthYear : '1996',
  expert : ['frontend', 'networking', 'oracle', 'python', 'testing'],
  relationship: 'single',
  boyfriend: 'vaaipilla raja',
  occupation : 'teacher'
};
console.log(keerthanaa);

// printing the value of a key in the object...
console.log(keerthanaa.lastName);
console.log(keerthanaa['birthYear']);

//assigning it to another variable...
var x = 'boyfriend';
console.log(keerthanaa[x]);

keerthanaa.occupation = 'designer';
keerthanaa['boyfriend'] = 'joel';
console.log(keerthanaa);

// new object...
var hari =new Object();
hari.firstName = 'HariPrasath';
hari.lastName = 'Narayanan';
hari['birthYear'] = 2001;

console.log(hari);

// objects and functions
var kenben = {
  firstName : 'ken',
  lastName : 'ben',
  birthYear : '1996',
  expert : ['frontend', 'networking', 'oracle', 'python', 'testing'],
  relationship: 'single',
  boyfriend: 'vaaipilla raja',
  occupation : 'teacher',
  calcAge : function(birthYear){
    return 2019 - birthYear;
  }
};

console.log(kenben.calcAge(kenben.birthYear));

// this pointer inside object means it is telling about the object...
var joel = {
  firstName : 'joel',
  lastName : 'joseph',
  birthYear : '1992',
  relationship: 'single',
  calcAge : function(){
    return 2019 - this.birthYear;
  }
};

console.log(joel.calcAge());

// for saving the key inside the object instead of "return" we can use "this" there too...
var sharmi = {
  firstName : 'sharmi',
  lastName : 'magesh',
  birthYear : 1996,
  calcAge : function(){
    this.age = 2018 - this.birthYear;
  }
};
sharmi.calcAge();
console.log(sharmi);
