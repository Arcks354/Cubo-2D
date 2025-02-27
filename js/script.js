
//document.getElementById('A').style.backgroundColor = 'white';
const a = document.getElementById('A');
const b = document.getElementById('B');
const c = document.getElementById('C');
const d = document.getElementById('D');
a.style.backgroundColor = 'fuchsia';
b.style.backgroundColor = 'red';
c.style.backgroundColor = 'black';
d.style.backgroundColor = 'yellow';



function mudarCor(sentido, copinh1, copinh2 ,copinh3 ,copinh4 ){
    var copinho1 = document.getElementById(copinh1);
    var copinho2 = document.getElementById(copinh2);
    var copinho3 = document.getElementById(copinh3);
    var copinho4 = document.getElementById(copinh4);
    var copo = copinho1.style.backgroundColor;

    if (sentido){
        copinho1.style.backgroundColor = copinho3.style.backgroundColor;
        copinho3.style.backgroundColor = copinho4.style.backgroundColor;
        copinho4.style.backgroundColor = copinho2.style.backgroundColor;
        copinho2.style.backgroundColor = copo;
    }
    else{
        copinho1.style.backgroundColor = copinho2.style.backgroundColor;
        copinho2.style.backgroundColor = copinho4.style.backgroundColor;
        copinho4.style.backgroundColor = copinho3.style.backgroundColor;
        copinho3.style.backgroundColor = copo;
    }
    

    // console.log(copinho.style.backgroundColor);
}