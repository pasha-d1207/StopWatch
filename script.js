var $startButton = document.querySelector('#start')
var $endButton = document.querySelector('#end')
var $reset = document.querySelector('#reset')
var $time = document.querySelector('#time')

$startButton.addEventListener('click', startGame)
$endButton.addEventListener('click', endGame)
$reset.addEventListener('click', reset)

var $isGameStarted = "stop"


function startGame(){
    $isGameStarted = "start"
    $startButton.setAttribute('disabled','disabled')
    interval()
}
function endGame(){
    $isGameStarted = "stop"
    $startButton.removeAttribute('disabled','disabled')
    interval()
}  
function reset(){
    $isGameStarted = "reset"
    $startButton.removeAttribute('disabled','disabled')
    interval()
}    
function interval(){
var interval = setInterval(function (){
    if($isGameStarted === "start"){
        var time = parseFloat($time.textContent)    
        $time.textContent = (time + 0.1).toFixed(2) 
    }
    else if($isGameStarted === "stop"){
        clearInterval(interval)
    }
    else if ($isGameStarted === "reset"){
        $time.textContent = '0.0'
        clearInterval(interval)
    }
    }, 100)
}