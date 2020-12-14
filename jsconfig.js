function addLi() 
{
  var li = document.createElement("li");
  var input = document.getElementById("add").value;
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === '') 
  {
    alert("You must write something!");
  } 
  else 
  {
    document.getElementById("abc").appendChild(li);
  }
  document.getElementById("add").value = "";
  var span = document.createElement("SPAN");
  var cross = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cross);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var cross = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(cross);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++)
 {
  close[i].onclick = function()
   {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI')
   {
 
    ev.target.classList.toggle('checked');
  
  }
}, false);

