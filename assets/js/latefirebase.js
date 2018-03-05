var database;
//localStorage.clear();
var config = {
    apiKey: "AIzaSyA5cwXZR_JqnpRCLMHiRkXs9vBdJ1YBzsg",
    authDomain: "scouting-app-fbbfe.firebaseapp.com",
    databaseURL: "https://scouting-app-fbbfe.firebaseio.com",
    projectId: "scouting-app-fbbfe",
    storageBucket: "scouting-app-fbbfe.appspot.com",
    messagingSenderId: "74718175159"
};

firebase.initializeApp(config);
database = firebase.database();    
var storage = firebase.storage();
var storageRef = storage.ref();


function push() {
    submitMatch();
}

function updateFirebase(localID) {
    var retrievedObj = localStorage.getItem(localID); 
    var objArr = JSON.parse(retrievedObj);
    var count = 0;
    
    for (var i = 0; i < objArr.length; i++) {
        var pushObj = objArr[i];    
        alert(JSON.stringify(pushObj));

        pushToList(localID, pushObj);
     }
    
    localStorage.setItem(localID, JSON.stringify([]));
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
      "Portal Cubes" : $("#general-teleop-portal-cubes-input").val(),
        "Exchange Cubes" : $("#general-teleop-exchange-cubes-input").val(),
        "Ground Cubes" : $("#general-teleop-ground-cubes-input").val(),
      "Cube Accuracy" : $("#general-teleop-accuracy-cubes-input").val(),            
      "Intake Direction" : $("#teleop-intake-direction-dropdown").val(),
      "Cube Manipulation" : $("#teleop-cube-manipulator-dropdown").val(),
      "Strategy DO" : $("#teleop-strategy-dropdown").val(),
      "Prioritize SS" : $("#teleop-priorities-dropdown").val(),
      "DO Notes" : $("#general-teleop-defense-textarea").val(),
        "Climb" : $("#endgame-climb-dropdown").val(),
        "Burnout Or Died" :  $("#dropdown-burnout").is(':checked'),
        "Tipped Over" :  $("#dropdown-tipped-over").is(':checked'),
        //"Connection Issues" :  $("#dropdown-connection-issues").is(':checked'),
        "Cant Place Cubes" :  $("#dropdown-cant-place-cubes").is(':checked'),
        "Penalties" :  $("#dropdown-penalties").is(':checked'),
        "Penalties Score" :  $("#general-teleop-penalty-points").val(),
        "Penalties Description" :  $("#general-endgame-penalties-input").val(),
          
        "Switch Coordinates" : switchCoordinates,
        "Exchange Coordinates" : exchangeCoordinates,
        "Scale Coordinates" : scaleCoordinates,
        "Pickup Coordinates" : pickupCoordinates,
       
        "Problem Coordinates" : problemCoordinates,
        "Penalty Coordinates" : penaltyCoordinates,
        //"O/D Coordinates" : odCoordinates,
        "Switch Time" : switchTime,
        
        "Exchange Time" : exchangeTime,
        "Scale Time" : scaleTime,
        "Pickup Time" : pickupTime, 
        "Problem Time" : problemTime,
        "Penalty Time" : penaltyTime,
        //"O/D Time" : odTime,
        "Penalties" : penalties
    }
    return matchArr;
}

function submitMatch() {
    var matchInfo = getMatchInfo();

    for (var key in matchInfo) {
        if (matchInfo.hasOwnProperty(key)) {
            if ($.isArray(matchInfo[key])) {
                if (matchInfo[key].length == 0) {
                    matchInfo[key].push([-1,-1]);
                } 
            }
        }
    }
    var matchID = "Mt Olive Match";  
    var test =  localStorage.getItem(matchID);
    var testObj = JSON.parse(test);
     
    if (typeof testObj == 'undefined' || testObj == null){
         localStorage.setItem(matchID, JSON.stringify([]));
         localPush(matchID, matchInfo);
    } else {  
         localPush(matchID, matchInfo);
     }

    setMatchText("event-data", localStorage.getItem(matchID));
    
    if (navigator.onLine) {
        updateFirebase(matchID);
    }
}

function setMatchText(field, text) {
    document.getElementById(field).innerHTML = text;
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
}

function getPitInfo() { 
   var data = {
          "Name" : $("#name").val(),
          "Team" : $("#team-dropdown").val(),      
          "Drivebase" : $("#drivebase-dropdown").val(),
          "Drivebase Explanation" : $("#drivebase-input").val(),
          "Intake Mechanism" : $("#intake_mechanism-dropdown").val(),
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
          "Lift Mechanism" : $("#lift_mechanism-dropdown").val(),
          "Intake Direction" : $("#intake_direction-dropdown").val(),
          "Wheels" : $("#wheels-dropdown").val(),
          "Motor" : $("#motor-dropdown").val(),
          "Climb Mechanism" : $("#climb _mechanism-dropdown").val()
    }
    return data;
}

function pitSubmit() {    
    var pitID = "Mt Olive Pit";  
    var test =  localStorage.getItem(pitID);
    var testObj = JSON.parse(test);    
    
    if (typeof testObj == 'undefined' || testObj == null){
         localStorage.setItem(pitID, JSON.stringify([]));
         localPush(pitID, getPitInfo());
    } else {            
         localPush(pitID, getPitInfo());   
    }
    alert($('#buddy-climb-on')[0].checked);
;
    //pushToList("Hello", {"Hello": "Chieken"});
    updateFirebase(pitID);    
}

// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
//document.getElementById("snap").addEventListener("click", call());
/* {
	/*context.drawImage(video, 0, 0, 400, 480);
    alert("images");
    var imageTaken = convertCanvasToImage(canvas);
    document.getElementById("imageid").src = imageTaken;
    var storageRefA = firebase.storage().ref();
    storageRefA.put(imageTaken, "Hello").then(function(snapshot) {
        alert("Uploaded");
    });
    var file = $('#file-chooser').get(0).files[0];
    alert(file);
    var refS = firebase.storage().ref();
    refS.put(file, "Work").then(function(snapshot) {
        alert(snapshot);
    });*/
//});

function call() {
  alert("Chicken");
    var file = $('#file-chooser').get(0).files[0];
    const name = (+new Date()) + '-' + file.name;
    const metadata = { contentType: file.type };
    alert(metadata);

    var task = storageRef.put(file);
    
}

function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}




