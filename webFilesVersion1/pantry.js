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
 

//ORDER MODEL TEMPLATE

function VideoModel(videoJSON) {
  this.youtubeId = videoJSON.youtubeId;
  this.title     = videoJSON.title || 'Untitled';
  this.author    = videoJSON.author || 'No author';
  this.thumbURL  = 'http://i3.ytimg.com/vi/' + this.youtubeId + '/default.jpg';
  this.embedURL  = 'http://www.youtube.com/embed/' + this.youtubeId;
}


//FORM DISPLAY

//INITIALIZES THE FORM - MAKES IT SO THAT START PAGE IS ONLY ONE VISIBLE
function makeVisible(formPages, visiblePage) {
	for (i=0; i<formPages.length; i++) {
		formPages[i].css('display','none');
	var displayPage = visiblePage;
	displayPage.css('display', 'block');
	};
};


makeVisible(formPages, disclaimer);
makeVisible(formPages, startPage);


//THIS DOES NOT WORK
//BUT TRYING TO MAKE A CHECKER TO DETECT WHICH PAGE IS CURRENTLY VISIBLE
// function isVisible(formPages) {
// 	var isVisible = false;
// 	for (i=0; i<formPages.length; i++) {
// 		if (formPages[i].style.display = "block") {
// 			isVisible = true;
// 			console.log(formPages[i]);
// 		}
// 	}
// }

//isVisible(formPages);


//RIGHT NOW THIS WORKS BUT ONLY IN LIMITED CAPACITY 
//after startForm function is called, switchForm works only if the currentPage...
//...argument is passed var startPage
// function switchForm(currentPage, nextPage) {
//   currentPage.css('display','none');
//   nextPage.css('display','block');
// };

// switchForm(disclaimer, startPage);
// switchForm(startPage, isClothing);


//incomplete
function formStartSubmit() {
  var donorType = $('.donorType').val;
  console.log(donorType);
  var donationType = $('.donationType').val;
  console.log(donationType);
  //if (donorType === 'individual')
};






});



