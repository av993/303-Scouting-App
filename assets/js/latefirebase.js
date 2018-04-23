var database;
//localStorage.clear();
var config = {
    apiKey: "AIzaSyAbLk6S0r3PKzpTiIPv0hyFOYiSFP4VI_c",
    authDomain: "scouting-app-841ee.firebaseapp.com",
    databaseURL: "https://scouting-app-841ee.firebaseio.com",
    projectId: "scouting-app-841ee",
    storageBucket: "",
    messagingSenderId: "481056362945"
  };

function showBackup() {
    var retrieved = localStorage.getItem("Backup Detroit Match");
    var retrievedObj = JSON.parse(retrieved);
    var dataStr = "";
    for (var i = 0; i < retrievedObj.length; i++) {
       var pushObj = retrievedObj[i];
        dataStr = dataStr + pushObj["Name"] + " " + pushObj["Match"] + ", ";
    }    
    alert(dataStr);
}

firebase.initializeApp(config);
database = firebase.database();    
var storage = firebase.storage();
var storageRef = storage.ref();

var backup = false;
var first = 0;
var last = 0;

function backupData() {
    backup = true;
    first = parseInt($('#first-range').val());
    last = parseInt($('#last-range').val());
    updateFirebase("Backup Detroit Match");
}

function push() {
    submitMatch();
}

function updateFirebase(localID) {
    
    
    var retrievedObj = localStorage.getItem(localID); 
    var objArr = JSON.parse(retrievedObj);
    
    var count = 0;

    for (var i = 0; i < objArr.length; i++) {
        var pushObj = objArr[i];    
        //alert(JSON.stringify(pushObj));

        if (backup == true) {
            localID = "Detroit Match";
            //alert(pushObj["Match"]);
            if (parseInt(pushObj["Match"]) >= first && parseInt(pushObj["Match"]) <= last) {
               // alert(JSON.stringify(pushObj));
                pushToList(localID, pushObj);
                pushToList("BACKUP DETROIT MATCH", pushObj);

            }
        } else {
            pushToList(localID, pushObj);
        }
       
     }

    if (backup == false) {
        localStorage.setItem(localID, JSON.stringify([]));    
    }
    
    alert("You have successfully uploaded the data for " + localID);
    
}

function pushToList(reference, item) {
    var firebaseRef = firebase.database().ref(reference);
    var newPostRef = firebaseRef.push();
    newPostRef.set(item);
}

function getFirebase(reference) {
    firebase.database().ref().once().then(
        function(snapshot) {
            document.getElementById('test-p').innerHTML = "Hello";
            var array = snapshotToArray(snapshot);
    });    
}

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        //document.getElementById('test-p').innerHTML = JSON.stringify(JSON.parse(item));
        returnArr.push(item);
    });

    return returnArr;
};

function getMatchInfo() {
    var matchArr = 
    {
        "Team"    :    $('#match-team-dropdown').val(),
        "Name"    :    $('#match-name-input').val(),
        "Match"   :    $('#match-match-input').val(),
        "Event"   :    $('#match-event-dropdown').val(),
        "Auto Line" :  $("#auto-line-chk").is(':checked'),
        "Auto Switch Cubes" : $("#general-auto-switch-number-input").val(),
        "Auto Scale Cubes" : $("#general-auto-scale-number-input").val(),
        "Auto Cubes Picked Up" : $("#general-auto-cubes-picked-up-number-input").val(),
        "TeleOp Switch Cubes" : $("#general-teleop-switch-cubes-input").val(),
        "TeleOp Scale Cubes" : $("#general-teleop-scale-cubes-input").val(),
        "Exchange Cubes" : $("#general-teleop-portal-cubes-input").val(),
        "Portal Cubes" : $("#general-teleop-exchange-cubes-input").val(),
        "Ground Cubes" : $("#general-teleop-ground-cubes-input").val(),
        "Missed Cubes" : $("#general-teleop-missed-cubes-input").val(),
        "Plays Defense" : $("#defense-chk").is(':checked'),
        "Priority" : $("#teleop-priorities-dropdown").val(),
        "Climb" : $("#endgame-climb-dropdown").val(),
        "Burnout Or Died" :  $("#dropdown-burnout").is(':checked'),
        "Tipped Over" :  $("#dropdown-tipped-over").is(':checked'),
        "No Show" :  $("#dropdown-cant-place-cubes").is(':checked'),
        "Penalties" :  $("#dropdown-penalties").is(':checked'),
        "Notes" :  $("#general-endgame-penalties-input").val(),
        "Events" : events,
        "Events Str" : JSON.stringify(events)
    }
    return matchArr;
}

function submitMatch() {  
    backup = false;
    var matchInfo = getMatchInfo();
    for (var key in matchInfo) {
        if (matchInfo.hasOwnProperty(key)) {
            if ($.isArray(matchInfo[key])) {
                if (matchInfo[key].length == 0) {
                    matchInfo[key].push([0,0]);
                } 
            }
        }
    }
    var matchID = $("#match-event-dropdown").val() +  " Match";  
    if ($("#match-event-dropdown").val() == "--Event--" || $("#match-match-input").val() == "" || $("#match-position-dropdown").val() == "--Position--") {
        alert("You need to enter the event, match, or position");
    }  else {
        
    graySubmit();
    var test =  localStorage.getItem(matchID);
    var testObj = JSON.parse(test);
        
    if (typeof testObj == 'undefined' || testObj == null){
         localStorage.setItem(matchID, JSON.stringify([]));
         localPush(matchID, matchInfo);
        
    } else {  
         localPush(matchID, matchInfo);
    }
            
    var backupID = "Backup " + matchID;        
    var backupTest =  localStorage.getItem(backupID);
    var backupObj = JSON.parse(test);
    
    if (typeof backupObj == 'undefined' || backupObj == null){
         localStorage.setItem(backupID, JSON.stringify([]));
         localPush(backupID, matchInfo);
        
    } else {  
         localPush(backupID, matchInfo);
     }
        
    if (navigator.onLine) {
        updateFirebase(matchID);
    } 
        
    else {
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
            if (point == matchID) {
                exists = true;
            }
         });
        
        if (exists == false) {
            status.push(matchID);
        }
        
        localStorage.setItem("status", JSON.stringify(status)); 
    }
    }

}

function setMatchText(field, text) {
    document.getElementById(field).innerHTML = text;
}

function localPush(localID, item) {
    var object =  localStorage.getItem(localID); 
    var objectParse = JSON.parse(object);         
    objectParse.push(item);
    localStorage.setItem(localID, JSON.stringify(objectParse));   
}

function fetch(localID) {  
    var retrievedObj = localStorage.getItem("Mt Olive");
    var obj = JSON.parse(retrievedObj); 
    document.getElementById('test-p').innerHTML = retrievedObj;
} 

function getPitInfo() { 
   var data = {
          "Name" : $("#name").val(),
          "Team" : $("#team-dropdown").val(),      
          "Drivebase" : $("#drivebase-dropdown").val(),
          "Drivebase Explanation" : $("#drivebase-input").val(),
          "Event" : $("#intake_mechanism-dropdown").val(),
          "Auto" : $("#has-auto-check-c").is(':checked'),
          "Auto Exchange Cubes" : $('#general-auto-exchange-number-input').val(),
          "Auto Line" : $("#auto-line-check-c").is(':checked'),
          "Auto Scale Cubes" : $("#auto-scale-check-c").is(':checked'),
          "Auto Switch Cubes" : $("#auto-switch-c").is(':checked'),
          "TeleOp Switch Cubes" : $("#tele-switch-check2-c").is(':checked'),
          "TeleOp Scale Cubes" : $("tele-scale-check2-c").is(':checked'),
          "Ground Intake" : $("#ground-check-c").is(':checked'),
          "Portal Intake" : $("#portal-check-c").is(':checked'),
          "Climb" : $("#has-climb-c").is(':checked'),
          "Buddy Climb" : $("#buddy-climb-on-c").is(':checked'),
          "Climb on Other Robots" : $("#climb-on-c").is(':checked'),
          "TeleOp Cube Number" : $("#climb-num-input").val(),
          "Output" : $("#lift_mechanism-dropdown").val(),
          "Intake" : $("#intake_direction-dropdown").val(),
          "Wheels" : $("#wheels-dropdown").val(),
          "Cube Manipulation" : $("#motor-dropdown").val(),
          "Climber" : $("#climb _mechanism-dropdown").val()
    }
    return data;
}

function pitSubmit() {   
    if ($("#intake_mechanism-dropdown").val() == "--Event--") {
        alert("You have to choose an event");
    } else {
    var pitID = $("#intake_mechanism-dropdown").val() + " Pit";  
    var test =  localStorage.getItem(pitID);
    var testObj = JSON.parse(test);    
    
    if (typeof testObj == 'undefined' || testObj == null){
         localStorage.setItem(pitID, JSON.stringify([]));
         localPush(pitID, getPitInfo());
    } else {            
         localPush(pitID, getPitInfo());   
    }
    if (navigator.onLine) {
        updateFirebase(pitID);
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
            if (point == pitID) {
                exists = true;
            }
         });
        
        if (exists == false) {
            status.push(pitID);
        }
        
        localStorage.setItem("status", JSON.stringify(status));
    }
    }
}

function graySubmit() {
    document.getElementById("general-submit").disabled = true;
}
