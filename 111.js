var color=["rgb(255,0,0)",
"rgb(255,255,0)"
,"rgb(0,255,0)"
,"rgb(0,255,255)"
,"rgb(0,0,255)"
,"rgb(255,0,255)"];
var squares=document.querySelectorAll(".square");
var pickedColor=color[3];
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
for(var i =0; i< squares.length; i++){

squares[i].style.background=color[i];
//add click listeners to squares
squares[i].addEventListener("click",function(){

var clickedColor =this.style.background;

if(clickedColor === pickedColor){
alert("correct");
}else {
alert("wrong");
	
}

});

}



