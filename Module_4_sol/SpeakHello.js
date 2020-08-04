(function(window){
  var hellospeaker={};
  hellospeaker.speakWord="Hello";
  hellospeaker.speak=function(names) {
    console.log(hellospeaker.speakWord + " " + names);
  }

  window.hellospeaker=hellospeaker;

})(window);