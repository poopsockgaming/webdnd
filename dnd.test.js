MockUI = function () {
    this.locationLog = "";
    this.gameLog = "";
    this.hpLog = "";
    this.inventoryLog = "";
    this.movementButtonsEnabled = true;
};
MockUI.prototype.name = "Mock UI";
ui = {};

MockUI.prototype.setMovementButtonsEnabled = function (enabled) {
    this.movementButtonsEnabled = enabled
};
MockUI.prototype.enableMovementButtons = function () {
};
MockUI.prototype.disableMovementButtons = function () {
};

MockUI.prototype.addToLocationLog = function (message) {
    this.locationLog += message;
}

MockUI.prototype.addToGameLog = function (message) {
    this.gameLog += message;
}

MockUI.prototype.addToHPLog = function (message) {
    this.hpLog += message;
}

MockUI.prototype.addToInventoryLog = function (message) {
    this.inventoryLog += message;
}

describe('DND', () => {

    beforeEach(() => {
        this.dungeon = new Dungeon();
        this.dungeon.addRoom(0, 0);
        this.dungeon.addRoom(1, 0);
        this.dungeon.addRoom(0, 1);
        this.dungeon.addRoom(0, 2);
        this.dungeon.addRoom(0, 3);
        // DndController.prototype.dungeonLevel();
        this.ui = new MockUI();

        this.dnd = new DndController(this.dungeon, this.ui);

        // let player = {
        //     hp: 10,
        //     ac: 10,
        //     damage: 3,
        //     initiative: 0
        // };
        // let kobold = {
        //     name: "kobold",
        //     hp: 5,
        //     ac: 10,
        //     damage: 2,
        //     initiative: 0
        // };

    })

    it("mockNorth[0,0]", () => {
        this.dnd.northClicked();
        expect(this.ui.locationLog).toEqual("0,1");
        expect(this.dnd.getLocation()).toEqual([0, 1]);
    })

    it("mockNorth[1,0]", () => {
        this.dnd.setLocation(1, 0);
        this.dnd.northClicked();
        expect(this.ui.locationLog).toEqual("Can't go that way");
        expect(this.dnd.getLocation()).toEqual([1, 0]);
    })

    it("mockEast[0,0]", () => {
        this.dnd.eastClicked();
        expect(this.ui.locationLog).toEqual("1,0");
        expect(this.dnd.getLocation()).toEqual([1, 0]);
    })

    it("mockEast[0,3]", () => {
        this.dnd.setLocation(0, 3);
        this.dnd.eastClicked();
        expect(this.ui.locationLog).toEqual("Can't go that way");
        expect(this.dnd.getLocation()).toEqual([0, 3]);
    })

    it("mockSouth[0,0]", () => {
        this.dnd.setLocation(0, 0);
        this.dnd.southClicked();
        expect(this.ui.locationLog).toEqual("Can't go that way");
        expect(this.dnd.getLocation()).toEqual([0, 0]);
    })

    it("mockSouth[0,1]", () => {
        this.dnd.setLocation(0, 1);
        this.dnd.southClicked();
        expect(this.ui.locationLog).toEqual("0,0");
        expect(this.dnd.getLocation()).toEqual([0, 0]);
    })

    it("mockWest[1,0]", () => {
        this.dnd.setLocation(1, 0);
        this.dnd.westClicked();
        expect(this.ui.locationLog).toEqual("0,0");
        expect(this.dnd.getLocation()).toEqual([0, 0]);
    })

    it("mockWest[0,0]", () => {
        this.dnd.setLocation(0, 0);
        this.dnd.westClicked();
        expect(this.ui.locationLog).toEqual("Can't go that way");
        expect(this.dnd.getLocation()).toEqual([0, 0]);
    })

    describe("with kobold", () => {
        beforeEach(() => {
            this.dungeon.placeMob(0, 1, kobold);
        })
        it("battle encounter", () => {
            // Build
            // this.dungeon.placeMob(0, 1, kobold);
            // Operate
            this.dnd.northClicked();  // consider rename dnd.moveNorth();
            // Check
            expect(this.ui.gameLog).toContain("You've encountered a Kobold.")
        })

        // it("battle disabled movement buttons", () => {
        //     expect(1).toEqual(2);
        // })

        it("initiative roll", () => {
            this.dnd.roll = function () {
                return 5
            };
            this.dnd.northClicked();
            expect(this.ui.gameLog).toContain("You roll a " + 5 + " and your enemy rolls " + 5);
        })

        it("player action", () => {
            this.dnd.northClicked();
            expect(this.ui.gameLog).toContain("What will you do?");
        })

        it("player loses battle", () => {
            player.hp = 0;
            this.dnd.initiativeRoll = function () {
                player.initiative = 0;
            }
            this.dnd.northClicked();
            expect(this.ui.gameLog).toContain("You lost the battle and died");
        })

        it("player wins battle", () => {
            this.dnd.roll = function () {
                return 11;
            }
            this.dnd.initiativeRoll = function () {
                return player.initiative = 21;
            }
            this.dnd.northClicked();
            this.dnd.playerAttacks();
            expect(this.ui.gameLog).toContain("You won the battle");
            this.dnd.battleEndResult("win");
            expect(this.ui.gameLog).toContain("You won the battle");
        })

        it("player attacks and hits", () => {
            this.dnd.roll = function () {
                return 11;
            }
            this.dnd.initiativeRoll = function () {
                return player.initiative = 21;
            }
            this.dnd.northClicked();
            this.dnd.playerAttacks();
            expect(this.ui.gameLog).toContain("You hit the enemy for 11 damage!");
        })


        it("enemy attacks and hits", () => {
            this.dnd.roll = function () {
                return 11;
            }
            this.dnd.initiativeRoll = function () {
                return kobold.initiative = 21;
            }
            this.dnd.northClicked();
            this.dnd.playerAttacks();
            expect(this.ui.gameLog).toContain("The enemy hits you for 11 damage!");
        })
    })

    it("dungeonLevel1 size", () => {
        let level = 1;
        DndController.prototype.dungeonLevel(level);
        expect(dungeon.rooms.size).toBe(5);
    })

    it("dungeonLevel2 size", () => {
        let level = 2;
        DndController.prototype.dungeonLevel(level);
        expect(dungeon.rooms.size).toBe(6);
    })

    it("dungeonLevel3 size", () => {
        let level = 3;
        DndController.prototype.dungeonLevel(level);
        expect(dungeon.rooms.size).toBe(8);
    })


    it("dungeon place exit", () => {
        this.dnd.nextDungeon();
        expect(level).toBe(2)
        expect(this.ui.gameLog).toContain("You've entered the next dungeon!")
    })

    it("finding key", () => {
        this.dungeon.addRoom(0, 0);
        this.dungeon.addRoom(1, 0);
        this.dungeon.placeMob(1, 0, {name: "key"});
        this.dnd.eastClicked();
        expect(this.ui.gameLog).toBe("You've found a key!");
        expect(this.ui.inventoryLog).toBe("Keys: 1");
    })

    
    
});