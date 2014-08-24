//   $.ajax({type: "GET",
//     url: "pantries.json",
//     dataType: "json",
//     success: function(pantries, e, f) {
//         for (var i = 0; i < pantries.length; i++) {
//           var video = videos[i];
//           addVideoToList(video);
//         }
//       },
//     error: function(pantries, b, t) {
//       console.log(t);
//       }
//   });
// });

//form ids = #start, #disclaimer, #isFood, #isClothing, #isOther, #end


$(document).ready(function() {

var formStart = $('#start');
var disclaimer = $('#disclaimer');
var isFood = $('#isFood');
var isClothing = $('#isClothing');
var isOther = $('#isOther');
var formEnd = $('#end');
var resultSuccess = $('#success');
var resultFail = $('#fail');

function switchForm(currentPage, nextPage) {
  currentPage.css('display','none');
  nextPage.css('display','block');
}

//incomplete
function formStartSubmit() {
  var donorType = $('.donorType').val;
  console.log(donorType);
  var donationType = $('.donationType').val;
  console.log(donationType);
  if (donorType === 'individual')
}

//switchForm(formStart, disclaimer);

});
