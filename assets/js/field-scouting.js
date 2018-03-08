

var secondsOutside = 0;

var bb1 = 0;
var bb2 = 0;
var bb3 = 0;
var bf1 = 0;
var bf2 = 0;
var bf3 = 0;
var bl = 0;

var rb1 = 0;
var rb2 = 0;
var rb3 = 0;
var rf1 = 0;
var rf2 = 0;
var rf3 = 0;
var rl = 0;


function startFieldTimer(duration) {
    var done = false;
    document.getElementById("start-match").disabled = true;

    var timer = duration, minutes, seconds;
    var interval1 = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        secondsOutside = (minutes * 60) + seconds;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        

        
        document.getElementById("field-timer").innerHTML = minutes + ":" + seconds;

        if (timer == 0 && done == false) {
            clearInterval(interval1);
            done = true;
        } else {
            --timer;
        }
    }, 1000);
}

function getFieldArray() {
    
    var data = {
        "Match" : $("#match-num-input").val(),
        "Blue Boost 1" : bb1,
        "Blue Boost 2" : bb2,
        "Blue Boost 3" : bb3,
        "Blue Force 1" : bf1,
        "Blue Force 2" : bf2,
        "Blue Force 3" : bf3,
        "Blue Levitate" : bl,
        "Red Boost 1" : rb1,
        "Red Boost 2" : rb2,
        "Red Boost 3" : rb3,
        "Red Force 1" : rf1,
        "Red Force 2" : rf2,
        "Red Force 3" : rf3,
        "Red Levitate" : rl 
    }
    return data;
}

function timer(duration, kind) {
    var done = false;
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
       // secondsOutside = (minutes * 60) + seconds;

        document.getElementById("powerup-timer").innerHTML = minutes + ":" + seconds;
        
        if (timer == 0 && done == false) {
            grayButtons(kind);  
            clearInterval(interval);
            done = false;
        } else {
            --timer;
        }
    }, 1000);
    
    
}

function grayButtons(kind) {
    if (kind == "rb1" || kind == "rb2" || kind == "rb3"){
        document.getElementById("boost-button-1-r").disabled = true;
        document.getElementById("boost-button-2-r").disabled = true;
        document.getElementById("boost-button-3-r").disabled = true;
    }
    
     if (kind == "rf1" || kind == "rf2" || kind == "rf3"){
        document.getElementById("force-button-1-r").disabled = true;
        document.getElementById("force-button-2-r").disabled = true;
        document.getElementById("force-button-3-r").disabled = true;
    }
     if (kind == "rl"){
        document.getElementById("levitate-button-1-r").disabled = true;
    }
    
    if (kind == "bb1" || kind == "bb2" || kind == "bb3"){
        document.getElementById("boost-button-1").disabled = true;
        document.getElementById("boost-button-2").disabled = true;
        document.getElementById("boost-button-3").disabled = true;
    }
    
     if (kind == "bf1" || kind == "bf2" || kind == "bf3"){
        document.getElementById("force-button-1").disabled = true;
        document.getElementById("force-button-2").disabled = true;
        document.getElementById("force-button-3").disabled = true;
    }
     if (kind == "bl"){
        document.getElementById("levitate-button-1").disabled = true;
    }
    
}

function highlightButton(btnid, kind){
    
    timer(10, kind);
    
   var property = document.getElementById(btnid);
   var originalColor = property.style.backgroundColor;
    
    if(originalColor == "rgb(255, 165, 0)"){
        
        if(btnid.charAt(btnid.length - 1) == "r"){
            property.style.backgroundColor = "#FF0000";  
        }
        else{
            property.style.backgroundColor = "#007bff";  
        }
    }
    else{
        property.style.backgroundColor = "#FFA500";   
    }
    
    var goodSeconds = 150 - secondsOutside;
   
    switch (kind) {
        case "rf1" :
            rf1 = goodSeconds;
            break;
        case "rf2" :
            rf2 = goodSeconds;
            break;
        case "rf3" :
            rf3 = goodSeconds;
            break;
        case "rb1" :
            rb1 = goodSeconds;
            break;
        case "rb2" :
            rb2 = goodSeconds;
            break;
        case "rb3" :
            rb3 = goodSeconds;
            break;
        case "rl" :
            rl = goodSeconds;
            break;
         case "bf1" :
            bf1 = goodSeconds;
            break;
        case "bf2" :
            bf2 = goodSeconds;
            break;
        case "bf3" :
            bf3 = goodSeconds;
            break;
        case "bb1" :
            bb1 = goodSeconds;
            break;
        case "bb2" :
            bb2 = goodSeconds;
            break;
        case "bb3" :
            bb3 = goodSeconds;
            break;
        case "bl" :
            bl = goodSeconds;
            break;
    }
    
};

$("#force-button-1-r").click(function(){
    highlightButton("force-button-1-r", "rf1");
});

$("#force-button-2-r").click(function(){
    highlightButton("force-button-2-r", "rf2");
});

$("#force-button-3-r").click(function(){
    highlightButton("force-button-3-r", "rf3");
});

$("#boost-button-1-r").click(function(){
    highlightButton("boost-button-1-r", "rb1");
});

$("#boost-button-2-r").click(function(){
    highlightButton("boost-button-2-r", "rb2");
});

$("#boost-button-3-r").click(function(){
    highlightButton("boost-button-3-r", "rb3");
});

$("#levitate-button-1-r").click(function(){
    highlightButton("levitate-button-1-r", "rl");
});

$("#force-button-1").click(function(){
    highlightButton("force-button-1", "bf1");
});

$("#force-button-2").click(function(){
    highlightButton("force-button-2", "bf2");
});

$("#force-button-3").click(function(){
    highlightButton("force-button-3", "bf3");
});

$("#boost-button-1").click(function(){
    highlightButton("boost-button-1", "bb1");
});

$("#boost-button-2").click(function(){
    highlightButton("boost-button-2", "bb2");
});

$("#boost-button-3").click(function(){
    highlightButton("boost-button-3", "bb3");
});

$("#levitate-button-1").click(function(){
    highlightButton("levitate-button-1", "bl");
});
 


function hello() {
    if ($("#field-event-dropdown").val() == "--Event--") {
        alert("You need to choose an event");
    } else {
        
    
    var fieldID = $("#field-event-dropdown").val() + " Field";  
    var test =  localStorage.getItem(fieldID);
    var testObj = JSON.parse(test);    
    
    if (typeof testObj == 'undefined' || testObj == null){
         localStorage.setItem(fieldID, JSON.stringify([]));
         localPush(fieldID, getFieldArray());
    } else {            
         localPush(fieldID, getFieldArray());   

    }
    if (navigator.onLine) {
        updateFirebase(fieldID); 
    } else {
            alert("You are offline. Saving locally...\nWhen you are online, navigate to the Scouting Data tab and upload to the online database.");
        
        var statusUP =  localStorage.getItem("status"); 
        var status = [];
        if (typeof statusUP == 'undefined' || statusUP == null) {
            status = [];
        } else {
            status = JSON.parse(statusUP);
        }

        var exists = false;
        
        status.forEach(function(point) {
            if (point == fieldID) {
                exists = true;
            }
         });
        
        if (exists == false) {
            status.push(fieldID);
        }
        
        localStorage.setItem("status", JSON.stringify(status)); 
    }
    }
}

