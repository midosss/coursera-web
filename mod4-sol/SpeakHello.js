(function (window) {
  
 var hellospeaker = {} ;
 hellospeaker.speakWord = "Hello";
 

 hellospeaker.speak = function (name) {
   console.log(hellospeaker.speakWord + " " + name);
 };
 window.hellospeaker = hellospeaker;
})(window);
