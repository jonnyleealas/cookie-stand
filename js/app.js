'use strict';


// this is my new store constroctor
function StoreLocation(city,minCus,maxCus, aveCookie){
  this.city = city;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.cookiesSold = [];
  this.aveCookie = aveCookie;
  this.hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
}

StoreLocation.prototype.cookieMath = function(){
  //console.log("we are here" , this.cookiesSold)
  cookiePerHour(this.cookiesSold,this.hours,this.aveCookie,this.minCus,this.maxCus);
  addAnyArray(this.cookiesSold);
};

StoreLocation.prototype.render = function(){
  render(this.hours,this.cookiesSold,this.city);
};


// "seattle": city, mincus, maxCus, cookies, aveCookie, hours, cookieMath(), render()
// the cities and their parameters
var seattle = new StoreLocation('seattle', 23, 65, 6.3);

var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2 );

var dubai = new StoreLocation('Dubai', 11, 38, 3.7);

var paris = new StoreLocation('Paris', 20, 38, 2.3);

var lima = new StoreLocation('Lima', 2, 16, 4.6);

//an array of the cities arrays
var arrayCities = [seattle, tokyo, dubai, paris, lima];
// console.log(arrayCities);

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

var hours= [1,2,3,5,6,7,8,9,10,11,12,13,14];
//var cities= [seattle, tokyo, dubai, paris, lima];


//Random customers per hours with a for loop 
function cookiePerHour(arrayX,arrayY,perHour,min,max){
  for (var i=0; i < arrayY.length-1; i++){
    var randomNum= getRandomIntInclusive(min,max);
    randomNum= multiply(randomNum,perHour);
    randomNum= Math.floor(randomNum);
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


function render(hours,cookies,city){
  // table => table row => td (cell)
  var parent= document.getElementById('test');
  var tableRow = document.createElement('tr');
  var tableRowTwo = document.createElement('tr');
  var cityCell = document.createElement('td');
  cityCell.textContent = city;
  tableRow.appendChild(cityCell);

  // var hoursTr = document.createElement('tr');
  // hoursTr.textContent = hours;
  // parent.appendChild(hoursTr);
  for( var i= 0; i < hours.length; i++){
    var timeCell = document.createElement('td');
    timeCell.textContent=(`${hours[i]}`);
    tableRow.appendChild(timeCell);
  }


  //this gives me numbers in the table
  for (var j=-1; j < cookies.length; j++){
    var salmonCookies = document.createElement('td');
    if (j === -1) {
      salmonCookies.textContent = '';
    } else {
      salmonCookies.textContent = (`${cookies[j]}`);
    }

    tableRowTwo.appendChild(salmonCookies);

  }

  parent.appendChild(tableRow);
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
