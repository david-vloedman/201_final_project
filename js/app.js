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

//above - user object pushed in previous PR
//below - render beer results to results.html

function RenderResults(beer){
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
  brandLi.innerHTML = beer.brand;
  nameLi.innerHTML = beer.name;
};

RenderResults.prototype.renderImg = function(){
  var resultIMG = document.createElement('img');
  resultIMG.innerHTML = beer.img;
};

// ************************************************************************
//
// Beer and Beers
//
// ************************************************************************
var beers = [];

var Beer = function(brand,name, type, flav_profile, description) {
  this.brand = brand;
  this.name = name;
  this.type = type;
  this.flav_profile = flav_profile;
  this.description = description;
  beers.push(this);

};


var BeerFactory = function() {
  var beerType = ['ale', 'lager', 'dark'];
  var flavorAle = ['Warm and Malty', 'Crisp and Light', 'Hoppy', 'Sour'];
  var flavorLager = ['Light and Refreshing', 'Deep and Malty', 'Light and Hoppy'];
  var flavorDark = ['Coffee', 'Chocolate-y'];
  var beerBrands = ['Boneyard', 'Goodlife', 'Deschutes Brewery', 'Sunriver Brewing', '10Barrel', 'Bend Brewing Company', 'Crux'];
  var finalFlavors = ['Amber Ale', 'Pale Ale', 'Indian Pale Ale', 'Sour', 'Pale Lager', 'Dark Lager', 'Pilsner', 'Stout', 'Porter'];


  BeerFactory.prototype.createBeerList = function(){
    new Beer(beerBrands[0], 'Rojo Diablo Amber Ale', beerType[0],flavorAle[0], diabloRojo);
    new Beer(beerBrands[1], 'Sweet As Pacific Pale', beerType[0],flavorAle[1], sweetAs);
    new Beer(beerBrands[3], 'Vicious Mosquito', beerType[0], flavorAle[2], viciousMosq);
    new Beer(beerBrands[5], 'ChingChing Sour', beerType[0], flavorAle[3], chingChingSour);
    new Beer(beerBrands[2], 'Pacific Wonderland', beerType[1], flavorLager[0], pacificWond);
    new Beer(beerBrands[5], 'Bend Black Diamond Lager', beerType[1], flavorLager[1], bendBlackDiamond);
    new Beer(beerBrands[6], 'Pilsner', beerType[1], flavorLager[2], cruxPils);
    new Beer(beerBrands[4], 'Dutch Delight', beerType[2], flavorDark[0], dutchDelight);
    new Beer(beerBrands[2], 'Black Butte Porter', beerType[2], flavorDark[1], blackButte);
  }
};

//Array of questions.
var questionArr = ['What\'s your type?','What\'s your flavor?'];

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

  if(this.historyData === null)
  {

    this.fabricateHistory();
  }
}

ResultsHistory.prototype.addBeer= function(beer){
  this.historyData.push(beer);
};

ResultsHistory.prototype.fabricateHistory = function(){
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

ResultsHistory.prototype.packageForChart = function(){
  var names = [];
  var packaged = [];
  this.historyData.forEach(beer => {
    names.push(beer.name);
  });


};


!function(){
  var factory = new BeerFactory();
}();

var beerTypeSelection = function(event){
  var eventSRC = event.target
  var id = eventSRC.id;

      if (id === 'ale'){
        renderAle();
      }
      if (id === 'lager'){
        renderLager();
      }
      if (id === 'dark'){
        renderDark();
      }
    }

    function removeChildren(){
      var responseElement = document.getElementById('responses');
      while(responseElement.hasChildNodes()){
        responseElement.removeChild(responseElement.lastChild)
      }
    }

    renderAle = function(){
      removeChildren();
      
      var aleFlavorType = document.getElementById('responses');

      var warm_malty = document.createElement('input');
      warm_malty.type = 'image';
      warm_malty.src = 'warmmaltybtn.jpg';

      var crisp_light = document.createElement('input');
      crisp_light.type = 'image';
      crisp_light.src = 'crisplightbtn.jpg';

      var hoppy = document.createElement('input');
      hoppy.type = 'image';
      hoppy.src = 'hoppybtn.jpg';

      var sour = document.createElement('input');
      sour.type = 'image';
      sour.src = 'sourbtn.jpg';

      aleFlavorType.appendChild(warm_malty);
      aleFlavorType.appendChild(crisp_light);
      aleFlavorType.appendChild(hoppy);
      aleFlavorType.appendChild(sour);
    };

    renderLager = function(){
      removeChildren();
      var lagerFlavorType = document.getElementById('responses');
      var  light_crisp = document.createElement('input');
      light_crisp.type = 'image';
      light_crisp.src = 'lightcrispbtn.jpg';

      var deep_malty = document.createElement('input');
      deep_malty.type = 'image';
      deep_malty.src = 'deepmaltybtn.jpg';

      var light_hoppy = document.createElement('input');
      light_hoppy.type = 'image';
      light_hoppy.src = 'lighthoppybtn.jpg';

      lagerFlavorType.appendChild(light_crisp);
      lagerFlavorType.appendChild(deep_malty);
      lagerFlavorType.appendChild(light_hoppy);
    };

    renderDark = function(){
      removeChildren();

      var darkFlavorType = document.getElementById('responses');
      
      var coffee = document.createElement('input');
      coffee.type = 'image';
      coffee.src = 'coffeebtn.jpg';

      var chocolate = document.createElement('input');
      chocolate.type = 'image';
      chocolate.src = 'chocolatebtn.jpg';

      darkFlavorType.appendChild(coffee);
      darkFlavorType.appendChild(chocolate);
    }
  

  };



