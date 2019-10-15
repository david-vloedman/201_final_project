'use strict';

function User (name, age){
  this.name = name;
  this.age = age; 
  this.legalAge = 21;
}

User.prototype.isLegal = function(){
  return this.age >= this.legalAge;
};

var beers = [];

var Beer = function(brand,name,flav_profile,description) {
  this.brand = brand;
  this.name = name;
  this.flav_profile = flav_profile;
  this.description = description;
  beers.push(this);
};


var persistenceManager = {

  // pass in user object to be saved
  saveUser: function(user){
    var toStore = JSON.stringify(user);
    localStorage.setItem('user', toStore);
  },

  // returns a stored user
  getUser: function(){
    return JSON.parse(localStorage.getItem('user'));
  },

 
  // pass in a history object to be saved
  storeHistoric: function(historicData){
    var toStore = JSON.stringify(historicData);
    localStorage.setItem('history', toStore);
  },
  // retrieve history from local storage
  getHistoric: function(){
    return JSON.parse(localStorage.getItem('history'));
  }
};


function SuggestionHistory(previous){
  this.historyData = previous;
  if(previous === null) this.historyData(this.fabricateHistory());  
}

SuggestionHistory.prototype.addBeer(beer){
  this.historyData.push(beer);
}

SuggestionHistory.prototype.fabricateHistory = function(){

};



var alltime = new SuggestionHistory();



