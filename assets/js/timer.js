var secondsOut = 0;
function startTimer(duration) {
    var done = false;
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        secondsOut = (minutes * 60) + seconds;
        
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;

        if (timer == 0 && done == false) {
            done = true;
        } else {
            timer--;
        }
        
    }, 1000);
}

function getSeconds() {
    return (150 - secondsOut);
}