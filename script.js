var $startButton = document.querySelector('#start')
var $endButton = document.querySelector('#end')
var $reset = document.querySelector('#reset')
var $time = document.querySelector('#time')

$startButton.addEventListener('click', startGame)
$endButton.addEventListener('click', endGame)
$reset.addEventListener('click', reset)

var stateStopWatch = "stop"


function startGame(){
    stateStopWatch = "start"
    $startButton.setAttribute('disabled','disabled')
    interval()
}
function endGame(){
    stateStopWatch = "stop"
    $startButton.removeAttribute('disabled','disabled')
    interval()
}  
function reset(){
    stateStopWatch = "reset"
    $startButton.removeAttribute('disabled','disabled')
    interval()
}    
function interval(){
var interval = setInterval(function (){
    switch (stateStopWatch){
        case 'start':
            var time = parseFloat($time.textContent)    
            $time.textContent = (time + 0.1).toFixed(2) 
            break
        case 'stop':
            clearInterval(interval)
            break
        case 'reset':
            $time.textContent = '0.0'
            clearInterval(interval)
        }
    }, 100)
}