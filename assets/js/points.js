function updatePoints() {
    var el = document.getElementById('data-image-div-div');

    
    firebase.database().ref($("#data-event-points").val() +  " Match").once('value', function(snap){
       toArrayPoints(snap);
    });
}
var switchPoints = [];
var exchangePoints = [];
var scalePoints = [];
var pickupPoints = [];
var problemPoints = [];
var penaltyPoints = [];
var odPoints = [];

function toArrayPoints(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        if (item["Team"] == $("#data-team-points").val()) {
           
            item["Switch Coordinates"].forEach(function(coordinates) {
               switchPoints.push(coordinates);
           });
           item["Scale Coordinates"].forEach(function(coordinates) {
               scalePoints.push(coordinates);
           });
           item["Exchange Coordinates"].forEach(function(coordinates) {
               exchangePoints.push(coordinates);
           });
            item["Pickup Coordinates"].forEach(function(coordinates) {
               pickupPoints.push(coordinates);
           });
            item["Problem Coordinates"].forEach(function(coordinates) {
               problemPoints.push(coordinates);
           });
            item["Penalty Coordinates"].forEach(function(coordinates) {
               penaltyPoints.push(coordinates);
           });
        } 
        returnArr.push(item);
    });

    var typeData =$("#data-type-points").val();
    
    if (typeData == "Switch") {
        switchPoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    } else if (typeData == "Scale") {
        scalePoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    } else if (typeData == "Exchange") {
        exchangePoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    } else if (typeData == "Pickup") {
        pickupPoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    } else if (typeData == "Problem") {
        problemPoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    } else if (typeData == "Penalty") {
        penaltyPoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    } /*else if (typeData == "O/D") {
        odPoints.forEach(function(points) {
        var color = '#d92f24';
        var size = '10px';
        $("#data-image-div-div").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', points[1] + 'px')
                .css('left', points[0] + 'px')
                .css('width', size)
                .css('height', size)
                .css('background-color', color)
                .css('border-radius', "10px")
        );                     
    });
    }*/
    
    
   
    
    return returnArr;
};
