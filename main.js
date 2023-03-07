'use strict';

/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

/**************
 * Function
 **************/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {

    const htmlNumbers = document.getElementById('numbers');
    const simonNumbers = [];
    const timer = 3;

    for (let i = 0; i < 5; i++) {
        //genero un numero casuale
        const randomNumber = getRndInteger(1, 100);
        simonNumbers.push(randomNumber);
    }

    htmlNumbers.innerHTML = simonNumbers;

    setTimeout(function(){
        console.log('sono dopo 3 secondi');
        htmlNumbers.innerHTML = '';
    }, timer * 1000);  //3 * 1000 = 3000ms > 3s


    setTimeout(function(){

        const userNumbers = [];

        for(let i = 1; i <= 5; i++){
            const userNumber = Number(prompt(`Inserisci un numero ${i}`));

            if(simonNumbers.includes(userNumber) && !userNumbers.includes(userNumber)){
                userNumbers.push(userNumber);
            }
        }

        if(userNumbers.length > 0){
            document.getElementById('result').innerHTML = `Hai indovinato ${userNumbers.length} numeri. I numeri sono ${userNumbers}`;
        } else {
            document.getElementById('result').innerHTML = `Sei una schiappa!`;
        }
       
       
    }, (timer + 1) * 1000) // (3+1) * 1000 =  4000ms = 4s

}

/**************
 * Main
 **************/

game();








