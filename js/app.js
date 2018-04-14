$(document).ready(function() {

  var header = $('.header');
      box = $('.box');
      container = $('#container');
      nav = $('nav');
      boxR = $('.boxR');
      mid = $('.mid');
      boxL = $('.boxL');

      //filtering
      $('nav li a').on('click', function() {
        // var all = $(this).attr('class');
        $('nav li a').removeClass('active');
        $(this).parent().addClass('active');
        var all = $(this).html().toLowerCase().replace(" ", '-');
        if(all === 'all-colors') {
          $(container).children('.box').show(500);
        } else {
          $(container).children('.box:not(.' + all + ')').hide(500);
          $(container).children('div.' + all).show(1000);
        }
        return false;
      });

      //wiggle header
      var newTime = new TimelineMax({repeat: -1, repeatDelay: 2})
      .to(header, .8, {rotation:30}, '+=5')
      .to(header, 3, {
        rotation:0, ease:Elastic.easeOut.config(3, 0.1)
        });

    //animation when page loads
   TweenMax.from(header, 3, {
     opacity: 0,
     x: 350,
     ease: Bounce.easeOut
   });
     TweenMax.from(container,1.5, {
      opacity: 0,
      y: 350,
      ease: Bounce.easeOut
    });
    TweenMax.from(nav, 4, {
      opacity: 0,
      x: -400,
      ease: Back.easeInOut
    });
    TweenMax.from(boxR, 3.5, {
      opacity: 0,
      x: -400,
      ease: Bounce.easeOut
  });
    TweenMax.from(mid, 1.5, {
      opacity: 0,
      y: 300,
      ease: Bounce.easeOut
  });
    TweenMax.from(boxL, 3 ,{
      opacity: 0,
      x: 300,
      ease: Bounce.easeOut
  });

});
