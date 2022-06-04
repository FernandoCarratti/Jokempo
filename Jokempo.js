const prompt = require('prompt-sync')();

const itens = ['Pedra', 'Papel', 'Tesoura'];

while(true){
    console.clear();
    let jogadas = +prompt('Digite quantas vezes deseja jogar: ');

    console.log('Escolha entre as seguintes opções para jogar');
    console.log();
    console.log('[1] Pedra');
    console.log('[2] Papel');
    console.log('[3] Tesoura');
    console.log();

    let pontosPC = 0;
    let pontosJog = 0;
    let rodadas = 0;

console.log('BEM VINDO AO JOKEMPÔ!');

    for(let j = 0; j < jogadas; j++){
        let jogador = +prompt('Escolha sua jogada: ');
        while(jogador != 1 && jogador != 2 && jogador != 3){
            console.log('Jogada inválida. Escolha entre [1] Pedra [2] Papel [3] Tesoura');
            console.log();
            jogador = +prompt('Escolha sua jogada: ');
        }
        let pc = itens[Math.floor(Math.random() * 3)];
        if(jogador == 1 && pc == itens[0]){
            console.log('Empate! Você jogou Pedra e computador também.');
        }else if(jogador == 1 && pc == itens[1]){
            console.log();
            console.log('O computador venceu! Você jogou Pedra e o computador jogou Papel.');
            pontosPC++
        }else if(jogador == 1 && pc == itens[2]){
            console.log();
            console.log('Você venceu! Você jogou Pedra e o computador jogou tesoura.');
            pontosJog++
        }else if(jogador == 2 && pc == itens[0]){
            console.log();
            console.log('Você venceu! Você jogou Papel e o computador jogou Pedra.');
            pontosJog++
        }else if(jogador == 2 && pc == itens[1]){
            console.log()
            console.log('Empate! Você jogou Papel e computador também.');
        }else if(jogador == 2 && pc == itens[2]){
            console.log();
            console.log('O computador venceu! Você jogou Papel e o computador jogou Tesoura.');
            pontosPC++
        }else if(jogador == 3 && pc == itens[0]){
            console.log();
            console.log('O computador venceu! Você jogou Tesoura e o computador jogou Pedra.');
            pontosPC++
        }else if(jogador == 3 && pc == itens[1]){
            console.log();
            console.log('Você venceu! Você jogou Tesoura e o computador jogou Papel.');
            pontosJog++
        }else{
            console.log();
            console.log('Empate! Você jogou Tesoura; e computador também.');
        }
    }
    if(pontosPC > pontosJog){
        console.log(`O computador foi o vencerdor em ${pontosPC} jogadas`);
    }else if(pontosPC < pontosJog){
        console.log(`Você venceu com ${pontosJog} jogadas`);
    }else{
        console.log('O jogo terminou empatado.');
    }
    let novoJogo = +prompt('Deseja jogar novamente? [1]SIM [2]NÃO: ');
    if(novoJogo == 1){
        continue;
    }else{
        break;
    }
}
console.log();
console.log('O jogo terminou.')