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
// new ProductImage('bubblegum', './img/bubblegum.jpg');
new ProductImage('pet-sweep', './img/pet-sweep.jpg');
new ProductImage('tauntaun', './img/tauntaun.jpg');
new ProductImage('water-can', './img/water-can.jpg');

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
      // console.log('left image ' + leftImageIndex);
      allProducts[leftImageIndex].clicks ++;
    } else if( id === 'centerimage'){
      // console.log('center image ' + centerImageIndex);
      allProducts[centerImageIndex].clicks ++;
    } else if( id === 'rightimage'){
      // console.log('right image ' + rightImageIndex);
      allProducts[rightImageIndex].clicks ++;
    }
  }
  console.log(totalClicks);
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

var barChart = function(){
  var ctx = document.getElementById('resultchart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

barChart();
