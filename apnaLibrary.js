let playerCounts = 0;
let wait = false;   // to prevent double immediate click while processing

class Player {

    constructor(color) {

        this.pos = 1;
        this.className = `player${playerCounts}`;

        {
            document.getElementsByTagName('main')[0].innerHTML += '<div class = "player player' + playerCounts + '"></div>';

            let ele = document.getElementsByClassName('player' + playerCounts)[0];

            ele.style.background = color;

            ele.style.left = document.getElementsByClassName(`b${1}`)[0].getBoundingClientRect().x + 7.1875;

            ele.style.top = document.getElementsByClassName(`b${1}`)[0].getBoundingClientRect().y + 7.1875;

            playerCounts++;
        }
    }

    move = async function (step) {

        let player = document.getElementsByClassName(this.className)[0];
        let l, r;
        for (let i = this.pos; i < this.pos+1 + step; i++) {

            await sleep(300);

            l = document.getElementsByClassName(`b${i}`)[0].getBoundingClientRect().x;
            r = document.getElementsByClassName(`b${i}`)[0].getBoundingClientRect().y;
            player.style.left = l + 7.1875;
            player.style.top = r + 7.1875;
        }
        this.pos = this.pos + step;
        checkPosition();
    }

    jump = function (block) {

        let player = document.getElementsByClassName(this.className)[0];
        let l, r;
        l = document.getElementsByClassName(`b${block}`)[0].getBoundingClientRect().x;
        r = document.getElementsByClassName(`b${block}`)[0].getBoundingClientRect().y;
        player.style.left = l + 7.1875;
        player.style.top = r + 7.1875;

        this.pos = block;
    }
};





function createBoard() {

    let container = document.getElementsByTagName('main')[0];
    let reverse = false;

    for (let i = 100; i >= 1; i -= 10) {

        if (!reverse) {

            for (let j = i; j > i - 10; j--) {

                container.innerHTML += '<div class="block b' + j + '" style="background: ' + randomColor() + ';">' + j + '</div>';
            }
            reverse = true;
        } else {

            for (let j = i - 9; j <= i; j++) {

                container.innerHTML += '<div class="block b' + j + '" style="background: ' + randomColor() + ';">' + j + '</div>';
            }
            reverse = false;
        }

    }
}






const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}





function randomColor() {

    let r = Math.floor(Math.random() * 255) + 0;
    let g = Math.floor(Math.random() * 255) + 0;
    let b = Math.floor(Math.random() * 255) + 0;

    return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

function playerWins() {

    document.getElementsByClassName('winner')[0].innerHTML = `Player ${currPlayer+1} Wins ${(currPlayer == 0) ? 'RED' : 'BLUE'}`;
    toggleWinnerView();

    setTimeout(()=>{

        player[0].jump(1);
        player[1].jump(1);
        toggleWinnerView();
    }, 3000);
}



function toggleWinnerView() {

    document.getElementsByClassName('winner')[0].classList.toggle('animate');
    document.getElementsByTagName('main')[0].classList.toggle('blur');
}




async function checkPosition() {

    await sleep(300);

    if(player[currPlayer].pos == 5) {

        player[currPlayer].jump(46);
    }
    if(player[currPlayer].pos == 28) {

        player[currPlayer].jump(9);
    }
    if(player[currPlayer].pos == 45) {

        player[currPlayer].jump(19);
    }
    if(player[currPlayer].pos == 41) {

        player[currPlayer].jump(22);
    }
    if(player[currPlayer].pos == 43) {

        player[currPlayer].jump(79);
    }
    if(player[currPlayer].pos == 89) {

        player[currPlayer].jump(33);
    }
    if(player[currPlayer].pos == 32) {

        player[currPlayer].jump(71);
    }
    if(player[currPlayer].pos == 65) {

        player[currPlayer].jump(97);
    }
    if(player[currPlayer].pos == 98) {

        player[currPlayer].jump(56);
    }
    if(player[currPlayer].pos == 92) {

        player[currPlayer].jump(66);
    }
    if(player[currPlayer].pos == 100) {

        playerWins();
    }

    wait = false;
}