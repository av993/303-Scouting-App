function flip() {
    $("#playingField").css({'transform': 'rotate(-180deg)'});
}

var MtOliveTeams = [00,11,25,41,193,219,222,223,293,303,555,1089,1143,1228,1403,1626,1672,1923,1989,2016,2070,2495,2554,2577,2600,3142,3637,4361,4575,4652,4653,5310,5438,5732,6106,6203,6327,6860,6943,6945,7045];

var BridgewaterTeams = [00,56,75,102,136,219,224,303,714,747,1257,1672,1676,1811,1923,1989,2554,2590,2607,3314,3340,3515,4035,4281,4652,5624,5666,5732,5992,6016,6203,6860,6897,6943,6945,7045];

var DetroitTeams = [0, 58, 67,303,447,555,612,694, 868,870,894,1114,1218,1259,1262,1322,1325,1493,1559,1660,1756,1923,2016,2075,2081,2177,2200,2202,2220,2228,2377,2549,2620,2830,3381,3618,3620,3656,3767,3928,4003,4011,4096,4237,4392,4521,4541,4557,4776,4786,4909,5216,5407,5413,5422,5436,5531,5674,5724,5913,6121,6237,6328,6329,6860,6875,6968,7160, 7329];


        $('#match-team-dropdown').empty();


DetroitTeams.forEach(function(element) {
            $('#match-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });


/*
$('#match-event-dropdown').change(function() {
   var eventName = $(this).val();
    if (eventName == 'Mt Olive') {
      // alert(eventName);
        $('#match-team-dropdown').empty();

       MtOliveTeams.forEach(function(element) {
            $('#match-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Bridgewater') {
      // alert(eventName);
        $('#match-team-dropdown').empty();

       BridgewaterTeams.forEach(function(element) {
            $('#match-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Detroit') {
      // alert(eventName);
        $('#match-team-dropdown').empty();

       DetroitTeams.forEach(function(element) {
            $('#match-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    }
});*/

$('#intake_mechanism-dropdown').change(function() {
   var eventName = $(this).val();
    if (eventName == 'Mt Olive') {
      // alert(eventName);
        $('#team-dropdown').empty();

       MtOliveTeams.forEach(function(element) {
            $('#team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Bridgewater') {
      // alert(eventName);
        $('#team-dropdown').empty();

       BridgewaterTeams.forEach(function(element) {
            $('#team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Detroit') {
      // alert(eventName);
        $('#team-dropdown').empty();

       DetroitTeams.forEach(function(element) {
            $('#team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    }
});


$('#data-event-points').change(function() {
   var eventName = $(this).val();
    if (eventName == 'Mt Olive') {
      // alert(eventName);
        $('#data-team-points').empty();

       MtOliveTeams.forEach(function(element) {
            $('#data-team-points').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Bridgewater') {
      // alert(eventName);
        $('#data-team-points').empty();

       BridgewaterTeams.forEach(function(element) {
            $('#data-team-points').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Detroit') {
      // alert(eventName);
        $('#data-team-points').empty();

       DetroitTeams.forEach(function(element) {
            $('#data-team-points').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    }
});



$('#replay-event-dropdown').change(function() {
   var eventName = $(this).val();
    if (eventName == 'Mt Olive') {
      // alert(eventName);
        $('#replay-team-dropdown').empty();

       MtOliveTeams.forEach(function(element) {
            $('#replay-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Bridgewater') {
      // alert(eventName);
        $('#replay-team-dropdown').empty();

       BridgewaterTeams.forEach(function(element) {
            $('#replay-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Detroit') {
      // alert(eventName);
        $('#replay-team-dropdown').empty();

       DetroitTeams.forEach(function(element) {
            $('#replay-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    }
});




$("#general-teleop-dropdown-intake-direction : selected").text();
$('#dropdown-burnout').attr('checked', false);

function clearLocal() {
    localStorage.remove("Mt Olive");
}

       $("#image-div").click(function (ev) {
        mouseX = ev.pageX;
        mouseY = ev.pageY
        //alert(mouseX + ' ' + mouseY);
        var color = '#008080';
        var size = '1px';
        $("body").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', mouseY + 'px')
                .css('left', mouseX + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
        );
    })


