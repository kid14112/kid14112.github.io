document.addEventListener('DOMContentLoaded',function(){

var nut = document.getElementsByClassName('nut1');
var hinh1 = document.getElementById('hinh1');
var hinh2 = document.getElementById('hinh2');
var hinh3 = document.getElementById('hinh3');
var hinh4 = document.getElementById('hinh4');
var hinh5 = document.getElementById('hinh5');
var trangthai = 'h1';
hinh1.classList.add('hienlen');
nut = nut [0]
nut.onclick = function(){

    console.log(trangthai);
    if (trangthai=='h1'){
        hinh1.classList.remove('hienlen');
        hinh1.classList.add('matdi');
        hinh2.classList.add('hienlen');
        trangthai='h2';
    }
    else if (trangthai=='h2'){
        hinh2.classList.remove('hienlen');
        hinh2.classList.add('matdi');
        hinh3.classList.add('hienlen');
        trangthai='h3';
    }
    else if (trangthai=='h3'){
        hinh3.classList.remove('hienlen');
        hinh3.classList.add('matdi');
        hinh4.classList.add('hienlen');
        trangthai='h4';
    }
    else if (trangthai=='h4'){
        hinh4.classList.remove('hienlen');
        hinh4.classList.add('matdi');
        hinh5.classList.add('hienlen');
        trangthai='h5';
    }
    else if (trangthai=='h5'){
        hinh5.classList.remove('hienlen');
        hinh5.classList.add('matdi');
        hinh1.classList.add('hienlen');
        trangthai='h1';

    }
}


},false)