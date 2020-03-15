$("#button").click(function(){
    
});

var happyText = document.getElementById("happyText")
var happy = document.getElementById("happy"),
  count = 0;
happy.onclick = function() {
  count += 1;
  happy.innerHTML = "<p>Happy: </p>" + " " + count;
};




//You can add an icon with the addClass function. 
//Set up the icon in css and then just have it added to your html 
