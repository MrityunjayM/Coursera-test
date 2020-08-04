(function(){
  var names = ["Mrityunjay","Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0; i<names.length;i++) {

    var intlet=names[i].charAt(0);
    if ((intlet==='J') || (intlet==='j')) {
      goodbyespeaker.speak(names[i]);
    }
    else {
      hellospeaker.speak(names[i]);
    }
  }
})();
