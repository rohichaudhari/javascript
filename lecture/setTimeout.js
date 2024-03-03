// setTimeout
// setTimeout(function(){
//     console.log("hello");
// },5000)
var id=setTimeout(Anim,2000);
 function Anim(){
    var target=document.getElementById("text");
    target.style.width="1000px";
 }
  function stop(){
    clearTimeout(id);
  }

 