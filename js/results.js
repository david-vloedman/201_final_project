'using strict';


var renderResults = function(){
  var children = [];

  var result = persistenceManager.getData('beer');
  var target = document.getElementById('results');
  children.push(document.createElement('img'));
  children[0].src = `../${result.imgPath}`;
  children.push(document.createElement('p'));
  children[1].id = 'brand';
  children[1].innerHTML = result.brand;
  children.push(document.createElement('p'));
  children[2].id = 'name';
  children[2].innerHTML = result.name;
  children.push(document.createElement('p'));
  children[3].id = 'desc';
  children[3].innerHTML = result.description;

  children.forEach(child => { target.appendChild(child); });
};

var createCanvas = function(){
  var canvas = document.createElement('canvas');

};



!function(){
  beers = persistenceManager.getData('beers');
  var resultHis = new ResultsHistory(beers);
  renderResults();
}();

