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

}


var BeerFactory = function(beerType, flavorAle, flavorLager, flavorDark) {
  var beerType = [ale, lager, dark];
  var flavorAle = ['Warm and Malty', 'Crisp and Light', 'Hoppy', 'Sour'];
  var flavorLager = ['Light and Refreshing', 'Deep and Malty', 'Light and Hoppy'];
  var flavorDark = ['Coffee', 'Chocolate-y'];
  var beerBrands = ['Boneyard', 'Goodlife', 'Deschutes Brewery', 'Sunriver Brewing', '10Barrel', 'Bend Brewing Company', 'Crux'];
  var finalFlavors = ['Amber Ale', 'Pale Ale', 'Indian Pale Ale', 'Sour', 'Pale Lager', 'Dark Lager', 'Pilsner', 'Stout', 'Porter'];
  

  BeerFactory.prototype.createBeerList(); {
   beer.push(new Beer('Boneyard', 'Rojo Diablo Amber Ale', flavorAle[0], diabloRojo));
   beer.push(new Beer('Goodlife', 'Sweet As Pacific Pale', flavorAle[1], sweetAs));
   beer.push(new Beer('Sunriver Brewing', 'Vicious Mosquito', flavorAle[2], viciousMosq));
   beer.push(new Beer('Bend Brewing Company', 'ChingChing Sour', flavorAle[3], chingChingSour));
   beer.push(new Beer('Deschutes Brewery', 'Pacific Wonderland', flavorLager[0], pacificWond));
   beer.push(new Beer('Bend Brewing Company', 'Bend Black Diamond Lager', flavorLager[1], bendBlackDiamond));
   beer.push(new Beer('Crux Fermentation Project', 'Crux Pilsner', flavorLager[2], cruxPils));
   beer.push(new Beer('10 Barrel', 'Dutch Delight', flavorDark[0], dutchDelight));
   beer.push(new Beer('Deschutes Brewery', 'Black Butte Porter', flavorDark[1], blackButte));
  }
}


}

//Array of questions. 
var questionArr = ['What\'s your type?','What\'s your flavor?'];
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



