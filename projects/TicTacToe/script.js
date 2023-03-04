let boxes=document.querySelectorAll(".box")
let restart=document.querySelector("button")
let playerText=document.querySelector("h1")
let winningIndicator=getComputedStyle(document.body).getPropertyValue("--winningBlocks")
boxes=Array.from(boxes)
let spaces=Array(9).fill(null)

const O="O"
const X="X"

let currentPlayer=X

const startGame=()=>{
    boxes.forEach(box=>box.addEventListener(("click"),(e)=>{
        const id=e.target.id
        if(!spaces[id]){
            spaces[id]=currentPlayer
            e.target.innerText=currentPlayer
            e.target.setAttribute("align", "center");
        }
        console.log(playerWon())
        if (playerWon()!=false){
            playerText.innerText=`${currentPlayer} has won!`
            let winningBlocks=playerWon()
            winningBlocks.map(box=>boxes[box].style.background=winningIndicator)
        }
        currentPlayer=currentPlayer==X?O:X;

    }))
}

startGame()

winningComb=[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
    
]
restart.addEventListener("click",()=>{
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText='',
        box.style.background=''
    }
    )
    currentPlayer=X
    playerText='Tic Tac Toe'
    
})

function playerWon(){
    for (const comb of winningComb) {
        let [a,b,c]=comb

        if (spaces[a] &&(spaces[a]==spaces[b]&&spaces[c]==spaces[a])){
            return comb
        }
    }
    return false
}
