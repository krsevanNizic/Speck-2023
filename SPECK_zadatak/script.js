var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var button1 = document.getElementById("remove");


function valueLength()
{
	return input.value.length;
}

function addListElement()
{
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}
function addListAfterClick()
{
		if(valueLength() > 0){
		addListElement();
	}
}
function addListAfterKeypress(event)
{
	if(valueLength() > 0 && event.code === "Enter"){
	addListElement();
	}
}
function removeChild(){
		while (ul.hasChildNodes()) {
  		ul.removeChild(ul.firstChild);
}
	}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
button1.addEventListener("click", removeChild);

