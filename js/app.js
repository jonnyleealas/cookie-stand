'use strict';





var seattle = {
  minCus : 23,
  maxCus : 65,
  aveCookie: 6.3
};
var tokyo = {
  minCus: 3,
  maxCus: 24,
  aveCookie: 1.2
};

var dubai = {
  minCus: 11,
  maxCus: 38,
  aveCookie: 3.7
};

var paris = {
  minCus: 20,
  maxCus: 38,
  aveCookie: 2.3
};

var lima = {
  minCus: 2,
  maxCus: 16,
  aveCookie: 4.6
};
var seattle = {
  minCus : 23,
  maxCus : 65,
  aveCookie: 6.3
};
var tokyo = {
  minCus: 3,
  maxCus: 24,
  aveCookie: 1.2
};

var dubai = {
  minCus: 11,
  maxCus: 38,
  aveCookie: 3.7
};

var paris = {
  minCus: 20,
  maxCus: 38,
  aveCookie: 2.3
};

var lima = {
  minCus: 2,
  maxCus: 16,
  aveCookie: 4.6
};

function multiply(a,b){
  return(a*b);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var hours= [1,2,3,5,6,7,8,9,10,11,12,13,14];
//var cities= [seattle, tokyo, dubai, paris, lima];
var emptyArray= [];
function salmonArray(arrayX,arrayY){
  for (var i=0; i <= arrayY.length; i++){
    var randomNum = getRandomIntInclusive(8,19);
    arrayX.push(randomNum);

  }
  return arrayX;
}

console.log(salmonArray(emptyArray, hours));


