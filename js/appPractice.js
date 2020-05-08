'use strict';

//this is my new store constructor
function StoreLocation(city, minCus, maxCus, aveCookie){
  this.city = city;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.cookieSold = [];
  this.aveCookie = aveCookie;
  this.hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
}


StoreLocation.prototype.cookieMath = function(){
//console.log("we are here", this.cookieSold)
cookiePerHour(this.cookiesSold)

};
