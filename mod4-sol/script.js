var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

for (var i=0 ; i < names.length ; i++) {


  if ( names[i][0] == "J" || names[i][0] == "j" ) {
    byespeaker.speak(names[i])
  } else {
    hellospeaker.speak(names[i]);
  }
}
