/*====================================VARIABLES==================================*/
let options =['rock', 'paper', 'scicer', 'alligator','Spock'];
let diccionary={
    'rock':{
        'rock':'tie', 'paper':'loser', 'scicer':'winner', 'alligator':'winner', 'Spock':'loser'
    },
    'paper':{
        'rock':'winner', 'paper':'tie', 'scicer':'loser', 'alligator':'loser', 'Spock': 'winner'
    },
    'scicer':{
        'rock':'loser', 'paper':'winner', 'scicer':'tie', 'alligator':'winner', 'Spock': 'loser'
    },
    'alligator':{
        'rock':'loser', 'paper':'winner', 'scicer':'loser', 'alligator':'tie', 'Spock':'winner'
    },
    'Spock':{
        'rock':'winner', 'paper':'loser', 'scicer':'winner', 'alligator':'loser', 'Spock':'tie'
    }
}
let scoreUser=0;
let iaScore=0;
let scoreUser1=0;
let scoreUser2=0;
let scoreMachine=0;
let control=0;
let optionUser=undefined;
let optionUser1=undefined;
let optionUser2=undefined;
let resultText=undefined;
/*================================GENERAL FUNTIONS===============================*/
/*************************CHANGE***************************/
function hiddeResult(){
    let elements = document.getElementsByClassName("results");
    elements[elements.length-1].style.display = "none";
}
function showResult(){
    let elements = document.getElementsByClassName("results");
    elements[elements.length-1].style.display="";
}
/*************************RANDOME***************************/
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
/*==============================FUNTIONS FOR THE GAME============================*/
/**********************VS MACHINE***************************/
function myFunction1(){
    let optionUser='rock'
    userVSmachine(optionUser);
}
function myFunction2(){
    let optionUser='Spock'
    userVSmachine(optionUser);
}
function myFunction3(){
    let optionUser='paper'
    userVSmachine(optionUser);
}
function myFunction4(){
    let optionUser='scicer'
    userVSmachine(optionUser);
}
function myFunction5(){
    let optionUser='alligator'
    userVSmachine(optionUser);
}
function userVSmachine(usuario) {
    let eleccionMaquina=options[random(0,4)];
    switch(diccionary[usuario][eleccionMaquina]){
        case 'winner':
            scoreUser++;
            /*****/
            resultText=document.getElementsByClassName("results_text");
            resultText[resultText.length-1].innerHTML = `<p>USER: ${usuario} && IA: ${eleccionMaquina}</p>
            <br><p>THE WINNER IS PLAYER 1</p>`;
            document.getElementById("playerScore1").innerHTML =`PLAYER 1 SCORE: ${scoreUser}`;
            document.getElementById("iaScore").innerHTML =`IA SCORE: ${iaScore}`;
            showResult();
            break;
        case 'loser':
            iaScore++;
            resultText=document.getElementsByClassName("results_text");
            resultText[resultText.length-1].innerHTML = `<p>USER: ${usuario} && IA: ${eleccionMaquina}</p>
            <br><p>THE WINNER IS THE IA</p>`;
            document.getElementById("playerScore1").innerHTML =`PLAYER 1 SCORE: ${scoreUser}`;
            document.getElementById("iaScore").innerHTML =`IA SCORE: ${iaScore}`;
            showResult();
            break;
        case 'tie':
            resultText=document.getElementsByClassName("results_text");
            resultText[resultText.length-1].innerHTML = `<p>USER: ${usuario} && IA: ${eleccionMaquina}</p>
            <br><p>YOU HAVE TIE</p>`;
            document.getElementById("playerScore1").innerHTML =`PLAYER 1 SCORE: ${scoreUser}`;
            document.getElementById("iaScore").innerHTML =`IA SCORE: ${iaScore}`;
            showResult();
            break;
    }
}
/**********************VS PLAYER****************************/
function myFunction6(){
    if(control==0){
        optionUser1='rock';
        document.getElementById("player").innerHTML='PLAYER 2: ';
        control++;
    }else{
        optionUser2='rock';
        document.getElementById("player").innerHTML='PLAYER 1: ';
        control=0;
        userVSuser(optionUser1, optionUser2);
    }
}
function myFunction7(){
    if(control==0){
        optionUser1='Spock';
        document.getElementById("player").innerHTML='PLAYER 2: ';
        control++;
    }else{
        optionUser2='Spock';
        document.getElementById("player").innerHTML='PLAYER 1: ';
        control=0;
        userVSuser(optionUser1, optionUser2);
    }
}
function myFunction8(){
    if(control==0){
        optionUser1='paper';
        document.getElementById("player").innerHTML='PLAYER 2: ';
        control++;
    }else{
        optionUser2='paper';
        document.getElementById("player").innerHTML='PLAYER 1: ';
        control=0;
        userVSuser(optionUser1, optionUser2);
    }
}
function myFunction9(){
    if(control==0){
        optionUser1='scicer';
        document.getElementById("player").innerHTML='PLAYER 2: ';
        control++;
    }else{
        optionUser2='scicer';
        document.getElementById("player").innerHTML='PLAYER 1: ';
        control=0;
        userVSuser(optionUser1, optionUser2);
    }
}
function myFunction10(){
    if(control==0){
        optionUser1='alligator';
        document.getElementById("player").innerHTML='PLAYER 2: ';
        control++;
    }else{
        optionUser2='alligator';
        document.getElementById("player").innerHTML='PLAYER 1: ';
        control=0;
        userVSuser(optionUser1, optionUser2);
    }
}
function userVSuser(user1, user2){
    switch(diccionary[user1][user2]){
        case 'winner':
            scoreUser1++;
            resultText=document.getElementsByClassName("results_text");
            resultText[resultText.length-1].innerHTML = `<p>USER: ${user1} && IA: ${user2}</p>
            <br><p>THE WINNER IS PLAYER 1</p>`;
            document.getElementById("playerScore1").innerHTML =`PLAYER 1 SCORE: ${scoreUser1}`;
            document.getElementById("playerScore2").innerHTML =`PLAYER 2 SCORE: ${scoreUser2}`;
            showResult();
            break;
        case 'loser':
            scoreUser2++;
            resultText=document.getElementsByClassName("results_text");
            resultText[resultText.length-1].innerHTML = `<p>USER: ${user1} && IA: ${user2}</p>
            <br><p>THE WINNER IS PLAYER 2</p>`;
            document.getElementById("playerScore1").innerHTML =`PLAYER 1 SCORE: ${scoreUser1}`;
            document.getElementById("playerScore2").innerHTML =`PLAYER 2 SCORE: ${scoreUser2}`;
            showResult();
            break;
        case 'tie':
            resultText=document.getElementsByClassName("results_text");
            resultText[resultText.length-1].innerHTML = `<p>USER: ${user1} && IA: ${user2}</p>
            <br><p>YOU HAVE TIE</p>`;
            document.getElementById("playerScore1").innerHTML =`PLAYER 1 SCORE: ${scoreUser1}`;
            document.getElementById("playerScore2").innerHTML =`PLAYER 2 SCORE: ${scoreUser2}`;
            showResult();
            break;
    }
}
/*============================================================================================*/
hiddeResult();
