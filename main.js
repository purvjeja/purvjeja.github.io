document.body.style.backgroundColor = "white";
setInterval(colorchange, 1170);

function colorchange(){
  if(document.body.style.backgroundColor=="white"){
      document.body.style.backgroundColor = "black";
      document.querySelector("h1").style.color = "white";;
      document.querySelector("h2").style.color = "white";
      document.querySelector("p").style.color = "white";
      document.querySelector(".fa-github-square").style.color = "white";
     }
   else{
     document.body.style.backgroundColor = "white";
     document.querySelector("h1").style.color = "black";
     document.querySelector("h2").style.color = "black";
     document.querySelector("p ").style.color = "black";
     document.querySelector(".fa-github-square").style.color = "black";
   }
}
