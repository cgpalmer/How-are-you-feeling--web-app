//Showing the results button
$("#button").click(function(){
    $(".results").slideDown('slow');
    $(".footer").css('height', '10px');
    $(".header").addClass("d-none");
    $(".emotions").addClass("d-none");
    $(".footer").addClass("d-none");
    $("#grid").removeClass("grid-container").addClass("grid-container-after-result");
    $(".breakdown").slideDown('slow');   
});

$("#bdown-button").click(function(){   
    $("#results-grid").removeClass("d-none");
    $(".item18").text(item2 + " " + item2Count);
    $(".item19").text(item3 + " " + item3Count);
    $(".item20").text(item4 + " " + item4Count);
    $(".item21").text(item5 + " " + item5Count);
    $(".item22").text(item6 + " " + item6Count);
    $(".item23").text(item7 + " " + item7Count);
    $(".item24").text(item8 + " " + item8Count);
    $(".item25").text(item9 + " " + item9Count);
    $(".item26").text(item10 + " " + item10Count);
    $(".item27").text(item11 + " " + item11Count);
    $(".item28").text(item15 + " " + item15Count);
    $(".item29").text(item16 + " " + item16Count);
    
});

//Counter credit to - BharathRao https://stackoverflow.com/questions/29717559/javascript-count-how-many-time-a-button-is-pressedfunction/29717702#29717702?newreg=cf5ade63a0e74d019f32870ec32d44a7
//Individual counting
var item2="Happy:"
$(".item2").click(function(){
    item2Count++;
});    
var item2Count = 0;


var item3="Sad:"
$(".item3").click(function(){
    item3Count++;
});    
var item3Count = 0;


var item4="Angry:"
$(".item4").click(function(){
    item4Count++;
});    
var item4Count = 0;


var item5="Excited:"
$(".item5").click(function(){
    item5Count++;
});    
var item5Count = 0;


var item6="Frustrated:"
$(".item6").click(function(){
    item6Count++;
});    
var item6Count = 0;


var item7="Sick:"
$(".item7").click(function(){
    item7Count++;
});    
var item7Count = 0;


var item8="Proud:"
$(".item8").click(function(){
    item8Count++;
});    
var item8Count = 0;


var item9="Disappointed:"
$(".item9").click(function(){
    item9Count++;
});    
var item9Count = 0;


var item10="Ecstatic:"
$(".item10").click(function(){
    item10Count++;
});    
var item10Count = 0;


var item11="Nervous:"
$(".item11").click(function(){
    item11Count++;
});    
var item11Count = 0;


var item15="Determined:"
$(".item15").click(function(){
    item15Count++;
});    
var item15Count = 0;


var item16="Tired:"
$(".item16").click(function(){
    item16Count++;
});    
var item16Count = 0;



//Counting altogether
var countClicks = 0;
$(".positive-emotions").click(function(){
    countClicks++;
    $("#positive").text("Positive feelings:" + " " + countClicks);
});    

var countClick = 0;
$(".negative-emotions").click(function(){
    countClick++;
     $("#negative").text("Negative feelings:" + " " + countClick);
});    


     





//You can add an icon with the addClass function. 
//Set up the icon in css and then just have it added to your html 
