var $ = require("jquery");

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
