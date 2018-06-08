// Initialize Firebase
var config = {
    apiKey: "AIzaSyBRKQ8mlEIQ3LaudMRGsjiw0UGnPX1UzeQ",
    authDomain: "music-education-13f14.firebaseapp.com",
    databaseURL: "https://music-education-13f14.firebaseio.com",
    projectId: "music-education-13f14",
    storageBucket: "music-education-13f14.appspot.com",
    messagingSenderId: "774283472473"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

function setMessages(messages) {
    console.log("saved messages to Firebase");
    database.ref("messages").set(messages);
}

function getMessages(callback){
    database.ref("messages/").once("value").then(snapshot => {
        var data = snapshot.val();
        callback(data);
    });
}

function getTilesData(tile, callback){
    database.ref("tiles/" + tile).once("value").then(snapshot => {
        var data = snapshot.val();
        callback(data);
    });
}

function setTileData(tile, tileData) {
    console.log("saved new tile data to Firebase");
    database.ref("tiles/"+tile).set(tileData);
}