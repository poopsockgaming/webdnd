let PageUI = {};
PageUI.name = "Page UI";

PageUI.controller = null;

PageUI.enableMovementButtons = function () {
    document.querySelector('#north_button').disabled = false;
    document.querySelector('#east_button').disabled = false;
    document.querySelector('#south_button').disabled = false;
    document.querySelector('#west_button').disabled = false;
}

PageUI.disableMovementButtons = function () {
    document.querySelector('#north_button').disabled = true;
    document.querySelector('#east_button').disabled = true;
    document.querySelector('#south_button').disabled = true;
    document.querySelector('#west_button').disabled = true;
}

PageUI.setController = function (controller) {
    this.controller = controller;
}

PageUI.addToLocationLog = function (message) {
    document.getElementById("location_text_area").value = "";
    document.getElementById("location_text_area").value += message + "\n";
}

PageUI.addToHPLog = function (message) {
    document.getElementById("hp_text_area").value = "";
    document.getElementById("hp_text_area").value += message + "\n";
}

PageUI.addToGameLog = function (message) {
    // document.getElementById("text_area").value = "";
    document.getElementById("text_area").value += message + "\n";
}

PageUI.clearGameLog = function () {
    document.getElementById("text_area").value = "";
}

PageUI.wire = function () {
    // console.log("this.controller: ", this.controller);
    let northButton = document.querySelector("#north_button");
    northButton.addEventListener("click", () => {this.controller.northClicked()});
    let eastButton = document.querySelector("#east_button");
    eastButton.addEventListener("click", () => {this.controller.eastClicked()});
    let southButton = document.querySelector("#south_button");
    southButton.addEventListener("click", () => {this.controller.southClicked()});
    let westButton = document.querySelector("#west_button");
    westButton.addEventListener("click", () => {this.controller.westClicked()});
    let attackButton = document.querySelector("#attack_button");
    attackButton.addEventListener("click", () => {this.controller.playerAttacks()});
}

// exports.PageUI = PageUI;