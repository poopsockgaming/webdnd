let level = 1;

let key;

let player = {
    hp: 10,
    ac: 10,
    damage: 3,
    initiative: 0,
    keys: 0
};

let kobold = {
    name: "kobold",
    hp: 5,
    ac: 10,
    damage: 2,
    initiative: 0
};

let DndController = function (dungeon, ui) {
    this.dungeon = dungeon;
    this.ui = ui;
    this.x = 0;
    this.y = 0;
};

DndController.prototype.dungeonLevel = function (level) {
    if (level === 1) {
        console.log("dungeon: ", dungeon);
        dungeon.addRoom(0, 0);
        dungeon.addRoom(1, 0);
        dungeon.addRoom(0, 1);
        dungeon.addRoom(0, 2);
        dungeon.addRoom(0, 3);
        dungeon.placeMob(0, 3, kobold);
        dungeon.placeMob(0, 2, {name: "exit"});
        dungeon.placeMob(0, 1, {name: "key"});

    }
    if (level === 2) {
        dungeon.clearDungeon();
        dungeon.addRoom(0, 0);
        dungeon.addRoom(1, 0);
        dungeon.addRoom(2, 0);
        dungeon.addRoom(3, 0);
        dungeon.addRoom(4, 0);
        dungeon.addRoom(5, 0);
        dungeon.placeMob(4, 0, kobold);
        dungeon.placeMob(5, 0, {name: "exit"});

    }
    if (level === 3) {
        dungeon.clearDungeon();
        dungeon.addRoom(0, 0);
        dungeon.addRoom(1, 0);
        dungeon.addRoom(2, 0);
        dungeon.addRoom(3, 0);
        dungeon.addRoom(0, 1);
        dungeon.addRoom(0, 2);
        dungeon.addRoom(0, -1);
        dungeon.addRoom(0, -2);
    }

}

DndController.prototype.getLocation = function () {
    return [this.x, this.y];
}

DndController.prototype.setLocation = function (x, y) {
    this.x = x;
    this.y = y;
}

DndController.prototype.setUI = function (newUI) {
    this.ui = newUI;
}

DndController.prototype.setDungeon = function (dungeon) {
    this.dungeon = dungeon;
}

DndController.prototype.containsElement = function (val) {
    if (Array.from(dungeon.keys()).includes((val))) {
        return true;
    }
}

DndController.prototype.playerAction = function () {
    this.ui.addToGameLog("What will you do?");

}


DndController.prototype.roll = function (sides) {
    ++sides
    return Math.floor(Math.random() * (sides - 1)) + 1;
}

DndController.prototype.initiativeRoll = function (mob) {
    // console.log("mob: ", typeof(mob));
    // console.log("player: ", typeof(player));
    // let mobVariable = mob;
    player.initiative = this.roll(20);
    mob.initiative = this.roll(20);
    let initiativeRollText =
        "You roll a ".concat(player.initiative, " and your enemy rolls ", mob.initiative);
    console.log(initiativeRollText);
    this.ui.addToGameLog(initiativeRollText);
}

DndController.prototype.battleEndResult = function (outcome) {
    if (outcome === "win") {
        this.ui.addToGameLog("You won the battle");
    }
    if (outcome === "loss") {
        this.ui.addToGameLog("You lost the battle and died")
    }

    this.ui.enableMovementButtons();
    // ui.clearGameLog();
}

DndController.prototype.enemyAction = function (enemy) {
    let mob = enemy;
    let attackRoll = this.roll(20);
    let attackDamage = this.roll(mob.damage);
// if (mob.get("hp") <= 0) {
//     this.battleEndResult("win");
// }

    if (attackRoll > player.ac) {
        player.hp = player.hp - attackDamage;
        // player.hp -= attackDamage;
        this.ui.addToGameLog("The enemy hits you for ".concat(String(attackDamage), " damage!"));
        this.ui.addToHPLog(player.hp)
    } else {
        this.ui.addToGameLog("The enemy misses you!")
    }
    if (player.hp <= 0) {
        this.battleEndResult("loss");
    }
    this.playerAction();
}


DndController.prototype.playerAttacks = function () {
    let mob = kobold;
    let attackRoll = this.roll(20);
    let attackDamage = this.roll(player.damage);
    // if (player.get("hp") <= 0) {
    //     this.battleEndResult("loss");
    // }
    if (attackRoll > mob.ac) {
        mob.hp = mob.hp - attackDamage;
        this.ui.addToGameLog("You hit the enemy for ".concat(String(attackDamage), " damage!"));
        // ui.addToGameLog(mob.get("hp"))
    } else {
        this.ui.addToGameLog("You miss the enemy!")
    }
    if (mob.hp <= 0) {
        this.battleEndResult("win");
    }

    this.enemyAction(mob);

}

DndController.prototype.battle = function (mob) {
    // mob = mob[0];
    this.ui.disableMovementButtons();
    console.log("this.initiativeRoll: ", this.initiativeRoll);
    this.initiativeRoll(mob[0])
    console.log("player.initiative: ", player.initiative);
    console.log("mob[0].initiative: ", mob[0].initiative);
    if (player.initiative > mob[0].initiative) {
        this.playerAction(mob[0]);
    } else {
        this.enemyAction(mob[0]);
    }
}

DndController.prototype.nextDungeon = function () {
    console.log("level: ", level);
    // dungeon.clearDungeon();
    ++level;
    this.ui.addToGameLog("You've entered the next dungeon!");
    this.x = 0;
    this.y = 0;
    this.ui.addToLocationLog(this.x + "," + this.y);
    this.dungeonLevel(level);
}

DndController.prototype.dungeonEncounter = function (x, y) {
    if (this.dungeon.getMobs(x, y)[0].name === "exit") {
        this.nextDungeon();
    }
    if (this.dungeon.getMobs(x, y)[0].name === "key") {
        player.keys = player.keys + 1;
        this.ui.addToGameLog("You've found a key!");
        this.ui.addToInventoryLog("Keys: " + player.keys);
    }
    if (this.dungeon.getMobs(x, y)[0].name === "kobold") {
        this.ui.addToGameLog("You've encountered a Kobold.");
        this.battle(this.dungeon.getMobs(x, y));
    }
}

DndController.prototype.moveTo = function (newX, newY) {
    console.log("moveTo: " + newX + "," + newY);
    if (this.dungeon.hasRoom(newX, newY)) {
        this.setLocation(newX, newY);
        this.ui.addToLocationLog([newX, newY]);
        if (this.dungeon.getMobs(newX, newY).length !== 0) {
            this.dungeonEncounter(newX, newY)
        }
    } else {
        this.ui.addToLocationLog("Can't go that way");
    }
}

DndController.prototype.northClicked = function () {
    return this.moveTo(this.x, this.y + 1);
};

DndController.prototype.eastClicked = function () {
    return this.moveTo(this.x + 1, this.y);
};

DndController.prototype.southClicked = function () {
    return this.moveTo(this.x, this.y - 1);
};

DndController.prototype.westClicked = function () {
    return this.moveTo(this.x - 1, this.y);
};
