'use strict';

function User (name, age){
  this.name = name;
  this.age = age; 
  this.legalAge = 21;
}

User.prototype.isLegal = function(){
  return this.age >= this.legalAge;
}



