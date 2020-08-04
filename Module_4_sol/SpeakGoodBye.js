(function(window){
  var goodbyespeaker= {};
  goodbyespeaker.speakWord="Good Bye";
  goodbyespeaker.speak=function(names) {
    console.log(goodbyespeaker.speakWord + " " + names);
  }

  window.goodbyespeaker=goodbyespeaker;

})(window);