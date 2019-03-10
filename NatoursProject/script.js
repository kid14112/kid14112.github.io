document.addEventListener("DOMContentLoaded",function(){

var menu = document.getElementsByClassName('menu-icon');
var layer = document.getElementsByClassName('background-layer')
console.log(menu[0]);
menu[0].onclick = function() {
    layer[0].classList.toggle('background-layer-add');
}
    
},false)