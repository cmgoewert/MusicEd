function fadeTile (tileNum) {
    console.log("faded tile");
    var background;
    switch (tileNum) {
        case 1:
            background = document.getElementById("firstTileBg");
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break; 
    }

    background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9))";
    background.style.borderRadius = "25px";
}

function unfadeTile (tileNum) {
    console.log("unfaded tile");
    var background;

    switch (tileNum) {
        case 1:
            background = document.getElementById("firstTileBg");
            background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.45)), url(../images/people.jpeg)";
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break; 
    }

}