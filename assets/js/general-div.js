if (navigator.onLine) {
    document.getElementById("field-status-label").innerHTML = "Online";
    document.getElementById('field-status-label').style.color = "#39ff41";
    $("#field-upload").prop("disabled",false);

} else {
    document.getElementById("field-status-label").innerHTML = "Offline";
    document.getElementById('field-status-label').style.color = "#ef4747";
    $("#field-upload").prop("disabled",true);
}

function uploadLocal() {
    
    var currentStatus = localStorage.getItem("status");
    alert(currentStatus);
    var statusArr = JSON.parse(currentStatus);
    statusArr.forEach(function(id) {
        updateFirebase(id);
    });
    localStorage.setItem("status", JSON.stringify([]));

}

$('#data-type-dropdown').change(function() {
    alert("TYPE");
    changeButton(); 
});

$('#data-event-dropdown').change(function() {
    alert("EVENT");
    changeButton(); 
});

function changeButton() {
    var string = $('#data-event-dropdown').val() + " " + $('#data-type-dropdown').val();
    alert(string);
    firebase.database().ref(string).once('value', function(snap){
     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(toArray(snap)));
      var dlAnchorElem =  document.getElementById('data-json-btn');
     dlAnchorElem.setAttribute("href",     dataStr     );
     var path = string + ".json";
     dlAnchorElem.setAttribute("download", path);
    });
}

function toArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        //document.getElementById('test-p').innerHTML = JSON.stringify(JSON.parse(item));
        returnArr.push(item);
    });

    return returnArr;
};

function expandGeneral(type) {
    var autoDiv = 'general-auto-div';
    var teleopDiv = 'general-teleop-div';
    var endgameDiv = 'general-endgame-div';
    
    var autoButton = 'auto-expand';
    var teleopButton = 'teleop-expand';
    var endgameButton = 'endgame-expand';

    var autoSign = 'general-auto-expand-sign';
    var teleopSign = 'general-teleop-expand-sign';
    var endgameSign = 'general-endgame-expand-sign';
    
    var autoStatus = document.getElementById('auto-expand-status').innerHTML;
    var teleopStatus = document.getElementById('teleop-expand-status').innerHTML;
    var endgameStatus = document.getElementById('endgame-expand-status').innerHTML;
    
    var autoHeight = 220;
    var teleopHeight = 290;
    var endgameHeight = 300;
    
    if (type == "auto") {
        if (autoStatus == "Hidden") {
            show(autoDiv, autoSign, autoHeight);
            setText('auto-expand-status', 'Show');
            positionElements(teleopButton, teleopDiv, teleopSign, autoHeight, 1);
            positionElements(endgameButton, endgameDiv, endgameSign, autoHeight, 1);
            submitChanged(autoHeight, 1);
        } else {
            hide(autoDiv, autoSign);
            setText('auto-expand-status', 'Hidden'); 
            positionElements(teleopButton, teleopDiv, teleopSign, autoHeight, -1);
            positionElements(endgameButton, endgameDiv, endgameSign, autoHeight, -1);
            submitChanged(autoHeight, -1);
        }
    } else if (type == "teleop") {
        if (teleopStatus == "Hidden") {
            show(teleopDiv, teleopSign, teleopHeight);
            setText('teleop-expand-status', 'Show');
            positionElements(endgameButton, endgameDiv, endgameSign, teleopHeight, 1);
            submitChanged(teleopHeight, 1);
        } else {
            hide(teleopDiv, teleopSign);
            setText('teleop-expand-status', 'Hidden'); 
            positionElements(endgameButton, endgameDiv, endgameSign, teleopHeight, -1);
            submitChanged(teleopHeight, -1);
        }
    } else if (type == "endgame") {
        if (endgameStatus == "Hidden") {
            show(endgameDiv, endgameSign, endgameHeight);
            setText('endgame-expand-status', 'Show');
            submitChanged(endgameHeight, 1);
        } else {
            hide(endgameDiv, endgameSign);
            setText('endgame-expand-status', 'Hidden');
            submitChanged(endgameHeight, -1);
        }
    }
}

function positionElements(button, div, sign, height, times) {
    changeTop(button, getHeight(button) + (height * times));
    changeTop(div, getHeight(div) + (height * times));
    changeTop(sign, getHeight(sign) + (height * times));
}

function submitChanged(height, times) {
   changeTop('general-submit', getHeight('general-submit') + (height * times)); 
}

function changeTop(element, end) {
    document.getElementById(element).style.top = end + 'px';
}

function setText(element, text) {
    document.getElementById(element).innerHTML = text; 
}

function getHeight(element) {
    var style = window.getComputedStyle(document.getElementById(element));
    var top = style.getPropertyValue('top');
    top = top.substring(0, top.length - 2);
    return parseInt(top);
}

function show(element, expand, heightPixel) {
    document.getElementById(element).style.height = heightPixel + 'px';       document.getElementById(element).style.display = 'inline';
    document.getElementById(expand).innerHTML = "-";
}

function hide(element, expand) {
    document.getElementById(element).style.height = 0 + 'px';       document.getElementById(element).style.display = 'none';
    document.getElementById(expand).innerHTML = "+";
}
