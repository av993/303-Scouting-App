/*$("#general-submit").click(function(){
   submitMatch();
});

function getMatchInfo() {
    var matchArr = 
    {
        "Team"    :    $('#match-team-dropdown').val(),
        "Name"    :    $('#match-name-input').val(),
        "Match"   :    $('#match-match-dropdown').val(),
        "Auto Line" :  $("#auto-line-chk").is(':checked'),
        "Auto Switch Cubes" : $("#general-auto-switch-number-input").val(),
        "Auto Scale Cubes" : $("#general-auto-scale-number-input").val(),
        "Auto Cubes Picked Up" : $("#general-auto-cubes-picked-up-number-input").val(),
        "TeleOp Switch Cubes" : $("#general-teleop-switch-cubes-input").val(),
        "TeleOp Scale Cubes" : $("#general-teleop-scale-cubes-input").val(),
        "Portal Cubes" : $("#general-teleop-portal-cubes-input").val(),
        "Exchange Cubes" : $("#general-teleop-exchange-cubes-input").val(),
        "Ground Cubes" : $("#general-teleop-exchange-cubes-input").val(),
        "Cube Accuracy" : $("#general-teleop-accuracy-cubes-input").val(),
        "Intake Direction" : $("#general-teleop-dropdown-intake-direction").val(),
        "Cube Manipulation" : $("#general-teleop-dropdown-cube-manipulation").val(),
        "Strategy DO" : $("#general-teleop-dropdown-strategy").val(),
        "Prioritize SS" : $("#general-teleop-dropdown-prioritize").val(),
        "DO Notes" : $("#general-teleop-defense-textarea").val(),
        "Climb" : $("#general-endgame-dropdown-climb").val(),
        "Burnout Or Died" :  $("#dropdown-burnout").is(':checked'),
        "Tipped Over" :  $("#dropdown-tipped-over").is(':checked'),
        "Connection Issues" :  $("#dropdown-connection-issues").is(':checked'),
        "Cant Place Cubes" :  $("#dropdown-cant-place-cubes").is(':checked'),
        "Penalties" :  $("#dropdown-penalties").is(':checked'),
        "Penalties Score" :  $("#general-teleop-penalty-points").val(),
        "Penalties Description" :  $("#general-endgame-penalties-input").val(),
    }
    return matchArr;
}

function submitMatch() {
    var matchID = 'Mt Olive'; 
    //$('match-match-dropdown').val();
    var test =  localStorage.getItem(matchID);
    var testObj = JSON.parse(test);
    
    if (typeof testObj == 'undefined' || testObj == null){
         localStorage.setItem(matchID, JSON.stringify([]));
         localPush(matchID, getMatchInfo());
    } else {            
         localPush(matchID, getMatchInfo());   
    }
    fetch(matchID);
    updateFirebase(match);
}

function localPush(localID, item) {
    var object =  localStorage.getItem(localID); 
    var objectParse = JSON.parse(object);         objectParse.push(item);
    localStorage.setItem(localID, JSON.stringify(objectParse));    
}

function fetch(localID) {
    var retrievedObj = localStorage.getItem("Mt Olive");
    var obj = JSON.parse(retrievedObj); 
    document.getElementById('test-p').innerHTML = retrievedObj;
}*/
