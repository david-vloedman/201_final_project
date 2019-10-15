
var beers = [];

var Beer = function(brand,name,flav_profile,description) {
  this.brand = brand;
  this.name = name;
  this.flav_profile = flav_profile;
  this.description = description;
  beers.push(this);
}

//Array of questions. 
var questionArr = ['What\'s your type?','What\'s your flavor?'];