//DATA

var formQuestions = [
  {
    "question": "Are you an... ?",
    "possibleAnswers": ["Individual", "Restaurant/Grocer", "Organization"],
    "inputType": "radio",
    "name": "donorType",
    "onPage": "startPage",
  },
  {
    "question": "What are you donating?",
    "possibleAnswers": ["Food", "Clothing", "Household Items", "Other"],
    "inputType": "checkbox",
    "name": "donorItem",
    "onPage":  "startPage",
  },
  {
    "question": "Are any of the food items perishable?",
    "possibleAnswers": ["Yes", "No"],
    "inputType": "radio",
    "name": "isPerishable",
    "onPage": "isFood",
  },
  {
    "question": "Does it need to be refrigerated?",
    "possibleAnswers": ["Yes", "No"],
    "inputType": "radio",
    "name": "needRefrigerator",
    "onPage": "isFood",
  },
  {
    "question": "What type of food do you want to donate?",
    "possibleAnswers": ["bread", "grains", "beans", "pasta", "canned goods"],
    "inputType": "checkbox",
    "name": "typeOffood",
    "onPage": "isFood",
  },
  {
    "question": "What type of clothing?",
    "possibleAnswers": ["Women's Clothing", "Men's Clothing", "Children's Clothing", "Accessories", "Shoes", "Business Attire", "Winter Items"],
    "inputType": "checkbox",
    "name": "typeClothing",
    "onPage": "isClothing",
  },
  {
    "question": "What household items would you like to donate?",
    "inputType": "text",
    "name": "typeofHousehold",
    "onPage": "isHousehold",
  },
  {
    "question": "What would you like to donate?",
    "inputType": "text",
    "name": "otherDonate",
    "onPage": "isOther",
  },
  {
    "question": "What is your name?",
    "inputType": "text",
    "name": "whatName",
    "onPage": "formEnd",
  },
  {
    "question": "What's your email address?",
    "inputType": "text",
    "name": "emailAddress",
    "onPage": "formEnd",
  },
  {
    "question": "What's your phone number?",
    "inputType": "text",
    "name": "phoneNumber",
    "onPage": "formEnd",
  },
  {
    "question": "Is your donation over 100lbs?",
    "inputType": "radio",
    "name": "isPickup",
    "onPage": "formEnd"
  }
];

var cantAccept = [
"Food that is expired",
"Food containers that are opened",
"Cribs, strollers, playpens, car seats and other infant equipment",
"Furniture",
"Luggage",
"Medication – both prescription and over the counter",
"Non-standard infant formula –  including prescription-only, premature infants, lactose free, and added rice formulas",
"Stuffed animals",
"Bedding- pillows, sheets, blankets, and/or sleeping bags"
]

var wishListProgram = [
"Printing services",
"offsite dry and cold storage",
"office supplies",
"carpentry",
"IT services",
"Handyman services",
"gasoline cards",
"car washes",
"most needed expensive non-perishable items are: tuna, oil, pb, jelly"
]

var wishList4Clients = [
"CTA cards",
"Dental services",
"Veterinary",
"Haircuts",
"Gift cards at stores",
"Fans and heaters"
]

//THE MODEL
  
function Question(config) {
    config = config || {};
    this.question = config.question || " ";
    this.possibleAnswers = config.possibleAnswers || " ";
    this.inputType = config.inputType || "text"; //possible answers 'checkbox', 'radio', or 'text'
    this.name  = config.name || " ";
    this.onPage = config.onPage || " ";
};

//FUNCTION THAT INSTANTIATES AN OBJECT

function QuestionLib(formQuestions) {
  this.items = [];
  for (var i = 0; i < formQuestions.length; i++) {
    this.items.push(new Question(formQuestions[i]));
  }
};

// Calls the function QuestionLib and adds the results of the function to var questionList
var questionsList = new QuestionLib(formQuestions);



//THE VIEW - pulls the DOM class objects (questions and formContainer) into variables for use in the js file

var $questions = $('#questions');
var $formContainer = $('#formContainer');


function displayQuestions(questionsList, onPage){ 
  for (var i = 0; i < questionsList.items.length; i++) {
    // display questions

    if (questionsList.items[i].onPage == onPage){
      // I added a class to each question with the name of the question 
      var $container = $('<div ' + 'class=' + '"' + questionsList.items[i].onPage + '"' + '>');
      var $Qdisplay = $('<p>' + questionsList.items[i].question + '</p>');
      $container.append($Qdisplay);
      var answers = questionsList.items[i].possibleAnswers
      for (x in answers) {
        var $Adisplay = $('<div>');
        $Adisplay.addClass('Aoption');
        if (questionsList.items[i].inputType === "radio") {
          // Added a value to each radio answer to allow the serializeArray to pick up which answer the user marks.
          var $Aoption = $('<input type= '+'"'+ questionsList.items[i].inputType +'"'+'name = ' + '"'+ questionsList.items[i].name+'"' + 'value = '+ '"' + answers[x] + '"' + 'class= '+'"' +answers[x]+'"'+ '/>' + '<label>' + answers[x] + '</label>');
        } else if ( questionsList.items[i].inputType === "text") {
          // Added a value to each radio answer to allow the serializeArray to pick up which answer the user marks.
          var $Aoption = $('<input type= '+'"'+ questionsList.items[i].inputType +'"'+'name = ' + '"'+ questionsList.items[i].name+'"' + 'value = '+ '"' + answers[x] + '"' + 'id= '+'"txt_name"'+ '/>' + '<label>' + answers[x] + '</label>');
        } else {
          var $Aoption = $('<input type= '+'"'+ questionsList.items[i].inputType +'"'+'name = ' + '"'+ answers[x]+'"' + 'class= '+'"' +answers[x]+'"'+ '/>' + '<label>' + answers[x] + '</label>');
        }

        $Adisplay.append($Aoption);
        $container.append($Adisplay);
      }
      $questions.append($container);
    };
  };
}

displayQuestions(questionsList, "startPage");

//function to catch errors
function findErrors() {
  var resultsJSON = $questions.serializeArray();
  for (var i = 0; i < resultsJSON.length; i++) { 
    // displays the donorType on the page
    if(resultsJSON[0].value === "Individual" && resultsJSON[i].name === "isPerishable" && resultsJSON[i].value === "Yes" || resultsJSON[0].value === "Individual" && resultsJSON[i].name === "needRefrigerator" & resultsJSON[i].value === "Yes") {       
      return true;
    }
  }
}

// The function below checks for whether there is a change in the checkboxes for listQuestiontopics and either displays the questions connected to the topics or removes them from the page. 
function showQuestions(thing){
  $('.' + thing).change(function() {
    if (this.checked){
      displayQuestions(questionsList, "is" + thing);
    } 
    else if (!this.checked){
      $('.is' + thing).remove();
    }
  }); 
};

var listQuestiontopics = ["Food", "Clothing", "Household", "Other"];

for( i in listQuestiontopics){
  showQuestions(listQuestiontopics[i]);
};


//NEXT BUTTON VIEW
var $btn = $("<div>");
$btn.addClass('button');
var $btnText = $("<p>Next</p>");
$btn.append($btnText);
$formContainer.append($btn);



var $answersContainer = $('#answersContainer');

var possibleAnswerslist =[];

// This function removes the Yes, No, & Other responses from the list  of possible donations to display on the results page as items offered to donate. 
function answersList(questionsList){ 
  for (var i = 0; i < questionsList.items.length; i++) {
  var answers = questionsList.items[i].possibleAnswers
      for (x in answers){
        var t = answers[x];
        if (t.indexOf("Yes") === -1 && t.indexOf("No") === -1 && t.indexOf("Other") === -1 && t.indexOf("Household")) {
            possibleAnswerslist.push(t);
      };
    }
}};



//BUTTON TO SUBMIT FORM
$btn.click(function() {

  if (findErrors()) {
    var $exceptionMessage = 'Due to food safety regulations, the pantry cannot accept perishable items or food needing refrigeration from individuals.';
    alert($exceptionMessage);
  } else {
    var $resultsMessage = 'Thanks for donating to Lakeview Food Pantry! The details of your order and instructions for next steps are below.';



if($('inputType'))

    var resultsJSON = $questions.serializeArray();
    console.log(resultsJSON);

    answersList(questionsList);
    var $resultsDisplay = $('<div>');
    $resultsDisplay.append($resultsMessage);
   
// Sets up the display of the donation list 
    $resultsDisplay.append('<div>' + 'You are donating...' + '</div>');  
    $resultsDisplay.append("<ul id='donationList'></ul>");
    var $displayList = [];

  for (var i = 0; i < resultsJSON.length; i++) { 
      var a = possibleAnswerslist.indexOf(resultsJSON[i].name);
      if( a > 4) {        
        var $resultsQuestionItem = ('<li>' + resultsJSON[i].name + '</li>');
        $displayList.push($resultsQuestionItem);
      } else if(resultsJSON[i].name =="otherDonate" || resultsJSON[i].name =="typeofHousehold"){
        var $resultsQuestionItem = ('<li>' + resultsJSON[i].value + '</li>');
        $displayList.push($resultsQuestionItem);
    }
  }
 
  
    $answersContainer.append($resultsDisplay);
    $("#donationList").append($displayList);
    $formContainer.css("display","none"); 
  }

});

