let ui = new PageUI();
let dungeon = new Dungeon();
dungeon.addRoom(0, 0);
dungeon.addRoom(1, 0);
dungeon.addRoom(0, 1);
dungeon.addRoom(0, 2);
dungeon.addRoom(0, 3);
dungeon.placeMob(0, 1, kobold);
let controller = new DndController(dungeon, ui);
ui.setController(controller);

const docLoaded = function (e) {
    console.log('DOM fully loaded and parsed');
    ui.wire();
};

window.addEventListener('DOMContentLoaded', docLoaded);

