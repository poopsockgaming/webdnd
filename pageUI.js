let PageUI = {};
PageUI.name = "Page UI";

PageUI.controller = null;

PageUI.addToGameLog = function (message) {
    document.getElementById("text_area").value += message + "\n";
}

PageUI.wire = function () {
    let northButton = document.querySelector("#north_button");
    northButton.addEventListener("click", this.controller.northClicked);
    // let eastButton = document.getElementById("east_button");
    // eastButton.addEventListener("click", eastClicked);
    // let southButton = document.getElementById("south_button");
    // southButton.addEventListener("click", southClicked);
    // let westButton = document.getElementById("west_button");
    // westButton.addEventListener("click", westClicked);
}

// exports.PageUI = PageUI;