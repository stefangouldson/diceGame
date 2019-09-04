
//random img
    //define images in js
    let imageInput=document.getElementById("canvas")

    // put images in an array
let randArr=[
    "./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png"]

    // define variables
let total=0
let input1=document.getElementById("input1")
let input2=document.getElementById("score")


//function that gets random dice
function getRandomImg(imgArr){
    let x=(6*Math.random())    //generates random number between 0-6
    let y=Math.floor(x)        //rounds down to 0-5
    img=imgArr[y]              //sets img=to random image

//conditions for each dice value
    if (y==0){
        input2.textContent="You lose! Try again?"
        total=0
        imageInput.src=img
    }
    else if(y==1){total+=2
        input2.textContent="Keep going"
        imageInput.src=img}
    else if(y==2){total+=3
        input2.textContent="Keep going"
        imageInput.src=img}
    else if(y==3){total+=4
        input2.textContent="Keep going"
        imageInput.src=img}
    else if(y==4){total+=5
        input2.textContent="Keep going"
        imageInput.src=img}
    else if(y==5){total+=6
        input2.textContent="Keep going"
        imageInput.src=img}
    else{
        alert("error")
        console.error("Somethings wrong")
    } console.log(total)
    //if player wins
    if (total>20){
        alert("You win!")
        input2.textContent="You won! Roll again?"
        total=0
    } input1.textContent=total;
}

//splash page
//hide single and multiplayer div
document.getElementById("singleplayer").style.display="none"
document.getElementById("multiplayer").style.display="none"

//if singleplayer chosen
open1.addEventListener("click",()=>{
    document.getElementById("splash-container").style.display="none"
    document.getElementById("singleplayer").style.display="block"
})

//if multiplayer chosen
open2.addEventListener("click",()=>{
    document.getElementById("splash-container").style.display="none"
    document.getElementById("multiplayer").style.display="block"
})


//multiplayer- exact same code with variable names changed

//player 1

let imageInput1=document.getElementById("canvas1")

let total1=0
let inputP1=document.getElementById("scoreTotal1")
let inputP2=document.getElementById("game")

function getRandomImg1(imgArr){
    let x=(6*Math.random())
    let y=Math.floor(x)
    img=imgArr[y]

    if (y==0){
        inputP2.textContent="You lose! Try again?"
        total1=0
        total2=0
        imageInput1.src=img
    }
    else if(y==1){total1+=2
        inputP2.textContent="Keep going"
        imageInput1.src=img
    }
    else if(y==2){total1+=3
        inputP2.textContent="Keep going"
        imageInput1.src=img}
    else if(y==3){total1+=4
        inputP2.textContent="Keep going"
        imageInput1.src=img}
    else if(y==4){total1+=5
        inputP2.textContent="Keep going"
        imageInput1.src=img}
    else if(y==5){total1+=6
        inputP2.textContent="Keep going"
        imageInput1.src=img}
    else{
        alert("error")
        console.error("Somethings wrong")
    } console.log(total)
    
    if (total1>20){
        alert("Player 1 wins!")
        inputP2.textContent="You won! Roll again?"
        total1=0
        total2=0
    } inputP1.textContent=total1;
}


//player 2

let imageInput2=document.getElementById("canvas2")

let total2=0
let inputA1=document.getElementById("scoreTotal2")
let inputA2=document.getElementById("game1")

function getRandomImg2(imgArr){
    let x=(6*Math.random())
    let y=Math.floor(x)
    img=imgArr[y]

    if (y==0){
        inputA2.textContent="You lose! Try again?"
        total1=0
        total2=0
        imageInput2.src=img
    }
    else if(y==1){total2+=2
        inputA2.textContent="Keep going"
        imageInput2.src=img
    }
    else if(y==2){total2+=3
        inputA2.textContent="Keep going"
        imageInput2.src=img}
    else if(y==3){total2+=4
        inputA2.textContent="Keep going"
        imageInput2.src=img}
    else if(y==4){total2+=5
        inputA2.textContent="Keep going"
        imageInput2.src=img}
    else if(y==5){total2+=6
        inputA2.textContent="Keep going"
        imageInput2.src=img}
    else{
        alert("error")
        console.error("Somethings wrong")
    } console.log(total2)
    
    if (total2>20){
        alert("Player 2 wins!")
        inputA2.textContent="You won! Roll again?"
        total1=0
        total2=0
    } inputA1.textContent=total2;
}