$('#replay-update-btn').click(function(e) {
    //alert("Hello0");
    var matchData = $("#replay-event-dropdown").val() + " Match";
    //alert(matchData);
     firebase.database().ref(matchData).once('value',function(snap){
        replayPoints(snap);
       // alert(JSON.stringify(snap));
    });
});


function replayPoints(snapshot) {
    $("p.replayPoint").remove();
    $("p.replayText").remove();

    
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        if (item["Team"] == $("#replay-team-dropdown").val() && item["Match"] == $("#replay-match-dropdown").val()) {
           
            var top = 150;
            var number = 1;
            item["Events"].forEach(function(event) {
                
                var id = "replay-number-" + number;
                
               // ADD POINTS
                var color = '#d92f24';
                var size = '15px';
                $("#replay-field-div").append(
                    $('<p class = "replayPoint" ' + "id = " + id + '>' + number + '</p>')
                        .css('position', 'absolute')
                        .css('left', event[2] + 'px')
                        .css('top', event[3] + 'px')
                        .css('color', color)
                        .css('font-weight', "800")
                        .css('font-size', size)

                );
                var seconds = parseInt(event[1]);
                
                var minutes = parseInt(seconds / 60, 10)
                var seconds = parseInt(seconds % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                var information = number + ". " + event[0] + " - " + minutes + ":" + seconds ;
                
                var idBtn = "replay-button-" + number;
                
                 $("body").append(
                    $('<button class = "replayText">' + information + '</button>')
                        .css('position', 'absolute')
                        .css('left', 670 + 'px')
                        .css('top', top + 'px')
                        .css('font-size', "20px")
                        .css('font-weight', "800")
                        .css('color', '#ffffff')
                        .css('background-image', 'none')
                        .css('background-color', 'transparent')
                        .css('border-width', '0px')
                 );
                
                top = top + 35;
                number = number + 1;
            });      
        } 
    }); 
};

 $('.replayText').click(function(e) {
     alert("Hello");
});




$('#replay-team-dropdown').change(function() {
    
    var matchData = $("#replay-event-dropdown").val() + " Match";
    //alert(matchData);
    firebase.database().ref(matchData).once('value',function(snap){
        var matches = getMatches(snap);
                $('#replay-match-dropdown').empty();

        matches.forEach(function(match) {
            
            $('#replay-match-dropdown').append($('<option>', {
                value: match.toString(),
                text: match.toString()
            }));
        });
    });
});


function getMatches(snapshot) {
    var matchesArr = [];
    
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        if (item["Team"] == $("#replay-team-dropdown").val()) {
            matchesArr.push(item["Match"]);   
        } 
    }); 
    
    return matchesArr;
}

