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
var allProductsLS =[];

// Constructor Function
var ProductImage = function(name, pathToImg) {
  this.name = name;
  this.pathToImg = pathToImg;
  this.clicks = 0;
  this.displayed = 0;
  allProducts.push(this);
};

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
    genData();
    genLabels();
    displayResults();
    barChart();
  }
  updateLS();
  console.log(totalClicks);
  totalClicks ++;
};

//function to update local storage
var updateLS = function(){
  var allProductsLS = JSON.stringify(allProducts);
  // console.log(allProductsLS);
  localStorage.setItem('allProductsLS', allProductsLS);
};

//function to retrieve information from local storage
var retrieveAllProducts = function(){
  var data = localStorage.getItem('allProductsLS');
  var productData = JSON.parse(data);
  console.log(productData);
};

//Generate label array for populating bar chart
var genLabels = function(){
  var labelArr = [];
  for( var i = 0; i < allProducts.length; i ++){
    labelArr. push(allProducts[i].name);
  }
  return labelArr;
};

//Create data array for number of votes by product
var genData = function(){
  var votesArr = [];
  for( var i = 0; i < allProducts.length; i++){
    votesArr.push(allProducts[i].clicks);
  }
  return votesArr;
};

var displayData = function(){
  var displayArr = [];
  for( var i = 0; i < allProducts.length; i++){
    displayArr.push(allProducts[i].displayed);
  }
  return displayArr;
};

var barChart = function(){
  var ctx = document.getElementById('resultchart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: genLabels(),
      datasets: [{
        label: '# of Votes',
        data: genData(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
        borderWidth: 1
      },{
        label: '# of Display',
        data: displayData(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
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

//start survey function
function startSurvey() {
  imageDivTag.addEventListener('click', handleClicks);
}

//Executing Code

retrieveAllProducts();

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
new ProductImage('sweep', './img/sweep.png');
new ProductImage('pet-sweep', './img/pet-sweep.jpg');
new ProductImage('tauntaun', './img/tauntaun.jpg');
new ProductImage('water-can', './img/water-can.jpg');

var imageDivTag = document.getElementById('images');

//start survey
startSurvey();
