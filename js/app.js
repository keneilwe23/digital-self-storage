var ul = document.getElementById("about");
ul.onclick = function(event){
    var li = event.target;
    alert(li.innerHTML);
}