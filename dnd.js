const dungeon = "[[0,0], [1,0], [0,1], [0,2], [0,3]]";

var locationX = 0;
var locationY = 0;

let isTest = typeof window == 'undefined';

var ui = null;

PageUI = {};
PageUI.addToLog = function (message) {
    document.getElementById("text_area").value += message + "\n";
}

ui = PageUI;

function addToGameLog(message) {
    if (!isTest) {
        document.getElementById("text_area").value += message + "\n";
    } else {
        console.log("HERE")
    }
}

moveTo = function (newX, newY) {
    if (dungeon.includes(String([newX, newY]))) {
        locationX = newX;
        locationY = newY;
        addToGameLog([newX, newY]);
        //PageUI.addToLog([newX, newY]);
        return [newX, newY];
    } else {
        addToGameLog("Can't go that direction");
        return "Can't go that direction";
    }
}

northClicked = function (e) {
    return moveTo(locationX + 1, locationY);
};

eastClicked = function (e) {
    return moveTo(locationX, locationY + 1);
};

southClicked = function (e) {
    return moveTo(locationX - 1, locationY);
};

westClicked = function (e) {
    return moveTo(locationX, locationY - 1);
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
    // document.addEventListener("keypress", function(event) {
    //     if (event.code === 38) {
    //         alert('north.');
    //     } elseif (event.code === 39)
    //     {alert('east.');
    //     } elseif (event.code === 40)
    //     {alert('south.');
    //     } elseif (event.code === 37)
    //     {alert('west.');}
    // });
};

if (!isTest) {
    window.addEventListener('DOMContentLoaded', docLoaded);
} else {
    exports.northClicked = northClicked;
    exports.eastClicked = eastClicked;
    exports.southClicked = southClicked;
    exports.westClicked = westClicked;
}
