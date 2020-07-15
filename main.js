// <h1>LOADING...00%</h1>
 document.body.style.backgroundColor = "white";
 setInterval(colorchange, 1170);
function redirect() {
  window.open("http://bmipurvjeja.000webhostapp.com/");
}
function colorchange(){
  if(document.body.style.backgroundColor=="white"){
      document.body.style.backgroundColor = "black";
      document.querySelector("h1").style.color = "white";
      document.querySelector("p").style.color = "white";
      document.querySelector("button").style.color = "black";
      document.querySelector("button").style.backgroundColor = "white";
   }
   else{
     document.body.style.backgroundColor = "white";
     document.querySelector("h1").style.color = "black";
     document.querySelector("p").style.color = "black";
     document.querySelector("button").style.color = "white";
     document.querySelector("button").style.backgroundColor = "black";
   }
}
