'use strict';

// Global Variables
var totalClicks = 0;
var numOfSelections = 25;
var numImgDisplay = 3;
var allProducts = [];
var currentImagesDisplayed = [];
var leftImgTag = document.getElementById('leftimage');
var centerImgTag = document.getElementById('centerimage');
var rightImgTag = document.getElementById('rightimage');
var leftImgPath = '';
var centerImgPath = '';
var rightImgPath = '';
var leftImageIndex = '';
var centerImageIndex = '';
var rightImageIndex = '';

// Constructor Function
var ProductImage = function(name, pathToImg) {
  this.name = name;
  this.pathToImg = pathToImg;
  this.clicks = 0;
  this.displayed = 0;
  allProducts.push(this);
};


new ProductImage('bag', './img/bag.jpg');
new ProductImage('banana', './img/banana.jpg');
new ProductImage('bathroom', './img/bathroom.jpg');
new ProductImage('boots', './img/boots.jpg');
new ProductImage('breakfast', './img/breakfast.jpg');
new ProductImage('bubblegum', './img/bubblegum.jpg');
new ProductImage('chair', './img/chair.jpg');
new ProductImage('cthulhu', './img/cthulhu.jpg');
new ProductImage('dog-duck', './img/dog-duck.jpg');
new ProductImage('dragon', './img/dragon.jpg');
new ProductImage('pen', './img/pen.jpg');
new ProductImage('pet-sweep', './img/pet-sweep.jpg');
new ProductImage('scissors', './img/scissors.jpg');
new ProductImage('shark', './img/shark.jpg');
new ProductImage('tauntaun', './img/tauntaun.jpg');
new ProductImage('unicorn', './img/unicorn.jpg');
new ProductImage('usb', './img/usb.gif');
new ProductImage('water-can', './img/water-can.jpg');
new ProductImage('wine-glass', './img/wine-class.jpg');

//Render function
var renderNewImages = function(leftImageIndex, centerImageIndex, rightImageIndex){
  leftImgTag.src = allProducts[leftImageIndex].pathToImg;
  centerImgTag.src = allProducts[centerImageIndex].pathToImg;
  rightImgTag.src = allProducts[rightImageIndex].pathToImg;
};

var displayResults = function() {
  var resultId = document.getElementById('results');
  var ul = document.createElement('ul');
  resultId.appendChild(ul);
  for(var i = 0; i < allProducts.length; i++){
    var li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].clicks} votes`;
    ul.appendChild(li);
  }
};

//Randomizer
var randomizer = function(){
  leftImageIndex = Math.floor(Math.random() * allProducts.length);
  do {
    centerImageIndex = Math.floor(Math.random() * allProducts.length);
  } while (centerImageIndex === leftImageIndex);{
    do {
      rightImageIndex = Math.floor(Math.random() * allProducts.length);
    } while (rightImageIndex === leftImageIndex || rightImageIndex ===centerImageIndex);
    leftImgPath = allProducts[leftImageIndex].pathToImg;
    centerImgPath = allProducts[centerImageIndex].pathToImg;
    rightImgPath = allProducts[rightImageIndex].pathToImg;
  }
  renderNewImages(leftImageIndex, centerImageIndex, rightImageIndex);
};

//Event Handler
var handleClicks = function() {
  randomizer();
  if (totalClicks < numOfSelections){
    var imageClicked = event.target;
    var id = imageClicked.id;
    if( id === 'leftimage'){
      allProducts[leftImageIndex].clicks ++;
    } else if( id === 'centerimage'){
      allProducts[centerImageIndex].clicks ++;
    } else if( id === 'rightimage'){
      allProducts[rightImageIndex].clicks ++;
    }
  }
  allProducts[leftImageIndex].displayed ++;
  allProducts[centerImageIndex].displayed ++;
  allProducts[rightImageIndex].displayed ++;
  if (totalClicks === numOfSelections){
    imageDivTag.removeEventListener('click', handleClicks);
    displayResults();
  }
  totalClicks ++;
};

var imageDivTag = document.getElementById('images');

imageDivTag.addEventListener('click', handleClicks);


