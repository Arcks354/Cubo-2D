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
//#region cores das faces
quadA.style.backgroundColor = 'red';
quadB.style.backgroundColor = 'red';
quadC.style.backgroundColor = 'red';
quadD.style.backgroundColor = 'red';
quadE.style.backgroundColor = 'yellow';
quadF.style.backgroundColor = 'yellow';
quadG.style.backgroundColor = 'yellow';
quadH.style.backgroundColor = 'yellow';
quadI.style.backgroundColor = 'green';
quadJ.style.backgroundColor = 'green';
quadK.style.backgroundColor = 'green';
quadL.style.backgroundColor = 'green';
quadM.style.backgroundColor = 'blue';
quadN.style.backgroundColor = 'blue';
quadO.style.backgroundColor = 'blue';
quadP.style.backgroundColor = 'blue';
quadQ.style.backgroundColor = 'black';
quadR.style.backgroundColor = 'black';
quadS.style.backgroundColor = 'black';
quadT.style.backgroundColor = 'black';
quadU.style.backgroundColor = 'orange';
quadV.style.backgroundColor = 'orange';
quadW.style.backgroundColor = 'orange';
quadX.style.backgroundColor = 'orange';
//#endregion cores das faces

// função comandoCor é chamada usando botões de virar o cubo e ao embaralhar
//ela é responsavel por chamar a função mudarCor com as faces que irão mover
function comandoCor(direcao, comando){
    //console.log(comando);
    if (comando == 1){  mudarCor(direcao,'A', 'B', 'C', 'D', 'E', 'F', 'I', 'K', 'S', 'Q', 'M', 'O')}
    else{
        if (comando == 2){  mudarCor(direcao,'E', 'F', 'G', 'H', 'A', 'B', 'I', 'J', 'X', 'W', 'P', 'O')}
        else{
            if (comando == 3){  mudarCor(direcao,'I', 'J', 'K', 'L', 'D', 'B', 'F', 'H', 'X', 'V', 'T', 'S')}
            else{
                if (comando == 4){  mudarCor(direcao,'N', 'M', 'P', 'O', 'C', 'A', 'E', 'G', 'W', 'U', 'R', 'Q')}
                else{
                    if (comando == 5){  mudarCor(direcao,'R', 'Q', 'T', 'S', 'C', 'D', 'K', 'L', 'V', 'U', 'N', 'M')}
                    else{
                        if (comando == 6){  mudarCor(direcao,'V', 'U', 'X', 'W', 'G', 'H', 'J', 'L', 'T', 'R', 'N', 'P')}
                        else{   console.log(comando);   }
                    }
                }
            }
        }
    }

}

//funcão mudarCor é chamada através da função comandoCor, ela recebe as faces que irão mover e faz o processo de troca
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
    
    let som = new Audio("../som/click.mp3"); // Substitua pelo caminho correto do seu arquivo
    som.play();
    // console.log(copinho.style.backgroundColor);
}


function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function embaralha(){
    let i=0;
    while(i <30){
        const x = Math.floor(Math.random() * 2);
        const y = Math.floor(Math.random() * 6) + 1;
        console.log(i);
        comandoCor(x, y);
        i++;
        await esperar(50); // Espera 1 segundo antes de continuar
    }
}