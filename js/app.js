'use strict';

// ************************************************************************
//
// User
//
// ************************************************************************

function User (name, age){
  this.name = name;
  this.age = age;
  this.legalAge = 21;
}

User.prototype.isLegal = function(){
  return this.age >= this.legalAge;
};

// ************************************************************************
//
// RenderResults
//
// ************************************************************************

function RenderResults(beer){
  this.beer = beer;
  this.list = this.getList();
  this.img = this.getImg();
}

RenderResults.prototype.getList = function(){
  this.list = document.getElementbyID('beer');
};

RenderResults.prototype.getImg = function(){
  this.img = document.getElementbyID('resultIMG');
};

RenderResults.prototype.renderList = function(){
  var brandLi = document.createElement('li');
  var nameLi = document.createElement('li');
  brandLi.innerHTML = this.beer.brand;
  nameLi.innerHTML = this.beer.name;
};

RenderResults.prototype.renderImg = function(){
  var resultIMG = document.createElement('img');
  resultIMG.innerHTML = this.beer.img;
};

// ************************************************************************
//
// Beer and Beers
//
// ************************************************************************
var beers = [];

var Beer = function(brand,name, type, flav_profile, description ,imgPath) {
  this.brand = brand;
  this.name = name;
  this.type = type;
  this.flav_profile = flav_profile;
  this.description = description;
  this.imgPath = imgPath;
  beers.push(this);

};
// ************************************************************************
//
//  Beer factory
//
// ************************************************************************

var BeerFactory = function() {
  var beerType = ['ale', 'lager', 'dark'];
  var flavorAle = ['Warm and Malty', 'Crisp and Light', 'Hoppy', 'Sour'];
  var flavorLager = ['Light and Refreshing', 'Deep and Malty', 'Light and Hoppy'];
  var flavorDark = ['Coffee', 'Chocolate-y'];
  var beerBrands = ['Boneyard', 'Goodlife', 'Deschutes Brewery', 'Sunriver Brewing', '10Barrel', 'Bend Brewing Company', 'Crux'];

  BeerFactory.prototype.createBeerList = function(){
    new Beer(beerBrands[0], 'Rojo Diablo Amber Ale', beerType[0],flavorAle[0], diabloRojo, '/img/beers/diablorojo.jpg');
    new Beer(beerBrands[1], 'Sweet As Pacific Pale', beerType[0],flavorAle[1], '/img/beers/sap.jpg');
    new Beer(beerBrands[3], 'Vicious Mosquito', beerType[0], flavorAle[2], viciousMosq, '/img/beers/viciousmosquito.jpg');
    new Beer(beerBrands[5], 'ChingChing Sour', beerType[0], flavorAle[3], chingChingSour, '/img/beers/chingsour.jpg');
    new Beer(beerBrands[2], 'Pacific Wonderland', beerType[1], flavorLager[0], pacificWond, './img/beers/pacificwonderland.png');
    new Beer(beerBrands[5], 'Bend Black Diamond Lager', beerType[1], flavorLager[1], bendBlackDiamond, 'img/beers/blackdiamond.jpg');
    new Beer(beerBrands[6], 'Pilsner', beerType[1], flavorLager[2], cruxPils, '/img/beers/cruxpils.jpg');
    new Beer(beerBrands[4], 'Dutch Delight', beerType[2], flavorDark[0], dutchDelight);
    new Beer(beerBrands[2], 'Black Butte Porter', beerType[2], flavorDark[1], blackButte, '/img/beers/blackbutte.png');
  };
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


function ResultsHistory(){
  this.historyData = persistenceManager.getHistoric();
  if(this.historyData === null) this.fabricateHistory();
}

ResultsHistory.prototype.addBeer= function(beer){
  this.historyData.push(beer);
};

ResultsHistory.prototype.fabricateHistory = function(){
  var randomIndices = [];
  for(var i = 0; i < 8; i++){
    randomIndices.push(Math.floor(Math.random() * beers.length));
  }

  var history = [];
  
  randomIndices.forEach(index => {
    history.push(beers[index]);
  });
  this.historyData = history;
};
// ************************************************************************
//  The package for chart function puts the history in data set 
//  more suitable for Chart.js. It returns a 2-dimensional array.
//  At each index of the outer array contains the beer name and how many times 
//  It's been suggested
// ************************************************************************
ResultsHistory.prototype.packageForChart = function(){
  var data = [];
  beers.forEach(beer => {
    data.push([beer.name,0]);
  });

  this.historyData.forEach(beer => {
    data.forEach(datum =>{
      if(beer.name === datum[0]) datum[1]++;
    });
  });
  return data;
};
// ************************************************************************
//
//   Entry Point
//
// ************************************************************************


!function(){
  var factory = new BeerFactory();
  factory.createBeerList();
}();


