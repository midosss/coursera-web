(function (window) {
  
var byespeaker = {};
byespeaker.speakWord = "Good Bye";


byespeaker.speak = function (name) {
  
  console.log(byespeaker.speakWord + " " + name);
};
window.byespeaker = byespeaker;
})(window)
