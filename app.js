var formQuestions = [
  {
    "question": "Are you an... ?",
    "possibleAnswers": ["Individual", "Restaurant", "Grocer", "Other"],
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
    "possibleAnswers": ["bread", "grains", "beans"],
    "inputType": "checkbox",
    "name": "typeOffood",
    "onPage": "isFood",
  },
  {
    "question": "What type of clothing?",
    "possibleAnswers": ["Women's", "Men's", "Children's", "Shoes", "Business Attire", "Winter Clothing", "Summer Clothing"],
    "inputType": "checkbox",
    "name": "typeClothing",
    "onPage": "isClothing",
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
  
function Question(config) {
    config = config || {};
    this.question = config.question || " ";
    this.possibleAnswers = config.possibleAnswers || " ";
    this.inputType = config.inputType || "text"; //possible answers 'checkbox', 'radio', or 'text'
    this.name  = config.name || " ";
    this.onPage = config.onPage || " ";
};
  
function QuestionLib(formQuestions) {
  this.items = [];
  for (var i = 0; i < formQuestions.length; i++) {
    this.items.push(new Question(formQuestions[i]));
  }
};

var questionsList = new QuestionLib(formQuestions);
//console.log(questionsList.items.length);

$questions = $('#questions');


function displayQuestions(questionsList, onPage){ 
  for (var i = 0; i < questionsList.items.length; i++) {
  // display question
  if (questionsList.items[i].onPage == onPage){
    // I added a class to each question with the name of th equestion 
  var $container = $('<div ' + 'class=' + '"' + questionsList.items[i].onPage + '"' + '>');
  var $Qdisplay = $('<p>' + questionsList.items[i].question + '</p>');
  $container.append($Qdisplay);
  var answers = questionsList.items[i].possibleAnswers
  for (x in answers) {
    var $Adisplay = $('<div>');
    $Adisplay.addClass('Aoption');
    if (questionsList.items[i].inputType === "radio") {
      var $Aoption = $('<input type= '+'"'+ questionsList.items[i].inputType +'"'+'name = ' + '"'+ questionsList.items[i].name+'"' + 'class= '+'"' +answers[x]+'"'+ '/>' + '<label>' + answers[x] + '</label>');
    }
    else {
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

// This is just to show the basic version of how I collected the results from the radio and checkboxes  
// I changed the name so that the radio buttons would be exclusive -- NL  
$("input:radio[name='Individual']").click(function() {
    var value = $(this).val();
    console.log(value);
});



// Below:  This can probably be refractored into a resuable function.  
// It monitors for a change in the .Food answer and checks if it is checked.  If checked the isFood questions display.  If not (!) checked, it removes the isFood questions.  

$('.Food').change(function() {
    if (this.checked){
    console.log("hi");
      displayQuestions(questionsList, "isFood");
} else if (!this.checked){
  console.log("bye");
  $('.isFood').remove();
}
}); 

$('.Clothing').change(function() {
    if (this.checked){
    console.log("hi Clothing");
      displayQuestions(questionsList, "isClothing");
} else if (!this.checked){
  console.log("bye Clothing");
  $('.isClothing').remove();
}
}); 
 
$('.Other').change(function() {
    if (this.checked){
    console.log("hi");
      displayQuestions(questionsList, "isOther");
} else if (!this.checked){
  console.log("bye");
  $('.isOther').remove();
}
}); 

var $btn = $("<div>");
$btn.addClass('button');
var $btnText = $("<p>Next</p>");
$btn.append($btnText);
$btn.click(function() {
  //console.log('puppies');
  var resultsJSON = $questions.serializeArray();
  var $resultsDisplay = $('<p>');
  $resultsDisplay.append(resultsDisplay);
  $container.append($resultsDisplay);
});
// $btn.css("width", "200px");
// $btn.css("height", "200px");
// $btn.css("background", "red");
$questions.append($btn);

// function pageNav() {
//   if 
// }

  

  


















  




