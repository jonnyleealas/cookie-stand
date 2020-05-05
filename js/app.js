'use strict';





var seattle = {
  minCus : 23,
  maxCus : 65,
  aveCookie: 6.3,
  cookiesSold:[],
  hours: [1,2,3,5,6,7,8,9,10,11,12,13,14],
  cookieMath: function(){
    cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
  }
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
  return[a*b];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var hours= [1,2,3,5,6,7,8,9,10,11,12,13,14];
//var cities= [seattle, tokyo, dubai, paris, lima];


//Random customers per hours
function cookiePerHour(arrayX,arrayY,perHour,min,max){
  for (var i=0; i <= arrayY.length; i++){
    var randomNum= getRandomIntInclusive(min,max);
    randomNum= multiply(randomNum,perHour);
    randomNum= Math.floor(randomNum);
    arrayX.push(randomNum);

  }
  return arrayX;
}

function sum(a, b) { //eslint-disable-line
  var add = a + b;

  return add;
}


function addAnyArray(poop){
  var product= 0;
  for(var i= 0; i < poop.length; i++){
    product = sum(poop[i],product);
  }
  poop.push(product);
}
seattle.cookieMath();
addAnyArray(seattle.cookiesSold);
seattle.cookiesSold;
console.log(seattle.cookiesSold);