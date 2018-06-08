var tileData;
var editor;
var tileNum;

function getTiles (tile) {
    tileNum = tile;
    getTilesData(tile, function(data){
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
