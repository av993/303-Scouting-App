


var x = 0;
var y = 0;

$(document).ready(function() {    
    
    $('#switch-cubes-input').css('text-align','center');
    $('#switch-cubes-input').css('font-weight','800');
    $('#scale-cubes-input').css('text-align','center');
    $('#scale-cubes-input').css('font-weight','800');
    
    $('#image-div').click(function(e) {
        var offset = $(this).offset();
        printMouse((e.pageX - offset.left), (e.pageY - offset.top));
    });
    
    $('#start-match').click(function(e) {
     //   startFieldTimer(150);
    });
    
     $('#event-switch-btn').click(function(e) {
        openDiv("Switch");
    });
    
    $('#event-exchange-btn').click(function(e) {
        openDiv("Exchange");
    });
    
    $('#event-scale-btn').click(function(e) {
        openDiv("Scale");
    });
    
    $('#event-pickup-btn').click(function(e) {
        openDiv("Pickup");
    });
    
    $('#event-problem-btn').click(function(e) {
        openDiv("Problem");
    });
    
    $('#event-penalty-btn').click(function(e) {
        openDiv("Penalty");
    });
    
    $('#event-od-btn').click(function(e) {
        openDiv("OD");
    });
    
     $('#event-submit').click(function(e) {
        submitEvent();
    });
    
    $('#event-cancel').click(function(e) {
        hideAndShowAll();
    });
    
});

function bottomSwitch() {
    newWindow = window.open("alert-scale.html", "lol", 'height = 300, width = 150, menubar = 0, scrollbars = 0, status = 0, resizable = 0');
    if (window.focus) {
        newWindow.focus();
    }
}    

function printMouse(xCoordinate, yCoordinate) {    
    x = xCoordinate;
    y = yCoordinate;
    
    hideElement("general-div");
    showElement("event-div", 460);
}

function openDiv(event) {  
    setIdText("event-status-label", event);
   
    if (event == "Switch" || event == "Exchange" || event == "Scale") {
        switchDiv(event);
    } else if (event == "Pickup") {
        scaleDiv("Pickup");
        var options = {
            "--Portal--" : "--Pickup--",
            "Ground" : "Ground",
            "Portal" : "Portal"
        }
        addSelectOptions("#events-dropdown-pickup", options,  "--Pickup--");
        
    } else if (event == "Problem") {
        penaltyDiv("Problem");
        var options = {
            "--Problem--" : "--Problem--",
            "Burnout" : "Burnout",
            "Connection Lost" : "Connection Lost"
        }
        addSelectOptions("#events-dropdown-platform-problems", options,  "--Problem--");
    
    } else if (event == "Penalty") {
        penaltyDiv("Penalty");
        var options = {
            "--Problem--" : "--Penalty--",
            "Burnout" : "Null Territory",
            "Connection Lost" : "Tech Foul"
        }
        addSelectOptions("#events-dropdown-platform-problems", options,  "--Penalty--");
    } else if (event == "OD") {
        penaltyDiv("O/D");
        var options = {
            "--Problem--" : "--O/D--",
            "Burnout" : "Offense focused",
            "Connection Lost" : "Defense focused"
        }
        addSelectOptions("#events-dropdown-platform-problems", options,  "--Penalty--");
    }
}

function switchDiv(labelName) {
   var coordinates = "(" + Math.round(x) + ", " + Math.round(y) + ")";
    hideElement("event-div");
    showElement("switch-div", 270);        
    setIdText("switch-label", labelName);
    setIdText("switch-time", getSeconds());
    setIdText("switch-coordinates", coordinates);
    $("#switch-cubes-input").val("1");
    submitCancel();   
} 

function scaleDiv(labelName) {
    var coordinates = "(" + Math.round(x) + ", " + Math.round(y) + ")";
    hideElement("event-div");
    showElement("scale-div", 270);        
    setIdText("scale-label", labelName);
    setIdText("scale-coordinates", coordinates);
    setIdText("scale-time", getSeconds());
    $("#scale-cubes-input").val("1");

    submitCancel();  
}

function penaltyDiv(labelName) {
    var coordinates = "(" + Math.round(x) + ", " + Math.round(y) + ")";
    hideElement("event-div");
    showElement("penalty-div", 270);        
    setIdText("platform-label", labelName);
    setIdText("platform-coordinates", coordinates);
    setIdText("platform-time", getSeconds());
    submitCancel();  
}

var switchCoordinates = [];
var scaleCoordinates = [];
var exchangeCoordinates = [];
var pickupCoordinates = [];
var problemCoordinates = [];
var penaltyCoordinates = [];
var odCoordinates = [];

var switchTime = [];
var scaleTime = [];
var exchangeTime = [];
var pickupTime = [];
var problemTime = [];
var penaltyTime = [];
var odTime = [];

var penalties = [];

function submitEvent() {
    var xr = Math.round(x);
    var yr = Math.round(y);
    
    var status = document.getElementById('event-status-label').innerHTML;
    
    if (status == "Switch") {
          add('#general-teleop-switch-cubes-input');
        switchCoordinates.push([xr, yr]);
        switchTime.push(getSeconds());
    } else if (status == "Exchange") {
         add('#general-teleop-portal-cubes-input');
         exchangeCoordinates.push([xr, yr]);
         exchangeTime.push(getSeconds());
    } else if (status == "Scale") {
         add('#general-teleop-scale-cubes-input');
         scaleCoordinates.push([xr, yr]);
         scaleTime.push(getSeconds());
    } else if (status == "Pickup") {
        //DONE
          var type = $("#events-dropdown-pickup").val();
          if (type == "Portal") {
                add('#general-teleop-exchange-cubes-input');
          } else if (type == "Ground") {
                add('#general-teleop-ground-cubes-input');
          }
          pickupCoordinates.push([xr, yr]);
          pickupTime.push(getSeconds());
    } else if (status == "Problem") {
         //NOT DONE - Check problems based on what is selected
          problemCoordinates.push([xr, yr]);
          problemTime.push(getSeconds());
    } else if (status == "Penalty") {
        //done  
        penalties.push($("#events-dropdown-platform-problems").val());
          penaltyCoordinates.push([xr, yr]);
          penaltyTime.push(getSeconds());
    } else if (status == "OD") {
        //done
          $("#teleop-strategy-dropdown").val($("#events-dropdown-platform-problems").val());
          odCoordinates.push([xr, yr]);
          odTime.push(getSeconds());
    }
    
    hideAndShowAll();
}

function getSwitchCoordinates() {
    
}

//events-dropdown-platform-problems
//events-dropdown-pickup
function addSelectOptions(selectName, options, selected) {
    var newOptions = options;
    
    var selectedOption = selected;

    var select = $(selectName);
    
    if (select.prop) {
         var options = select.prop('options');
    }
    else {
        var options = select.attr('options');
    }
    $('option', select).remove();

    $.each(newOptions, function(val, text) {
      options[options.length] = new Option(text, val);
    });
    
    select.val(selectedOption);
}

//HELPER METHODS

function hideAndShowAll() {
    hideElement("switch-div");
    hideElement("penalty-div");
    hideElement("scale-div");
    hideElement("event-submit");
    hideElement("event-cancel");
    hideElement("event-div");
    showElement("general-div");
}

function hideElement(elementName) {
     document.getElementById(elementName).style.display = 'none';
     document.getElementById(element).style.height = 0 + 'px';
}

function showElement(elementName, height) {
    document.getElementById(elementName).style.display = 'inline';
    document.getElementById(element).style.height = height + 'px';
}

function changeInformationAdded(type) {
    setIdText('timer',type);
    
    if (type == "Scale") {
      $("#switch-div").show();
      $("#vault-div").hide();
        //tIdText('first-chk', "Owarship");
    } else if (type == "Vault") {
      $("#switch-div").hide();
      $("#vault-div").show();
    }

}

function setIdText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function expand() {
    document.getElementById('general-auto-div').style.height = 250 + 'px';        document.getElementById('general-auto-div').style.display = 'inline';
    setIdText('general-auto-expand-sign', "-");
    document.getElementById('general-auto-expand-sign').innerHTML = "-";
}

function submitCancel() {
     showElement("event-submit", 48);
     showElement("event-cancel", 48);
}


