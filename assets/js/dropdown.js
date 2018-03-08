function flip() {
    $("#playingField").css({'transform': 'rotate(-180deg)'});
}

var MtOliveTeams = [11,25,41,193,219,222,223,293,303,555,1089,1143,1143,1228,1403,1626,1672,1923,1989,2016,2070,2495,2554,2577,2600,3142,3637,4361,4575,4652,4653,5310,5438,5438,5732,6106,6203,6327,6860,6943,6945,7045];

var BridgewaterTeams = [56,75,102,136,219,224,303,714,747,1257,1672,1676,1811,1923,1989,2554,2590,2607,3314,3340,3515,4035,4281,4652,5624,5666,5732,5992,6016,6203,6860,6897,6943,6945,7045];

var PittsburghTeams = [48,117,156,217,303,337,870,945,1308,1708,1743,1787,2051,2053,2252,2603,2641,2656,3061,3062,3171,3260,3492,3504,3511,3954,3954,3955,3957,4027,4028,4049,4050,4150,4269,4467,4521,4522,4547,4930,4991,5077,5472,5470,5811,5842,6032,6054,6414,6947,7165,7274];

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


