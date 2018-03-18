var secondsOut = 150;
function startTimer(duration) {
    var done = false;
    grayStop();
    var timer = duration, minutes, seconds;
   var newInterval =  setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        secondsOut = (minutes * 60) + seconds;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;

        if (timer == 0 && done == false) {
            clearInterval(newInterval);
            done = true;
        } else {
            timer--;
        }
        
    }, 1000);
}

function getSeconds() {
    return (150 - secondsOut);
}

function grayStop() {
    document.getElementById("start-match-btn").disabled = true;
}



