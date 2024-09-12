let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        // console.log("choices was clicked");
        const userchoice = choice.getAttribute("id");
        // console.log(userchoice);
        playgame(userchoice);
    });
});
const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    // const comptchoice = compchoice();
    console.log("comp choice =", compchoice());

    if (userchoice === compchoice()) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice() === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice() === "scissors" ? false : true;
        } else {
            userwin = compchoice() === "rock" ? false : true;
        }
        showWinner(userwin, compchoice(), userchoice);

    }

};


const compchoice = () => {
    const options = ["paper", "scissors", "rock"];
    const self = Math.floor(Math.random() * 3);
    return options[self];
};

const draw = () => {
    // console.log("game was draw");
    msg.innerText = "Draw"
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        userScore.innerText = userscore;
        console.log("you win");
        msg.innerText = 'you win!';
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScore.innerText = compscore;
        // console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
}
const msg = document.querySelector("#msg");


const userScore = document.querySelector("#userscore");
const compScore = document.querySelector("#compscore");