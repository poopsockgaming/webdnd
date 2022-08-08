let Dungeon = function () {
    this.rooms = new Map();
};

let Room = function () {
    this.mobs = [];
}

Dungeon.prototype.getRoomCount = function () {
    return this.rooms.size;
}

Dungeon.prototype.roomKey = function (x, y) {
    return String(x + "," + y);
}

Dungeon.prototype.addRoom = function (x, y) {
    this.rooms.set(this.roomKey(x, y), new Room());
}

Dungeon.prototype.hasRoom = function (x, y) {
    return this.rooms.has(this.roomKey(x, y));
}

Dungeon.prototype.placeMob = function (x, y, mob) {
    let room = this.rooms.get(this.roomKey(x, y));
    room.mobs.push(mob);
}

Dungeon.prototype.getMobs = function (x, y) {
    if (this.roomKey(x, y) !== undefined) {
        return this.rooms.get(this.roomKey(x, y)).mobs;
    }
}