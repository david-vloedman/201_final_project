
var beers = [];

var Beer = function(brand,name,flav_profile,description) {
  this.brand = brand;
  this.name = name;
  this.flav_profile = flav_profile;
  this.description = description;
  beers.push(this);
}

//beerFactory, -->2 arrays : all types beers (3) array2 flavors (for all options)

var BeerFactory = function(beerType, flavorAle, flavorLager, flavorDark) {
  var beerType = [ale, lager, dark];
  var flavorAle = ['Warm and Malty', 'Crisp and Light', 'Hoppy', 'Sour'];
  var flavorLager = ['Crisp and Light', 'Deep and Malty', 'Light and Hoppy'];
  var flavorDark = ['Coffee', 'Chocolate-y'];
  var beerBrands = ['Boneyard', 'Goodlife', 'Deschutes Brewery', 'Sunriver Brewing', '10Barrel', 'Bend Brewing Company', 'Crux', 'Worthy'];
  var beerDescriptions = ['Amber Ale', 'Pale Ale', 'Indian Pale Ale', 'Sour', 'Pale Lager', 'Dark Lager', 'Pilsner', 'Stout', 'Porter'];
  

  BeerFactory.prototype.createBeerList(); {
   new Beer = 
  }
}