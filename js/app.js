'use strict';

// Problem Statement
// Create constructor function

// Global Variables
var totalClicks = 0;
var numImgDisplay = 3;
var allProducts = [];
var currentImagesDisplayed = [];
var leftImgTag = document.getElementById(leftimage);
var centerImgTag = document.getElementById(centerimage);
var rightImgTag = document.getElementById(rightimage);


// Constructor Function
var ProductImage = function(name, pathToImg) {
  this. name = name;
  this.pathToImg = pathToImg;
  // this.clicks = clicks;
  // this.displayed = displayed;

  allProducts.push(this);
};

// // Helper Functions
// var pickImgToDisplay = function(){
//   var pickImg1 = Math.floor(Math.random() * ProductImage.allProducts.length);
//   // var newImgArr = [];
//   // newImgArr.push(allProducts.pickImg1);
//   // do {
//   //   var pickImg2 = Math.floor(Math.random() * ProductImage.allProducts.length - currentImagesDisplayed.length);
//   // }while (pickImg1 === pickImg2){

//   // }
//   renderNewImages(newImgArr);
// }



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

var leftImage = Math.floor(Math.random() * allProducts.length);

do {
  var centerImage = Math.floor(Math.random() * allProducts.length);
} while (centerImage === leftImage);{
  do {
    var rightImage = Math.floor(Math.random() * allProducts.length);
  } while (rightImage === leftImage || rightImage ===centerImage);
  // render images
  console.log(allProducts[rightImage].name);
  console.log(allProducts[rightImage].pathToImg);
  console.log(allProducts[centerImage]);
  console.log(leftImage);
}





