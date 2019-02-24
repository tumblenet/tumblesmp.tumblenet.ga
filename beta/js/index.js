$(document).ready(function() {
    jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};

    function sticky() {
        if ($('.tsmp-top').is(':offscreen')) {
           $('.tsmp-header').addClass("sticky");
           $('.tsmp-top-button').addClass("sticky");
        } else {
           $('.tsmp-header').removeClass("sticky");
           $('.tsmp-top-button').removeClass("sticky");
        }
    }

    $(window).scroll(function() {
        sticky();
    });

});
var counter=0;
function addVideo() {
  var template = $('<div class="video-list-video">\
        <div class="video-image"><img src="http://lorempixel.com/1280/720/?random" alt=""></div>\
        <div class="videoinfo">\
          <h3>Video Title ' + (counter++) + '</h3>\
          <p>Views</p>\
          <p>Likes</p>\
          <p>Comments</p>\
        </div>\
      </div>');
  $(".season-videos").append(template);
}

function toggleMenu() {
  $('.tsmp-sitenav').toggleClass('mobile');
}
