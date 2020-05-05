'use strict';





var seattle = {
  city: 'Seattle',
  minCus : 23,
  maxCus : 65,
  aveCookie: 6.3,
  cookiesSold:[],
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
  cookieMath: function(){
    cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
    addAnyArray(this.cookiesSold);
  },
  render: function(){
    render(this.hours,this.cookiesSold,this.city);
  }
};




var tokyo = {
  city:'Tokyo',
  minCus : 3,
  maxCus : 24,
  aveCookie: 1.2,
  cookiesSold:[],
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
  cookieMath: function(){
    cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
    addAnyArray(this.cookiesSold);
  },
  render: function(){
    render(this.hours,this.cookiesSold,this.city);
  }
};



var dubai = {
  city: 'Dubai',
  minCus : 11,
  maxCus : 38,
  aveCookie: 3.7,
  cookiesSold:[],
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
  cookieMath: function(){
    cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
    addAnyArray(this.cookiesSold);
  },
  render: function(){
    render(this.hours,this.cookiesSold,this.city);
  }
};



var paris = {
  city: 'Paris',
  minCus : 20,
  maxCus : 38,
  aveCookie: 2.3,
  cookiesSold:[],
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
  cookieMath: function(){
    cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
    addAnyArray(this.cookiesSold);
  },
  render: function(){
    render(this.hours,this.cookiesSold,this.city);
  }
};



var lima = {
  city: 'Lima',
  minCus : 2,
  maxCus : 16,
  aveCookie: 4.6,
  cookiesSold:[],
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
  cookieMath: function(){
    cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
    addAnyArray(this.cookiesSold);
  },
  render: function(){
    render(this.hours,this.cookiesSold,this.city);
  }
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
  for (var i=0; i < arrayY.length-1; i++){
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



function render(hours,cookies,city){
  var parent= document.getElementById('test');
  var cityName= document.createElement('h2');
  cityName.textContent= city;
  parent.appendChild(cityName);
  for( var i= 0; i < hours.length; i++){
    var listItem= document.createElement('li');
    listItem.textContent=(`${hours[i]}: ${cookies[i]}`);
    parent.appendChild(listItem);
  }

}
