var winHeight = $(window).height();
var winWidth = $(window).width();

$('#create-timeline').click(function(){
  'use strict',
   $('.new-timeline-popup').css({
      left: winWidth/2 - 200, //centers horizontally
      top: winHeight/2 - 100
    });
  $('.new-timeline-popup').show();
  //add if other popup visible
    //hide  
});

$('#create-timeline-event').click(function(){
  'use strict',
   $('.new-event-popup').css({
      left: winWidth/2 - 200, //centers horizontally
      top: winHeight/2 - 100
    });
  $('.new-event-popup').show();
  //add if other popup visible
    //hide
});
