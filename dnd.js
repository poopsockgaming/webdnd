const dungeon = "[[0,0], [1,0], [0,1], [0,2], [0,3]]";

var locationX = 0;
var locationY = 0;

// let ui = null;

// PageUI = {};
// PageUI.name = "Page UI";
// PageUI.addToGameLog = function (message) {
//     document.getElementById("text_area").value += message + "\n";
// }

// const page = require('./pageUI');
// const PageUI = page.PageUI;
// ui = PageUI;
// import { PageUI } from './pageUI';
// let pageui = PageUI
// ui = pageui;

let DndController = {};

DndController.ui = null;

DndController.setUI = function (newUI) {
    this.ui = newUI;
}

DndController.moveTo = function (newX, newY) {
    console.log("DndController.moveTo");
    if (dungeon.includes(String([newX, newY]))) {
        // locationX = newX;
        // locationY = newY;
        console.log("this.ui: ", this.ui);
        this.ui.addToGameLog([newX, newY]);
        return [newX, newY];
    } else {
        this.ui.addToGameLog("Can't go that direction");
        return "Can't go that direction";
    }
}

DndController.northClicked = function (x, y) {
    return this.moveTo(locationX + 1, locationY);
};

DndController.eastClicked = function (x, y) {
    if(true){
        locationX = x;
        locationY = y;
        return moveTo(locationX, locationY + 1);
    } else {
        return moveTo(locationX, locationY + 1);
    }
};

DndController.southClicked = function (x, y) {
    if(true){
        locationX = x;
        locationY = y;
        return moveTo(locationX - 1, locationY);
    } else {
        return moveTo(locationX - 1, locationY);
    }
};

DndController.westClicked = function (x, y) {
    if(true){
        locationX = x;
        locationY = y;
        return moveTo(locationX, locationY - 1);
    } else {
        return moveTo(locationX, locationY - 1);
    }
};
