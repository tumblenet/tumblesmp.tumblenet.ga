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

module.exports = addVideo;
