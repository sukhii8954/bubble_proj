{/* <div class="main">
  <div class="grass">
    <div class="b1">
       <div class="b2"></div>
      <div class="b2 b3"></div>
    </div>
  </div>
</div> */}


// ------ bubble game ------------
    
timing=60;
var score = 0;
var hitrndm = 0;

function makebubble(){
  var bubble = "";

   for( var i =1; i<=75; i++){

    var rdn= Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${rdn}</div>`;
       
   }

   document.querySelector("#btmpanel").innerHTML=bubble;

}


function newHit(){
  hitrndm= Math.floor(Math.random()*10);
  document.querySelector("#hitvalue").textContent=hitrndm;
}

function runtimer(){
  var timer = setInterval(function() {
    if(timing>0){
      timing--;
      document.querySelector("#timeval").textContent=timing;
    }
    else{
      clearInterval(timer);
      document.querySelector("#btmpanel").innerHTML=`<h1>Game Over!</h1>`;
    }
  }, 1000)
  
 
}


function increasescore(){
  score += 10;
  document.querySelector("#scoreval").textContent=score;

}
 

document.querySelector("#btmpanel").addEventListener("click",function(dets){
  var clickedbubble = Number(dets.target.textContent);
 
  if(hitrndm===clickedbubble){
    increasescore();
    newHit();
    makebubble();
  }
  
})


makebubble();
runtimer();
newHit(); 
