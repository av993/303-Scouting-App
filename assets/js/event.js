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
        mouseX = e.pageX;
        mouseY = e.pageY
        //alert(mouseX + ' ' + mouseY);
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
    
    $('#event-ground-btn').click(function(e) {
        openDiv("Ground");
    });
    
    $('#event-portal-btn').click(function(e) {
        openDiv("Portal");
    });
    
    $('#event-missed-btn').click(function(e) {
        openDiv("Missed");
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
    
    $("div.fieldPoint").remove();

    
    hideElement("general-div");
    showElement("event-div", 460);
    showElement("event-cancel");
    hideElement("general-submit");

    var color = '#d92f24';
    var size = '10px';
    
    $("#image-div").append(
            $('<div class = "fieldPoint"></div>')
                .css('position', 'absolute')
                .css('top',  y + 'px')
                .css('left', x + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
    );                     
    
}

var events = [];


function openDiv(event) {  
    var xr = Math.round(x);
    var yr = Math.round(y);
    
    var addEvent = [];
    addEvent.push(event);
    addEvent.push(getSeconds());
    addEvent.push(xr);
    addEvent.push(yr);
    events.push(addEvent);
    //alert(JSON.stringify(events));
    submitEvent(event);
}

function submitEvent(status) {
    
    if (status == "Switch") {
         add('#general-teleop-switch-cubes-input');
    } else if (status == "Exchange") {
         add('#general-teleop-portal-cubes-input');
    } else if (status == "Scale") {
         add('#general-teleop-scale-cubes-input');
    } else if (status == "Ground") {
        add('#general-teleop-ground-cubes-input');
    } else if (status == "Portal") {
        add('#general-teleop-exchange-cubes-input');
    } else if (status == "Missed") {
        add('#general-teleop-missed-cubes-input');
    }
    hideAndShowAll();
}

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
    $("div.fieldPoint").remove();

    hideElement("event-cancel");
    hideElement("event-div");
    showElement("general-div");
    showElement("general-submit");

}

function hideElement(elementName) {
    //alert(elementName); 
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
