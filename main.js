createBoard();

let player = [];

player[1] = new Player('blue');
player[0] = new Player('red');

let currPlayer = Math.floor(0 + Math.random()*(1 + 1 - 0));

document.querySelector(".chakka").onclick = mainPlay;

window.onkeydown = (e) => {
    
    if(e.key === ' ') mainPlay();
} 

async function mainPlay() {

    if(wait) return;

    currPlayer = (currPlayer == 1) ? currPlayer = 0 : currPlayer = 1;
    
    let diceVal = roll();
    
    if(player[currPlayer].pos == 1) {

        if(diceVal == 1) {

            wait = true;
            player[currPlayer].move(diceVal);

            await sleep(700);

            currPlayer = (currPlayer == 1) ? currPlayer = 0 : currPlayer = 1;
        }

    }else if((player[currPlayer].pos + diceVal <= 100)) {
        
        wait = true;
        player[currPlayer].move(diceVal);
    }
    
}
