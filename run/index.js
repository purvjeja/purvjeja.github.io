//console.log(fetch('https://reqres.in/api/users'));
var totalrun = 0;
var request = new XMLHttpRequest();
request.open("GET","https://purv-run.herokuapp.com/api");
request.send();
request.onload= function(){
  var data = JSON.parse(request.response);
  console.log(data.length);
  console.log(data[1][0]);
    if (data.length > 0){
      var temp = "";
      for (var i = 0; i < data.length; i++) {
        temp += "<tr>";
        temp += "<td>" + data[i][0].slice(0,16) +"</td>";
        temp += "<td>" + data[i][1] +"</td>";
        temp += "<td>" + data[i][2] +"</td>";
        temp += "<td> <a href="+ data[i][3] +" > MORE =></a></td></tr>";
        totalrun = totalrun + data[i][1];
      }
      totalrun = totalrun.toFixed(2);
      document.getElementById("totalshow").innerHTML = "Total Run :" + totalrun + " km / 1000 km";
      document.getElementById("data").innerHTML = temp;
      var elem = document.getElementById("myBar");
      var class_move = document.getElementById("class-move");
      var width = 0;
      var bar_percentage = totalrun / 10;
      var id = setInterval(frame, 100);
      function frame() {
        if(width >= bar_percentage){
          clearInterval(id);
        }
        else{
            width++;
            elem.style.width = width + '%';
            document.getElementById("text").innerHTML = width * 1  + '%';
            class_move.style.marginLeft = width + '%';
        }
      }
  }
}
