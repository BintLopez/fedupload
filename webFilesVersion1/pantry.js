//could set background img w/ js?
//document.body.style.backgroundImage="url('image.jpg')";

$(document).ready(function() {

//IDEA--make all questions into objects


var startPage = $('#start');
var disclaimer = $('#disclaimer');
var isFood = $('#isFood');
var isClothing = $('#isClothing');
var isOther = $('#isOther');
var formEnd = $('#end');
var resultSuccess = $('#success');
var resultFail = $('#fail');

var formPages = [startPage, disclaimer, isFood, isClothing, isOther, formEnd, resultSuccess, resultFail];


//FORM DISPLAY
function formStart(formPages, currentPage) {
	for (i=0; i<formPages.length; i++) {
		var currentPage = startPage;
		//currentPage = true;
		formPages[i].css('display','none');
		currentPage.css('display', 'block');
		return currentPage;
	};
};

function switchForm(currentPage, nextPage) {
  currentPage.css('display','none');
  nextPage.css('display','block');
};

//incomplete
function formStartSubmit() {
  var donorType = $('.donorType').val;
  console.log(donorType);
  var donationType = $('.donationType').val;
  console.log(donationType);
  //if (donorType === 'individual')
};

formStart(formPages, startPage);
switchForm(currentPage, disclaimer);
});


//VIEW

//CONTROLLER

//switchForm(formStart, disclaimer);

