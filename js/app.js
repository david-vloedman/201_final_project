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
  new Beer(beerBrands[0], 'Rojo Diablo Amber Ale', beerType[0],flavorAle[0], diabloRojo, '/img/beers/diablorojo.jpg');
  new Beer(beerBrands[1], 'Sweet As Pacific Pale', beerType[0],flavorAle[1], sweetAs, '/img/beers/sap.png');
  new Beer(beerBrands[3], 'Vicious Mosquito', beerType[0], flavorAle[2], viciousMosq, '/img/beers/viciousmosquito.jpg');
  new Beer(beerBrands[5], 'ChingChing Sour', beerType[0], flavorAle[3], chingChingSour, '/img/beers/chingsour.jpg');
  new Beer(beerBrands[2], 'Pacific Wonderland', beerType[1], flavorLager[0], pacificWond, './img/beers/pacificwonderland.png');
  new Beer(beerBrands[5], 'Bend Black Diamond Lager', beerType[1], flavorLager[1], bendBlackDiamond, 'img/beers/blackdiamond.jpg');
  new Beer(beerBrands[6], 'Pilsner', beerType[1], flavorLager[2], cruxPils, '/img/beers/cruxpils.jpg');
  new Beer(beerBrands[4], 'Dutch Delight', beerType[2], flavorDark[0], dutchDelight, 'img/beers/dutchdelight.jpg');
  new Beer(beerBrands[2], 'Black Butte Porter', beerType[2], flavorDark[1], blackButte, '/img/beers/blackbutte.png');
};


// **************************************************************************
//
//  Event and HTML rendering functions
//
// **************************************************************************

var renderSetup = function(user){
  removeChildren();
  var opt1 = document.createElement('input');
  var opt2 = document.createElement('input');
  var opt3 = document.createElement('input');
  opt1.type = 'image';
  opt2.type = 'image';
  opt3.type = 'image';
  opt1.src = '../img/buttons/ale2.jpg';
  opt2.src = '../img/buttons/pilslager.jpg';
  opt3.src = '../img/buttons/stout.jpg';
  opt1.id = 'ale';
  opt2.id = 'lager';
  opt3.id = 'dark';

  var qTarget = document.getElementById('instructions');
  var instructions = document.createElement('h2');
  instructions.innerHTML = `${user.name}, pick a type of beer:`;
  qTarget.appendChild(instructions);

  var target = document.getElementById('responses');
  target.appendChild(opt1);
  target.appendChild(opt2);
  target.appendChild(opt3);

};

var promptUser = function(){
  var userForm = document.createElement('form');
  var name = document.createElement('input');
  var age = document.createElement('input');
  var submit = document.createElement('input');
  var nameLbl = document.createElement('label');
  var ageLbl = document.createElement('label');  

  name.type = 'text';
  name.name = 'name';
  name.id = 'name';
  nameLbl.htmlFor = 'name';
  nameLbl.innerHTML = 'Name: ';

  age.type = 'number';
  age.name = 'age';
  age.id = 'age';
  ageLbl.htmlFor = 'age';  
  ageLbl.innerHTML = 'Age: ';
  
  submit.type = 'submit';
  submit.value = 'Submit';

  userForm.id = 'userInfo';
  userForm.appendChild(nameLbl);
  userForm.appendChild(name);
  userForm.appendChild(ageLbl);
  userForm.appendChild(age);
  userForm.appendChild(submit);

  var formTarget = document.getElementById('responses');
  formTarget.appendChild(userForm);
    
};

var userDataSubmit = function(event){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var user = new User(name, age);  
  
  !user.isLegal() ? displayTooYoung(user) : renderSetup(user);

  
};

var displayTooYoung = function(user){
  removeChildren();
  var msg = document.createElement('p');
  var diff = user.legalAge - user.age;
  msg.innerHTML = `Sorry, ${user.name} you're not allowed to drink. Come back in ${diff} years`;

  var target = document.getElementById('responses');
  target.appendChild(msg);
};


var beerTypeSelection = function(event){
  var eventSRC = event.target;
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
};

function removeChildren(){
  var responseElement = document.getElementById('responses');
  while(responseElement.hasChildNodes()){
    responseElement.removeChild(responseElement.lastChild);
  }
}
function getResults(){

}

var renderAle = function(){
  removeChildren();

  var aleFlavorType = document.getElementById('responses');

  var warm_malty = document.createElement('input');
  warm_malty.type = 'image';
  warm_malty.src = '../img/buttons/warmmaltybtn.jpg';
  warm_malty.id = 'warm_malty';

  var crisp_light = document.createElement('input');
  crisp_light.type = 'image';
  crisp_light.src = '../img/buttons/crisplightbtn.jpg';
  crisp_light.id = 'crisp_light';

  var hoppy = document.createElement('input');
  hoppy.type = 'image';
  hoppy.src = '../img/buttons/hoppybtn.jpg';
  hoppy.id = 'hoppy';

  var sour = document.createElement('input');
  sour.type = 'image';
  sour.src = '../img/buttons/sourbtn.jpg';
  sour.id = 'sour';

  aleFlavorType.appendChild(warm_malty);
  aleFlavorType.appendChild(crisp_light);
  aleFlavorType.appendChild(hoppy);
  aleFlavorType.appendChild(sour);
};
var renderLager = function(){
  removeChildren();
  var lagerFlavorType = document.getElementById('responses');
  var light_crisp = document.createElement('input');
  light_crisp.type = 'image';
  light_crisp.src = '../img/buttons/lightcrispbtn.jpg';
  light_crisp.id = 'light_crisp';

  var deep_malty = document.createElement('input');
  deep_malty.type = 'image';
  deep_malty.src = '../img/buttons/deepmaltybtn.jpg';
  deep_malty.id = 'deep_malty';

  var light_hoppy = document.createElement('input');
  light_hoppy.type = 'image';
  light_hoppy.src = '../img/buttons/lighthoppybtn.jpg';
  light_hoppy.id = 'light_hoppy';

  lagerFlavorType.appendChild(light_crisp);
  lagerFlavorType.appendChild(deep_malty);
  lagerFlavorType.appendChild(light_hoppy);
};

var renderDark = function(){
  removeChildren();

  var darkFlavorType = document.getElementById('responses');

  var coffee = document.createElement('input');
  coffee.type = 'image';
  coffee.src = '../img/buttons/coffeestoutbtn.jpg';
  coffee.id = 'coffee';
  
  var chocolate = document.createElement('input');
  chocolate.type = 'image';
  chocolate.src = '../img/buttons/chocolateporterbtn.jpg';
  chocolate.id = 'chocolate';

  darkFlavorType.appendChild(coffee);
  darkFlavorType.appendChild(chocolate);
};
//sort beer arrays to get user's Beer Match
var matchBeerList = function (){
  console.log(beers);
  beers.forEach(beer => console.log(beer.type));
  beers.forEach(beer => console.log(beer.flav_profile));
};

//sends user to results page using the pathname
var redirectToResultsPage = function(){
  window.location.pathname = '/pages/results.html';
};

var beerFlavorSelection = function(event){
  var eventSRC = event.target;
  var id = eventSRC.id;

  
  persistenceManager.saveData(suggestion, 'beer');
  directToResults();
};
//beerFlavorSelection();


var resultsHis;

// ************************************************************************
//
//   Entry Point
//
// ************************************************************************

!function(){
  new BeerFactory();  
  persistenceManager.saveData(beers, 'beers');
  addEventListener('click', routeEvent);
  addEventListener('submit', userDataSubmit);
  promptUser();

}();

addEventListener('click', beerTypeSelection);

addEventListener('click', beerFlavorSelection);

addEventListener('submit', userDataSubmit);













