
//how to get inner html value
//document.getElementById("Id name").innerHTML

//how to assign a value
//var X=10

function inc(){
var count=document.getElementById("num").innerHTML;
count=parseInt(count)+1
document.getElementById("num").innerHTML=count
}
function dec(){
var substrate=document.getElementById("num").innerHTML;
substrate=parseInt(substrate)-1
document.getElementById("num").innerHTML=substrate
}
function reset(){
var set=document.getElementById("num").innerHTML="0";
}
















