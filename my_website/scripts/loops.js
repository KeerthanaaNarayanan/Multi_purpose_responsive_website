var ken = ['Keerthanaa', 'narayanan', 1996, 'full stack developer', 'single'];

// for Loops
for (var i = 0; i < 5; i++){
  console.log(ken[i]);
}

// while loops
i = 0;
while(i<5){
  console.log(ken[i]);
  i++;
}

// continue and break statements...

for(i=0; i<5; i++){
  if (typeof ken[i] !== 'string') continue;
  console.log(ken[i]);
}

// break statement terminates the continuing loop and comes out, but continue continues to loop eventhough te condition fails...

for(i=0; i<5; i++){
  if(typeof ken[i] !== 'string') break;
  console.log(ken[i]);
}
