'use strict';

//user object
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
  return list;
};

RenderResults.prototype.getImg = function(){
  return img;
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
