var ken = {
  name : 'Keerthanaa',
  weight: 52,
  height : 1.6,
  bmi : function(){
    this.bmi_value = this.weight/(this.height**2);
  }
};
ken.bmi();
console.log(ken);
var hari = {
  name : 'HariPrasath',
  weight : 60,
  height : 1.8,
  bmi : function(){
    this.bmi_value = this.weight/(this.height**2);
  }
};
hari.bmi();
console.log(hari);
if (hari.bmi_value > ken.bmi_value) {
  alert(hari.name + ' with bmi ' + hari.bmi_value + ' have the greater BMI!');
}
else{
  alert(ken.name + ' with bmi ' + ken.bmi_value + ' have the greater BMI!');
}
