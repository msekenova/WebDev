
	var list = document.getElementsByTagName("li");
	for (var i = 0; i < list.length; i++) {
  		var span = document.createElement("span");
  		var txt = document.createTextNode("\uD83D\uDDF6");
  		span.className = "close";
  		span.appendChild(txt);
  		list[i].appendChild(span);
	}

	var close = document.getElementsByClassName("close");
	for (var i = 0; i < close.length; i++) {
  		close[i].onclick = function() {
    		var elem = this.parentElement;
    		elem.remove();
  		}
	}




document.querySelector("button").onclick = newTask;

function newTask() {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  var del = document.createElement("del");
  checkbox.type = "checkbox";
  checkbox.className = "chk";
  var inputValue = document.getElementById("new-task").value;
  var t = document.createTextNode(inputValue);
  del.appendChild(t);
  li.appendChild(checkbox);
  li.appendChild(del);
  if (document.getElementById("new-task").value != "") {
  	document.getElementById("un-list").appendChild(li);

  }else {
  	alert("Please, write at least 1 word");
  }
  
  document.getElementById("new-task").value = null;
  this.textContent = "Add";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDF6");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var elem = this.parentElement;
      elem.remove();
    }
  }
}