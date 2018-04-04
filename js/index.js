$(document).ready(function() {


/****************************************************
/* Content fade in
/****************************************************/


// load body display as none
$("body").css("display", "none");
// call body image with fadeIn effect
$("body").fadeIn(1000, function(){
    $(this).css("display","normal");
});




/****************************************************
/* Set transition speed
/****************************************************/


// Link slider value with #range
var slider = document.getElementById('range');
// Send slider value to #speed
var output = document.getElementById('speed');
var valueParagraph = document.getElementById('valueParagraph');
var valueParagraphOne = document.getElementById('valueParagraphOne');
var valueParagraphTwo = document.getElementById('valueParagraphTwo');
var valueParagraphThree = document.getElementById('valueParagraphThree');
var valueParagraphFour = document.getElementById('valueParagraphFour');
// Load page with a default values
output.innerHTML = slider.value;
valueParagraph.innerHTML = slider.value;
valueParagraphOne.innerHTML = slider.value;
valueParagraphTwo.innerHTML = slider.value;
valueParagraphThree.innerHTML = slider.value;
valueParagraphFour.innerHTML = slider.value;
// transitionSpeed.innerHTML = slider.value;


// Update value display with slider value
slider.oninput = function() {
  output.innerHTML = this.value;
  valueParagraph.innerHTML = this.value;
  valueParagraphOne.innerHTML = this.value;
  valueParagraphTwo.innerHTML = this.value;
  valueParagraphThree.innerHTML = this.value;
  valueParagraphFour.innerHTML = this.value;
  // $('.preview-speed').css('transition', '' + transitionSpeed.innerHTML += ms '');
}




/****************************************************
/* Inject input value to preview CSS
/****************************************************/







/****************************************************
/* Mourseover hint
/****************************************************/


// // Mouseover previewBall
// $('#previewBall').on('mouseover', function() {
// 	// alert('hi')
// 	// expand slider thumb
// 	// $('.slider::-webkit-slider-thumb').animate({height: "500px"}, 300);
// 	$('::-webkit-slider-thumb').css('background', '#000000');
// });

// // Mouseout previewBall
// $('#previewBall').on('mouseout', function() {
// 	// alert('hi')
// 	// expand slider thumb
// 	// $('.slider::-webkit-slider-thumb').animate({height: "500px"}, 300);
// 	$('::-webkit-slider-thumb').css('height', '50px').css('width', '50px');
// });




/****************************************************
/* Trigger preview
/****************************************************/


// click preview anchor
$('#play-btn').on('click', function(event) {
	// prevent default submit behaviour
	event.preventDefault();
	// add margin left
	$('.preview-ball').toggleClass('move-horizontal');
});




/****************************************************
/* Show code snippet
/****************************************************/


// click create anchor
$('#create').on('click', function(event) {
  // prevent default submit behaviour
  event.preventDefault();
  // show CSS code-snippet
  $('.curve-css').toggleClass('hide');
  // hide curve editor
  $('.curve-editor').fadeOut();
});




/****************************************************
/* Hide code snippet
/****************************************************/


// click create anchor
$('#close').on('click', function(event) {
  // prevent default submit behaviour
  event.preventDefault();
  // show curve editor
  $('.curve-editor').fadeIn();
  // hide CSS code-snippet
  $('.curve-css').toggleClass('hide');
});




});