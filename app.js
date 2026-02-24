let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst");
let msg = document.querySelector("#msg");
let msgcontainer= document.querySelector(".msg_cont");
let newbtn = document.querySelector("#nwbtn");
let turn0 = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = ()=>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner)=>{
    msg.innerText= `Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkwinner = ()=>{
    for(let patterns of winpattern){
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos1==pos3&&pos2==pos3){
                showwinner(pos1);
            }
        }
    }
};

newbtn.addEventListener("click", resetgame);
rstbtn.addEventListener("click", resetgame);


