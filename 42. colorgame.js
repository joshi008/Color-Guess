var numberOfSquares = 6;
var colors = col(numberOfSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var bt1 = document.getElementById("button");
var easybtn = document.getElementById("bt2");
var hardbtn = document.getElementById("bt3");



easybtn.addEventListener("click",function() {
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = col(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	message.innerHTML="";
	bt1.textContent = "NEW COLORS";
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++)
	{
		if(i<3)
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	} 

});

hardbtn.addEventListener("click",function() {
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberOfSquares = 6;
	colors = col(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	message.innerHTML="";
	bt1.textContent = "NEW COLORS";
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++)
	{
		if(i<3)
			squares[i].style.backgroundColor = colors[i];
		else
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}	
	}
});

bt1.addEventListener("click",function(){
	colors = col(numberOfSquares);
	pickedColor = pickColor();
	bt1.textContent = "NEW COLORS";
	colorDisplay.textContent=pickedColor;
	message.innerHTML="";
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function() {
		if(this.style.backgroundColor == pickedColor)
		{
			message.innerHTML="Correct !!!";
			h1.style.backgroundColor=pickedColor;
			bt1.textContent = "PLAY AGAIN";
			for(var j=0;j<squares.length;j++)
			{
				squares[j].style.backgroundColor = pickedColor;
			}
		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.innerHTML="Try Again :-(";
		}
	});
	squares[i].style.backgroundColor = colors[i];
}

function pickColor()
{
	var g = Math.floor(Math.random()*colors.length);
	return colors[g]; 
}

function col(num)
{
	var a=[];
	for(var i=0;i<num;i++)
	{
		var c1 = Math.floor(Math.random()*256);
		var c2 = Math.floor(Math.random()*256);
		var c3 = Math.floor(Math.random()*256);
		var c= "rgb("+c1+", "+c2+", "+c3+")";
		a[i]=c;
	}
	
	return a;
}