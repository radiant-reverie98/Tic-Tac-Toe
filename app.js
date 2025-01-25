let boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector("#reset-btn");
const hide = document.querySelector(".hide");
const newbtn = document.querySelector("#newbtn");
const msg = document.querySelector("#win-msg");


let playerO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("Button was clicked");
        if(playerO){
            box.innerText = "X";
            playerO = false;
        }
        else{
            box.innerText = "O";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
    
})

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
        
    })
})

const checkWinner = () =>{
    for(patterns of winPattern){
        //console.log(patterns[0],patterns[1],patterns[2]);
        //console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        let posVal1 = boxes[patterns[0]].innerText;
        let posVal2 = boxes[patterns[1]].innerText;
        let posVal3 = boxes[patterns[2]].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                //console.log("Winner",posVal1);
                hide.style.display = "block";
                msg.innerText = `Congratulations, Winner is ${posVal1}`;
                resetbtn.style.display = "none";
                boxes.forEach((box)=>{
                    
                    box.disabled = true;
                    
                })

                
            }
        }
    }
}

newbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
        
    })
    hide.style.display = "none";
    resetbtn.style.display = "inline";
})

