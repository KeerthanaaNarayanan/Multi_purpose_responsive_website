var kenMass, kenHeight, hariMass, hariHeight;
kenMass = hariMass = 55;
hariHeight = 1.8;
kenHeight = 1.6;
var bmiKen, bmiHari;
bmiKen = kenMass / kenHeight ** 2;
bmiHari = hariMass / hariHeight ** 2;
if (bmiKen > bmiHari){
  alert('BMI of Ken if higher than Hari');
} else {
  alert('BMI of Hari is higher than Ken');
}
