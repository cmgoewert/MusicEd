var tileData;
var editor;
var tileNum;

function getContent () {
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
    console.log(pass);
    //THIS NEEDS TO BE CHANGED TO NOT BE IN THE JAVASCRIPT
    if(pass == "nittany"){
        document.getElementById("passwordOverlay").style.display = "none";
    }
}