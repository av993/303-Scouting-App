function flip() {
    $("#playingField").css({'transform': 'rotate(-180deg)'});
}

var MtOliveTeams = [00,11,25,41,193,219,222,223,293,303,555,1089,1143,1228,1403,1626,1672,1923,1989,2016,2070,2495,2554,2577,2600,3142,3637,4361,4575,4652,4653,5310,5438,5732,6106,6203,6327,6860,6943,6945,7045];

var LehighTeams = [0,11,25,41,56,75,102,103,203,219,222,223,225,272,293,303,316,321,365,433,708,747,834,1089,1143,1168,1218,1257,1391,1403,1640,1676,1712,1807,1923,1989,2016,2180,2495,2539,2590,2600,2607,2729,3142,3314,3637,3929,3974,4342,4361,4653,5401,5404,5407,5420,5895,5992,6203,6860,6945];


var PittsburghTeams = [00,48,117,156,217,303,337,870,945,1308,1708,1743,1787,2051,2053,2252,2603,2641,2656,3061,3062,3171,3260,3492,3504,3511,3954,3954,3955,3957,4027,4028,4049,4050,4150,4269,4467,4521,4522,4547,4930,4991,5077,5472,5470,5811,5842,6032,6054,6414,6947,7165,7274];

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
    } else if (eventName == 'Lehigh') {
      // alert(eventName);
        $('#match-team-dropdown').empty();

       LehighTeams.forEach(function(element) {
            $('#match-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Pittsburgh') {
      // alert(eventName);
        $('#match-team-dropdown').empty();

       PittsburghTeams.forEach(function(element) {
            $('#match-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    }
});

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
    } else if (eventName == 'Lehigh') {
      // alert(eventName);
        $('#team-dropdown').empty();

       LehighTeams.forEach(function(element) {
            $('#team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Pittsburgh') {
      // alert(eventName);
        $('#team-dropdown').empty();

       PittsburghTeams.forEach(function(element) {
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
    } else if (eventName == 'Lehigh') {
      // alert(eventName);
        $('#data-team-points').empty();

       LehighTeams.forEach(function(element) {
            $('#data-team-points').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Pittsburgh') {
      // alert(eventName);
        $('#data-team-points').empty();

       PittsburghTeams.forEach(function(element) {
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
    } else if (eventName == 'Lehigh') {
      // alert(eventName);
        $('#replay-team-dropdown').empty();

       LehighTeams.forEach(function(element) {
            $('#replay-team-dropdown').append($('<option>', 
            {
                value: element.toString(),
                text: element.toString()
            }));
       });
    } else if (eventName == 'Pittsburgh') {
      // alert(eventName);
        $('#replay-team-dropdown').empty();

       PittsburghTeams.forEach(function(element) {
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


