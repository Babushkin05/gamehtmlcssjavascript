const gameboard = document.getElementById("gameboard")
const platform = document.getElementById("platform")
const ball = document.getElementById("ball")
var res =true
var platfObj = new(Object) 
// var ballInTheGameboard;
console.log(KeyboardEvent)

rad=ball.offsetHeight/2
brickh=25
brickw=50

var gameLevel = [
    { x: 20, y: 100 },
    { x: 75, y: 100 },
    { x: 130, y: 100 },
    { x: 185, y: 100 },
    { x: 240, y: 100 },
    { x: 295, y: 100 },
    { x: 350, y: 100 },
    { x: 405, y: 100 },
    { x: 460, y: 100 },
    { x: 515, y: 100 },
    { x: 570, y: 100 },
    { x: 625, y: 100 },
    // { x: 680, y: 100 },

    { x: 20, y: 130 },
    { x: 75, y: 130 },
    { x: 130, y: 130 },
    { x: 185, y: 130 },
    { x: 240, y: 130 },
    { x: 295, y: 130 },
    { x: 350, y: 130 },
    { x: 405, y: 130 },
    { x: 460, y: 130 },
    { x: 515, y: 130 },
    { x: 570, y: 130 },
    { x: 625, y: 130 },

    { x: 20, y: 160 },
    { x: 75, y: 160 },
    { x: 130, y: 160 },
    { x: 185, y: 160 },
    { x: 240, y: 160 },
    { x: 295, y: 160 },
    { x: 350, y: 160 },
    { x: 405, y: 160 },
    { x: 460, y: 160 },
    { x: 515, y: 160 },
    { x: 570, y: 160 },
    { x: 625, y: 160 },

    { x: 20, y: 190 },
    { x: 75, y: 190 },
    { x: 130, y: 190 },
    { x: 185, y: 190 },
    { x: 240, y: 190 },
    { x: 295, y: 190 },
    { x: 350, y: 190 },
    { x: 405, y: 190 },
    { x: 460, y: 190 },
    { x: 515, y: 190 },
    { x: 570, y: 190 },
    { x: 625, y: 190 },

    { x: 20, y: 220 },
    { x: 75, y: 220 },
    { x: 130, y: 220 },
    { x: 185, y: 220 },
    { x: 240, y: 220 },
    { x: 295, y: 220 },
    { x: 350, y: 220 },
    { x: 405, y: 220 },
    { x: 460, y: 220 },
    { x: 515, y: 220 },
    { x: 570, y: 220 },
    { x: 625, y: 220 },

    
   
    
 ]
 
 gameLevel.forEach(createBrick)

if(res==true){
platfObj.X = platform.offsetLeft
platfObj.Y = platform.offsetTop
platfObj.L = platform.clientWidth
platfObj.dX = 10}

     


var ballObj = new(Object)
ballObj.X = 300
ballObj.Y = 400
ballObj.dX = 2.5
ballObj.dY = -2.5

// if(ballObj.X>=0 && ballObj.X<=gameboard.offsetWidth && ballObj.Y>=0 && ballObj<=gameboard.offsetHeight) {
//     ballInTheGameboard = true;
// }
// else {
//     ballInTheGameboard = false;
// }


function onArrowKeyDown(ev) {
   if (ev.code == "ArrowRight") {
       if(platfObj.X<=gameboard.offsetWidth-platform.offsetWidth-10) {
      platfObj.X += platfObj.dX
   }}

   if (ev.code == "ArrowLeft") {
       if(platfObj.X>=10) {
      platfObj.X -= platfObj.dX
   }}

   platform.style.left = platfObj.X + "px"
}

document.addEventListener("keydown", onArrowKeyDown)



function createBrick(brick) {
    var el = document.createElement("div")
    el.classList.add("brick")
    el.style.top = brick.y + "px"
    el.style.left = brick.x + "px"
 
    gameboard.appendChild(el)
 }



 function moveBall() {
    if(ballObj.Y<=gameboard.offsetHeight-ball.offsetHeight-20) {
    if(ballObj.X==gameboard.offsetWidth-ball.offsetWidth-20 || ballObj.X == -20) {
        ballObj.dX*=-1;
        }
    if( ballObj.Y==-20 ||  (ballObj.Y==platfObj.Y-ball.offsetHeight-20 && ballObj.X<=platfObj.X+ball.offsetWidth+20 && ballObj.X>=platfObj.X-ball.offsetWidth-20 )) {   
        ballObj.dY*=-1
    }

    

    gameLevel.forEach((brick) => {
        if(brick.y+brickh==ballObj.Y+5){
            if(brick.x<=ballObj.Y && brick.x+brickw>=ballObj.Y+(2*rad)) {
                ballObj.dY*=-1;
                // brick.x=" "
                // brick.y=" "
            }
        }
        
    })
    


    ballObj.X += ballObj.dX
        ballObj.Y += ballObj.dY
        ball.style.left = ballObj.X + "px"
        ball.style.top = ballObj.Y + "px"
        window.requestAnimationFrame(moveBall)

      
}
else{
    res=confirm("ты проиграл(( хочешь еще раз?")
    if (res==true) {
        ballObj.X = 300
        ballObj.Y = 400
        ballObj.dY = -2.5
        ballObj.dX = 2.5
        ball.style.left = ballObj.X + "px"
        ball.style.top = ballObj.Y + "px"
        window.requestAnimationFrame(moveBall)

        
    }
    if(res==true){
        platfObj.X = platform.offsetLeft
        platfObj.Y = platform.offsetTop
        platfObj.L = platform.clientWidth
        platfObj.dX = 10}
    
}
}



window.requestAnimationFrame(moveBall)
