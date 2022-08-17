let ui = new PageUI();
let dungeon = new Dungeon();
DndController.prototype.dungeonLevel(level);
let controller = new DndController(dungeon, ui);
ui.setController(controller);

const docLoaded = function (e) {
    console.log('DOM fully loaded and parsed');
    ui.wire();
};

window.addEventListener('DOMContentLoaded', docLoaded);

