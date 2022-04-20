"use strict";

(function(){

  // reference the stuff we need
  const theButton = document.getElementById("mybutton"); 
  let theState = localStorage.getItem("mystate");
  theButton.innerText = localStorage.getItem("mystate");
  
  // for the first launch
  if (theState === null) {
    localStorage.setItem("mystate", "start");
    theState="start";
    theButton.innerText = theState;
  }
  
  // should I stop or should I start?
  function stopGo(event) {
    
    if (theState==="start") {
      event.preventDefault();
      localStorage.setItem("mystate", "stop");
    } else if (theState==="stop") {
      event.preventDefault();
      localStorage.setItem("mystate", "start");
    }
    
    // now we know if we're stopping or starting
    theState = localStorage.getItem("mystate");
    theButton.innerText = theState
    
    // submit the form (via secure Web Socket)
    document.getElementById("myform").submit({method:"post", wss:`//${location.host}/`});
  }
  
  // listen each time the form is submitted
  myform.addEventListener("submit", stopGo);

}());
