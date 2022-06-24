const dungeon = "[[0,0], [1,0], [0,1], [0,2], [0,3]]";

var startX = 0;
var startY = 0;

const northClicked = function (e) {
    // ++startX;
    if (dungeon.includes(String([++startX, startY]))){
        document.getElementById("text_area").value = [startX, startY];
    } else {
        --startX;
        document.getElementById("text_area").value = "Can't go that direction";

    }

};

const eastClicked = function (e) {
    // ++startY;
    if (dungeon.includes(String([startX, ++startY]))){
        document.getElementById("text_area").value = [startX, startY];
    } else {
        --startY;
        document.getElementById("text_area").value = "Can't go that direction";
    }
};

const southClicked = function (e) {
    if (dungeon.includes(String([--startX, startY]))){
        document.getElementById("text_area").value = [startX, startY];
    } else {
        ++startX;
        document.getElementById("text_area").value = "Can't go that direction";
    }
};

const westClicked = function (e) {
    if (dungeon.includes(String([startX, --startY]))){
        document.getElementById("text_area").value = [startX, startY];
    } else {
        ++startY;
        document.getElementById("text_area").value = "Can't go that direction";
    }
};

const docLoaded = function (e) {
    console.log('DOM fully loaded and parsed');
    let northButton = document.getElementById("north_button");
    northButton.addEventListener("click", northClicked);
    let eastButton = document.getElementById("east_button");
    eastButton.addEventListener("click", eastClicked);
    let southButton = document.getElementById("south_button");
    southButton.addEventListener("click", southClicked);
    let westButton = document.getElementById("west_button");
    westButton.addEventListener("click", westClicked);
    document.addEventListener("keypress", function(event) {
        if (event.code === 38) {
            alert('north.');
        } elseif (event.code === 39)
        {alert('east.');
        } elseif (event.code === 40)
        {alert('south.');
        } elseif (event.code === 37)
        {alert('west.');}
    });
};

window.addEventListener('DOMContentLoaded', docLoaded);
