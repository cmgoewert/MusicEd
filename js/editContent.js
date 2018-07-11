var tileData;
var editor;
var tileNum;

function getContent () {
    checkCookie();
    tileNum = window.location.search.substring(1);
    console.log(tileNum);
    getTilesData(tileNum, function(data){
        tileData = data;
        console.log(tileData);
        editor.setData(tileData); 
    });
}

function setEditor (myEditor) {
    editor = myEditor;
}

function changeTile () {
    tileData = editor.getData();
    setTileData(tileNum, tileData);
}

function setContentToEdit() {
    var select = document.getElementById("sel1");
    tileNum = select.options[select.selectedIndex].value;
    console.log(tileNum);
    window.location = "admin.html?"+tileNum;
}

$('#adminForm').submit(function (e) {
    e.preventDefault();
    checkPassword();
    return false;
   });

function checkPassword() {
    var pass = document.getElementById("adminPass").value;
    var correctPass;
    getAdminPass(function(data){
        correctPass = data.pass;
        if(pass == correctPass){
            document.getElementById("passwordOverlay").style.display = "none";
            setCookie("passed", true, 1);
        }
        else {
            //add password error message here
        }
    });
    
}

//COOKIE MANAGEMENT
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var passed = getCookie("passed");
    if (passed != "") {
        //dont display popup
        document.getElementById("passwordOverlay").style.display = "none";
    } else {
        //display popup, create cookie after correct password
        document.getElementById("passwordOverlay").style.display = "block";
    }
} 