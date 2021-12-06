const gameboard = document.getElementById("gameboard")
const platform = document.getElementById("platform")
const ball = document.getElementById("ball")

var platfObj = new(Object) 
// var ballInTheGameboard;

var BallIsFree


platfObj.X = platform.offsetLeft
platfObj.L = platform.clientWidth
platfObj.dX = 10

var ballObj = new(Object)
ballObj.X = ball.offsetLeft 
ballObj.Y = ball.offsetTop
ballObj.dX = 2
ballObj.dY = 2

// if(ballObj.X>=0 && ballObj.X<=gameboard.offsetWidth && ballObj.Y>=0 && ballObj<=gameboard.offsetHeight) {
//     ballInTheGameboard = true;
// }
// else {
//     ballInTheGameboard = false;
// }


function onArrowKeyDown(ev) {
   if (ev.code == "ArrowRight") {
      platfObj.X += platfObj.dX
   }

   if (ev.code == "ArrowLeft") {
      platfObj.X -= platfObj.dX
   }

   platform.style.left = platfObj.X + "px"
}

document.addEventListener("keydown", onArrowKeyDown)


function moveBall() {
    if(ballObj.X!=gameboard.offsetWidth-ball.offsetWidth-20 && ballObj.Y!=gameboard.offsetHeight-ball.offsetHeight-20&& ballObj.X!=-20 && ballObj.Y!=-20) {
        ballObj.X += ballObj.dX
        ballObj.Y += ballObj.dY
        ball.style.left = ballObj.X + "px"
        ball.style.top = ballObj.Y + "px"
        window.requestAnimationFrame(moveBall)
    }
    else if(ballObj.X==gameboard.offsetWidth-ball.offsetWidth-20 || ballObj.X == -20) {
        ballObj.X -=ballObj.dX;
        ballObj.dX*=-1;
        window.requestAnimationFrame(moveBall)
    }
    else if(ballObj.Y==gameboard.offsetHeight-ball.offsetHeight-20 || ballObj.Y==-20) {
        ballObj.Y -= ballObj.dY;
        window.requestAnimationFrame(moveBall)
        ballObj.dY*=-1
    }
    
}

window.requestAnimationFrame(moveBall)