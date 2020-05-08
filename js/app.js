'use strict';


// this is my new store constroctor
function StoreLocation(city,minCus,maxCus, aveCookie){
  this.city = city;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.cookiesSold = [];
  this.aveCookie = aveCookie;
  this.hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
  //this means everything inside of contructor
  arrayCities.push(this);
}

StoreLocation.prototype.cookieMath = function(){
  //console.log("we are here" , this.cookiesSold)
  cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
  addAnyArray(this.cookiesSold);
};

StoreLocation.prototype.render = function(){
  render(this.hours,this.cookiesSold,this.city);
};
// this has to be before var of cities
var arrayCities = [];

// "seattle": city, mincus, maxCus, cookies, aveCookie, hours, cookieMath(), render()
// the cities and their parameters

var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2 );

var dubai = new StoreLocation('Dubai', 11, 38, 3.7);


var paris = new StoreLocation('Paris', 20, 38, 2.3);
var lima = new StoreLocation('Lima', 2, 16, 4.6);
var seattle = new StoreLocation('Seattle', 23, 65, 6.3);

//an array of the cities arrays
// console.log(arrayCities);
renderTime(arrayCities[4].hours);
for (var i = 0; i < arrayCities.length; i++) {
  var whateveryouwant = arrayCities[i];
  // for each city, do the math dumbass computer;
  whateveryouwant.cookieMath();
  whateveryouwant.render();
}

// this is  my multiply function
function multiply(a,b){
  return[a*b];
}

//this is my random number calculator
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//var cities= [seattle, tokyo, dubai, paris, lima];


// var hours = [1,2,3,5,6,7,8,9,10,11,12,13,14];
//Random customers per hours with a for loop 
function cookiePerHour(arrayX,arrayY,perHour,min,max){
  for (var i=0; i < arrayY.length-1; i++){
    var randomNum= getRandomIntInclusive(min,max);
    randomNum= multiply(randomNum,perHour);
    randomNum= Math.ceil(randomNum);
    arrayX.push(randomNum);


  }
  return arrayX;
}
// this is my addition calculator
function sum(a, b) { //eslint-disable-line
  var add = a + b;
 return add;
}

// this adds arrays
function addAnyArray(poop){
  var product= 0;
  for(var i= 0; i < poop.length; i++){
    product = sum(poop[i],product);
  }
  poop.push(product);
}

function renderTime (timeHours){
  var parent = document.getElementById('test');
  var tableRow = document.createElement('tr');
  var th = document.createElement('th');
  //cant append a string
  tableRow.appendChild(th);
  // tableRow = document.createElement('tr');
  for(var i=0; i < timeHours.length; i++){
    // this creates a th for each i
    th = document.createElement('th');
    th.textContent = timeHours[i];
    // putting th inside of tablerow by appendingchild bitch
    tableRow.appendChild(th);
  }
  parent.appendChild(tableRow);

}


//function for render
function render(hours,cookies,city){
  // table => table row => td (cell)
  var parent= document.getElementById('test');
  var tableRowTwo = document.createElement('tr');
  var cityCell = document.createElement('th');
  cityCell.textContent = city;
  tableRowTwo.appendChild(cityCell);


  // // this gives me the hours in a loop for the table row
  // for( var i= 0; i < hours.length; i++){
  //   var timeCell = document.createElement('th');
  //   timeCell.textContent=(`${hours[i]}`);
  //   tableRow.appendChild(timeCell);
  // }


  //this gives me the numger of cookies in the table with one empty cell to align numbers.
  for (var j=0; j < cookies.length; j++){
    var salmonCookies = document.createElement('td');
    // if (j === ) {
    //   salmonCookies.textContent = '';
    // } else {
    salmonCookies.textContent = (`${cookies[j]}`);
    // }

    tableRowTwo.appendChild(salmonCookies);

  }


  parent.appendChild(tableRowTwo);
  // var cityName= document.createElement('h2');
  // cityName.textContent= city;
  // parent.appendChild(cityName);
  // for( var i= 0; i < hours.length; i++){
  //   var listItem= document.createElement('li');
  //   listItem.textContent=(`${hours[i]}: ${cookies[i]}`);
  //   parent.appendChild(listItem);
  // }



}


// this below is how you connect forms to java
document.getElementById('pizzapoop').addEventListener('submit',formSubmit);
function formSubmit(event){
  event.preventDefault();
  var city = event.target.city.value;
  var min = Number(event.target.min.value);
  var max = Number(event.target.max.value);
  var ave = Number(event.target.ave.value);
  new StoreLocation (city,min,max,ave);
  arrayCities[arrayCities.length-1].cookieMath();
  //this will return a number bigger than the last thing
  arrayCities[arrayCities.length-1].render();
  }



// var listenToMe= document.getElementById.pizzapoop;

// listenToMe.addEventListener2('event', handleSubmit);


