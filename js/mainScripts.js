var messages;
var tile6;

function fadeTile (tile, tileNum) {
    switch (tileNum){
        case 1:
            $(tile).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(images/people.jpeg)');
            break;
        case 3:
            $(tile).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(images/beaverstadium.jpeg)');
            break;
        case 4:
            $(tile).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(images/musiceducation.jpg)');
            break;
        case 6:
            $(tile).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(images/happystudent.jpg)');
            break;
        default:
            $(tile).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9))')
            break;
    }
}

function unfadeTile (tileNum) {
    $(tileNum).removeAttr('style');
}

function getData () {
    getMessages(function(data){
        messages = data;
        console.log(messages);
    });

    getTilesData("tile6", function(data){
        tile6 = data;
        console.log(tile6);
        document.getElementById("tile6").innerHTML = tile6;
    });
}

$('#contactForm').submit(function () {
    sendEmail();
    return false;
   });

function sendEmail() {
    var email = document.getElementById("emailInput").value;
    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageInput").value;
    document.getElementById("contactConfirmation").style.visibility = "visible";

    console.log(email + name + message);

    messages.push({
        from: email,
        name: name,
        text: message 
    });

    console.log(messages);
    setMessages(messages);
    
}