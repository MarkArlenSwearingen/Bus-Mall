'use strict';

// Problem Statement
// Create constructor function

// Global Variables
var totalClicks = 0;
var numImgDisplay = 3;
var allProducts = [];
var currentImagesDisplayed = [];
var leftImgTag = document.getElementById('leftimage');
var centerImgTag = document.getElementById('centerimage');
var rightImgTag = document.getElementById('rightimage');
var leftImgPath = '';
var centerImgPath = '';
var rightImgPath = '';
var centerImageIndex = ''



console.log(centerImgTag);

// Constructor Function
var ProductImage = function(name, pathToImg) {
  this. name = name;
  this.pathToImg = pathToImg;
  // this.clicks = clicks;
  // this.displayed = displayed;
  allProducts.push(this);
};


new ProductImage('bag', './img/bag.jpg');
new ProductImage('boots', './img/boots.jpg');
new ProductImage('chair', './img/chair.jpg');   
new ProductImage('scissors', './img/scissors.jpg');
new ProductImage('unicorn', './img/unicorn.jpg');
new ProductImage('wine-glass', './img/wine-glass.jpg');
new ProductImage('banana', './img/banana.jpg');
new ProductImage('breakfast', './img/breakfast.jpg');
new ProductImage('cthulhu', './img/cthulhu.jpg');
new ProductImage('pen', './img/pen.jpg');
new ProductImage('shark', './img/shark.jpg');
new ProductImage('usb', './img/usb.gif');
new ProductImage('bathroom', './img/bathroom.jpg');
new ProductImage('bubblegum', './img/bubblegum.jpg');
new ProductImage('dog-duck', './img/dog-duck.jpg');
new ProductImage('bubblegum', './img/bubblegum.jpg');
new ProductImage('pet-sweep', './img/pet-sweep.jpg');
new ProductImage('tauntaun', './img/tauntaun.jpg');
new ProductImage('water-can', './img/water-can.jpg');
console.log(allProducts);


var renderNewImages = function(leftImg, centerImg, rightImg){
  console.log('render function');
};

//Event Handler
var imageDivTag = document.getElementById('images');
console.log(imageDivTag);

var handleClicks = function() {
  
  var leftImageIndex = Math.floor(Math.random() * allProducts.length);

  do {
    var centerImageIndex = Math.floor(Math.random() * allProducts.length);
  } while (centerImageIndex === leftImageIndex);{
      do {
        var rightImageIndex = Math.floor(Math.random() * allProducts.length);
      } while (rightImageIndex === leftImageIndex || rightImageIndex ===centerImageIndex);
      var leftImgPath = allProducts[leftImageIndex].pathToImg; 
      var centerImgPath = allProducts[centerImageIndex].pathToImg;
      var rightImgPath = allProducts[rightImageIndex].pathToImg;
      //render new images
      leftImgTag.src=leftImgPath
      centerImgTag.src=centerImgPath
      rightImgTag.src=rightImgPath
    }
    renderNewImages();
  }

imageDivTag.addEventListener('click', handleClicks);


