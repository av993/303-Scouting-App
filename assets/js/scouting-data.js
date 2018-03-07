
function getJSON() {

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

$('#data-type-dropdown').change(function() {
    var string = $('#data-event-dropdown').val() + " " + $('#data-type-dropdown').val();
    firebase.database().ref(string).once('value',      function(snap){
     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(toArray(snap)));
      var dlAnchorElem =  document.getElementById('data-json-btn');
     dlAnchorElem.setAttribute("href",     dataStr     );
     var path = string + ".json";
     dlAnchorElem.setAttribute("download", path);
})});

$('data-event-dropdown').change(function() {
     var string = $('#data-event-dropdown').val() + " " + $('#data-type-dropdown').val();
    firebase.database().ref(string).once('value',      function(snap){
     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(toArray(snap)));
      var dlAnchorElem =  document.getElementById('data-json-btn');
     dlAnchorElem.setAttribute("href",     dataStr     );
     var path = string + ".json";
     dlAnchorElem.setAttribute("download", path);
    })
});

