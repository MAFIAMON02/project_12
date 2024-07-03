let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let message = document.getElementById("message");
let newBtn = document.querySelector("#new-btn");
let btn = document.querySelector('.newbtn');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO === true)
        {
            box.textContent = "O";
            box.style.color = "maroon";
            turnO = false;
        }
        else
        {
            box.textContent = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                message.textContent = `Player ${pos1 === "O" ? "O" : "X"} wins!`;
                showWinner();

            }
        }
    }
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

const disableBoxes = () => {
    for(let b of boxes)
    {
        b.disabled = true;
    }
}
const showWinner = () => {
    btn.classList.remove('hide');
    disableBoxes();
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    btn.classList.add("hide");
    message.textContent = "";
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);