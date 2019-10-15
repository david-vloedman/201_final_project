'use strict';
<<<<<<< HEAD

//user object
=======
// ************************************************************************
//
// User
//
// ************************************************************************
>>>>>>> master
function User (name, age){
  this.name = name;
  this.age = age;
  this.legalAge = 21;
}

User.prototype.isLegal = function(){
  return this.age >= this.legalAge;
};
<<<<<<< HEAD
//above - user object pushed in previous PR
//below - render beer results to results.html

function RenderResults(beer){
  this.list = this.getList();
  this.img = this.getImg();
}

RenderResults.prototype.getList = function(){
  let this.list = getElementbyID('beer')
};

RenderResults.prototype.getImg = function(){
  let this.img = getElementbyID('resultIMG');
};

RenderResults.prototype.renderList = function(){
  var brandLi = document.createElement('li');
  var nameLi = document.createElement('li');
  brandLi.innerHTML = beer.brand;
  nameLi.innerHTML = beer.name;
};

RenderResults.prototype.renderImg = function(){
  var resultIMG = document.createElement('img');
  resultIMG.innerHTML = beer.img;
};
=======
// ************************************************************************
//
// Beer and Beers
//
// ************************************************************************
var beers = [];

var Beer = function(brand,name,flav_profile,description) {
  this.brand = brand;
  this.name = name;
  this.flav_profile = flav_profile;
  this.description = description;
  beers.push(this);
};
// ************************************************************************
//
// persistenceManager
//
// ************************************************************************

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
// ************************************************************************
//
// SuggestionHistory
//
// ************************************************************************


function SuggestionHistory(previous){
  this.historyData = persistenceManager.getHistoric();
  if(previous === null) {
    console.log('no history');
    this.fabricateHistory();
  }
}

SuggestionHistory.prototype.addBeer= function(beer){
  this.historyData.push(beer);
};

SuggestionHistory.prototype.fabricateHistory = function(){
  var randomIndices = [];
  for(var i = 0; i < 8; i++){
    randomIndices.push(Math.floor(Math.random() * 10));    
  }  
  var history = [];
  randomIndices.forEach(index => {
    history.push(beers[index]);
  });
  this.historyData = history;
};


var test = new SuggestionHistory(null);
>>>>>>> master

console.log(test);
