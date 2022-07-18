
let ui = PageUI;
let controller = DndController;
ui.controller = DndController;

const docLoaded = function (e) {
    console.log('DOM fully loaded and parsed');
    ui.wire();
    // let northButton = document.getElementById("north_button");
    // northButton.addEventListener("click", northClicked);
    // let eastButton = document.getElementById("east_button");
    // eastButton.addEventListener("click", eastClicked);
    // let southButton = document.getElementById("south_button");
    // southButton.addEventListener("click", southClicked);
    // let westButton = document.getElementById("west_button");
    // westButton.addEventListener("click", westClicked);
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
    exports.setUI = setUI;
}
