// <h1>LOADING...00%</h1>
 document.body.style.backgroundColor = "white";
 setInterval(colorchange, 1170);
function redirect() {
  window.open("http://bmipurvjeja.000webhostapp.com/");
}
function colorchange(){
  if(document.body.style.backgroundColor=="white"){
      document.body.style.backgroundColor = "black";
      document.querySelector("h1").style.color = "white";;
      document.querySelector("h2").style.color = "white";
      document.querySelector("p").style.color = "white";
      document.querySelector(".fa-github-square").style.color = "white";
      document.querySelector("b").style.color = "red";
      document.querySelector('.nai').style.color= "red";
     }
   else{
     document.body.style.backgroundColor = "white";
     document.querySelector("h1").style.color = "black";
     document.querySelector("h2 ").style.color = "black";
     document.querySelector("p ").style.color = "black";
     document.querySelector(".fa-github-square").style.color = "black";
     document.querySelector("b").style.color= "blue";
     document.querySelector(".nai").style.color= "blue";
   }

}
