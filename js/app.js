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
console.log(allProducts);


