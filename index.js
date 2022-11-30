let options =['rock', 'paper', 'scicer', 'alligator','Spock'];
let diccionary=
{
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

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function userVSuser(user1, user2){
    let eleccionUsuario1=options[user1];
    let eleccionUsuario2=options[user2];
    console.log('> Tu: '+eleccionUsuario1+' vs Usuario2: '+eleccionUsuario2);
    switch(diccionary[eleccionUsuario][eleccionMaquina]){
        case 'winner':
            console.log('> you won');
            break;
        case 'loser':
            console.log('> you lose');
            break;
        case 'tie':
            console.log('> you have tied');
            break;
    }
}


function userVSmachine(Usuario) {
    let eleccionMaquina=options[random(0,4)];
    let eleccionUsuario =options[Usuario];
    console.log('> Tu: '+eleccionUsuario+' vs Maquina: '+eleccionMaquina);
    switch(diccionary[eleccionUsuario][eleccionMaquina]){
        case 'winner':
            console.log('> you won');
            break;
        case 'loser':
            console.log('> you lose');
            break;
        case 'tie':
            console.log('> you have tied');
            break;
    }
}

function contador(){

}

/**
 * function gameMode(x){
    if(x==1){
        usuario=prompt('> you have selected man vs machine mode choose: ','');
        userVSmachine(usuario);
    }else if(x==2){
        usuario1=prompt('> you have selected man vs machine mode choose: ','');
        usuario2=prompt('choose: ', '');
        userVSuser(usuario1, usuario2);
    }else{
        prompt('try again');
    }
}
 */

