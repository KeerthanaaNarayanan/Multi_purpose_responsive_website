var object1 = {
  firstName : 'Keerthanaa',
  lastName : 'Narayanan',
  birthYear : 1996,
  calculateAge: function()
  {
    this.age = 2018 - this.birthYear;
    console.log(this);
  }
};
object1.calculateAge();
var object2 = {
  firstName : 'Joel',
  lastName: 'Joseph',
  birthYear: 1992,
};

/* borrowing functions from other objects...*/

object2.calculateAge = object1.calculateAge;
object2.calculateAge();

console.log(object1);
console.log(object2);
