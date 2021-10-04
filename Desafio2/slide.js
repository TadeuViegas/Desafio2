var intervalo = 2000;

function slide1(){
    document.getElementById("banner").src = "imagens/banner.jpeg";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("banner").src = "imagens/lencois.jpg";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src = "imagens/culinaria.jpg";
    setTimeout("slide4()",intervalo);
}

function slide4(){
    document.getElementById("banner").src = "imagens/teatro.jpg";
    setTimeout("slide1()",intervalo);
}