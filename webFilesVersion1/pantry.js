//could set background img w/ js?
//document.body.style.backgroundImage="url('image.jpg')";





function runForm(formPages) {
  //MAKE MODAL W/ FORM
  makeVisible(formPages, disclaimer);
  //onClick of next button, go to #start
  makeVisible(formPages, startPage);
  //check for donation type
  //create variables for the ORDER - i.e. donation type & donor type
  //create boolean variables for food, clothing, and other
  //if food
    makeVisible(formPages, isFood);
    //checks for food type
    //checks for errors -- highlights errors to user
    //ONCLICK OF NEXT BTN 
    //--> creates variables of food being donated for ORDER
    //-->if clothing
      makeVisible(formPages, isClothing);
      //ONCLICK OF NEXT BTN 
      //--> creates variables of clothing being donated for ORDER
      //--> if other
        makeVisible(formPages, isOther);
        //ONCLICK OF NEXT BTN
        //--> checks for order errors
        //--> creates variables of other items donated for ORDER
        //--> GOES TO RESULTS PAGE
  //if clothing
    makeVisible(formPages, isClothing);
      //ONCLICK OF NEXT BTN 
      //--> creates variables of clothing being donated for ORDER
      //--> if other
        makeVisible(formPages, isOther);
        //ONCLICK OF NEXT BTN
        //--> checks for order errors
        //--> creates variables of other items donated for ORDER
        //--> GOES TO RESULTS PAGE

}

//incomplete
function formStartSubmit() {
  var donorType = $('.donorType').val;
  console.log(donorType);
  var donationType = $('.donationType').val;
  console.log(donationType);
  //if (donorType === 'individual')
};



$(document).ready(function() {

var startPage = $('#start');
var disclaimer = $('#disclaimer');
var isFood = $('#isFood');
var isClothing = $('#isClothing');
var isOther = $('#isOther');
var formEnd = $('#end');
var resultSuccess = $('#success');

var formPages = [startPage, disclaimer, isFood, isClothing, isOther, formEnd, resultSuccess];



function makeVisible(formPages, visiblePage) {
  for (i=0; i<formPages.length; i++) {
    formPages[i].css('display','none');
  var displayPage = visiblePage;
  displayPage.css('display', 'block');
  };
  var backNav = $("<img>");
  backNav.src = "images/backArrow.png";
  var frontNav = $("<img>");
  frontNav.src = "images/arrow.png";
  displayPage.append(backNav);
  displayPage.append(frontNav);
};

makeVisible(formPages, disclaimer);

//WAS TRYING TO ADD ARROWS TO ALL THE FORM PAGES
// for (i=0; i<formPages.length; i++) {
//   var page = formPages[i];
//   var backNav = $("<img>");
//   backNav.src = "images/backArrow.png";
//   var frontNav = $("<img>");
//   frontNav.src = "images/arrow.png";
//   page.append(backNav);
//   page.append(frontNav);
// }

makeVisible(formPages, startPage);





});



