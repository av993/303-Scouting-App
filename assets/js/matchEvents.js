document.getElementById('image-div').addEventListener("click", printMousePos);
document.getElementById('event-switch-btn').addEventListener("click", openEvent('Switch'));
document.getElementById('event-scale-btn').addEventListener("click", openEvent('Scale'));
document.getElementById('event-penalty-btn').addEventListener("click", openEvent('Penalty'));
document.getElementById('event-problem-btn').addEventListener("click", openEvent('Problem'));
document.getElementById('event-od-btn').addEventListener("click", openEvent('OD'));
document.getElementById('event-pickup-btn').addEventListener("click", openEvent('Pickup'));
document.getElementById('event-exchange-btn').addEventListener("click", openEvent('Exchange'));

function openEvent(event) {
    
}

function hideElement(elementName) {
     document.getElementById(elementName).style.display = 'none';
}

function showElement(elementName) {
     document.getElementById(elementName).style.display = 'inline';

}