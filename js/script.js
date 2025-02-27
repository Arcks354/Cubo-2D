// #region QUADS
const quadA = document.getElementById('A');
const quadB = document.getElementById('B');
const quadC = document.getElementById('C');
const quadD = document.getElementById('D');
const quadE = document.getElementById('E');
const quadF = document.getElementById('F');
const quadG = document.getElementById('G');
const quadH = document.getElementById('H');
const quadI = document.getElementById('I');
const quadJ = document.getElementById('J');
const quadK = document.getElementById('K');
const quadL = document.getElementById('L');
const quadM = document.getElementById('M');
const quadN = document.getElementById('N');
const quadO = document.getElementById('O');
const quadP = document.getElementById('P');
const quadQ = document.getElementById('Q');
const quadR = document.getElementById('R');
const quadS = document.getElementById('S');
const quadT = document.getElementById('T');
const quadU = document.getElementById('U');
const quadV = document.getElementById('V');
const quadW = document.getElementById('W');
const quadX = document.getElementById('X');
// #endregion QUADS
//#region cores
quadA.style.backgroundColor = 'fuchsia';
quadB.style.backgroundColor = 'red';
quadC.style.backgroundColor = 'black';
quadD.style.backgroundColor = 'yellow';
quadE.style.backgroundColor = 'fuchsia';
quadF.style.backgroundColor = 'red';
quadG.style.backgroundColor = 'black';
quadH.style.backgroundColor = 'yellow';
quadI.style.backgroundColor = 'fuchsia';
quadJ.style.backgroundColor = 'red';
quadK.style.backgroundColor = 'black';
quadL.style.backgroundColor = 'yellow';
quadM.style.backgroundColor = 'fuchsia';
quadN.style.backgroundColor = 'red';
quadO.style.backgroundColor = 'black';
quadP.style.backgroundColor = 'yellow';
quadQ.style.backgroundColor = 'fuchsia';
quadR.style.backgroundColor = 'red';
quadS.style.backgroundColor = 'black';
quadT.style.backgroundColor = 'yellow';
quadU.style.backgroundColor = 'fuchsia';
quadV.style.backgroundColor = 'red';
quadW.style.backgroundColor = 'black';
quadX.style.backgroundColor = 'yellow';
//#endregion cores

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