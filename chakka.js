let chakka = document.querySelector(".chakka");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let dices = document.querySelectorAll(".diceNum");
let heading = document.querySelector("h1");
let btn = document.querySelector("button");

function roll() {

    chakka.classList.toggle('roll');
    

    let randomDice = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    for (let items of dices) {
        
        items.style.display="none";
    }

    switch (randomDice) {

        case 1:
            one.style.display = "flex";
            break;
        case 2:
            two.style.display = "flex";
            break;
        case 3:
            three.style.display = "flex";
            break;
        case 4:
            four.style.display = "flex";
            break;
        case 5:
            five.style.display = "flex";
            break;
        case 6:
            six.style.display = "flex";
            break;
    }

    return randomDice;
}

