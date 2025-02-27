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
quadA.style.backgroundColor = 'rgb(255, 0, 0)';
quadB.style.backgroundColor = 'rgb(235, 0, 0)';
quadC.style.backgroundColor = 'rgb(215, 0, 0)';
quadD.style.backgroundColor = 'rgb(195, 0, 0)';
quadE.style.backgroundColor = 'rgb(255, 255, 0)';
quadF.style.backgroundColor = 'rgb(235, 235, 0)';
quadG.style.backgroundColor = 'rgb(215,215,0)';
quadH.style.backgroundColor = 'rgb(195,195,0)';
quadI.style.backgroundColor = 'rgb(0, 255, 0)';
quadJ.style.backgroundColor = 'rgb(0,235,0)';
quadK.style.backgroundColor = 'rgb(0,215,0)';
quadL.style.backgroundColor = 'rgb(0,195,0)';
quadM.style.backgroundColor = 'rgb(0,0,255)';
quadN.style.backgroundColor = 'rgb(0,0,235)';
quadO.style.backgroundColor = 'rgb(0,0,215)';
quadP.style.backgroundColor = 'rgb(0,0,195)';
quadQ.style.backgroundColor = 'rgb(20,20,20)';
quadR.style.backgroundColor = 'rgb(30,30,30)';
quadS.style.backgroundColor = 'rgb(10,10,10)';
quadT.style.backgroundColor = 'rgb(0,0,0)';
quadU.style.backgroundColor = 'rgb(255,155, 0)';
quadV.style.backgroundColor = 'rgb(245,140, 0)';
quadW.style.backgroundColor = 'rgb(255,130, 0)';
quadX.style.backgroundColor = 'rgb(255,120, 0)';
//#endregion cores

function mudarCor(sentido, copinh1, copinh2, copinh3, copinh4, caneca1, caneca2, caneca3, caneca4, caneca5, caneca6, caneca7, caneca8){
    
    var copinho1 = document.getElementById(copinh1);
    var copinho2 = document.getElementById(copinh2);
    var copinho3 = document.getElementById(copinh3);
    var copinho4 = document.getElementById(copinh4);

    var caneco1 = document.getElementById(caneca1);
    var caneco2 = document.getElementById(caneca2);
    var caneco3 = document.getElementById(caneca3);
    var caneco4 = document.getElementById(caneca4);
    var caneco5 = document.getElementById(caneca5);
    var caneco6 = document.getElementById(caneca6);
    var caneco7 = document.getElementById(caneca7);
    var caneco8 = document.getElementById(caneca8);

    var copo = copinho1.style.backgroundColor;
    var caneco = caneco1.style.backgroundColor;

    if (sentido){
        copinho1.style.backgroundColor = copinho3.style.backgroundColor;
        copinho3.style.backgroundColor = copinho4.style.backgroundColor;
        copinho4.style.backgroundColor = copinho2.style.backgroundColor;
        copinho2.style.backgroundColor = copo;
        // diferente daki pra frente
        caneco1.style.backgroundColor = caneco7.style.backgroundColor;
        caneco7.style.backgroundColor = caneco5.style.backgroundColor;
        caneco5.style.backgroundColor = caneco3.style.backgroundColor;
        caneco3.style.backgroundColor = caneco;
        caneco = caneco2.style.backgroundColor;
        caneco2.style.backgroundColor = caneco8.style.backgroundColor;
        caneco8.style.backgroundColor = caneco6.style.backgroundColor;
        caneco6.style.backgroundColor = caneco4.style.backgroundColor;
        caneco4.style.backgroundColor = caneco;
    }
    else{
        copinho1.style.backgroundColor = copinho2.style.backgroundColor;
        copinho2.style.backgroundColor = copinho4.style.backgroundColor;
        copinho4.style.backgroundColor = copinho3.style.backgroundColor;
        copinho3.style.backgroundColor = copo;
        // diferente daki pra frente
        caneco1.style.backgroundColor = caneco3.style.backgroundColor;
        caneco3.style.backgroundColor = caneco5.style.backgroundColor;
        caneco5.style.backgroundColor = caneco7.style.backgroundColor;
        caneco7.style.backgroundColor = caneco;
        caneco = caneco2.style.backgroundColor;
        caneco2.style.backgroundColor = caneco4.style.backgroundColor;
        caneco4.style.backgroundColor = caneco6.style.backgroundColor;
        caneco6.style.backgroundColor = caneco8.style.backgroundColor;
        caneco8.style.backgroundColor = caneco;

    }
    

    // console.log(copinho.style.backgroundColor);
}