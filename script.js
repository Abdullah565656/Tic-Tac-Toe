let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGame = document.getElementById("new-game");
let msgContainer = document.getElementById("target");
let msg = document.getElementById("msg");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () =>{
    turnO = true;
    enabledBtns()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        if(turnO){
            box.innerHTML = "O"
            turnO = false;
        } else {
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    })
})

const disabledBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

function showWinner(winner){
    msg.innerText = `Congrats, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                disabledBtns();
                showWinner(pos1);
            }
        }
    }
}

newGame.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);