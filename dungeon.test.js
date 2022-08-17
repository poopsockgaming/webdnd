// let dungeon = null;

describe("dungeon", () => {
    beforeEach(() => {
        this.dungeon = new Dungeon();
    })

    it("empty", () => {
        expect(this.dungeon.getRoomCount()).toEqual(0);
    })

    it("one room", () => {
        this.dungeon.addRoom(0, 1);
        expect(this.dungeon.getRoomCount()).toEqual(1);
        expect(this.dungeon.hasRoom(0, 0)).toEqual(false);
        expect(this.dungeon.hasRoom(0, 1)).toEqual(true);
    })

    it("two rooms", () => {
        this.dungeon.addRoom(0, 1);
        this.dungeon.addRoom(0, 2);
        expect(this.dungeon.getRoomCount()).toEqual(2);
        expect(this.dungeon.hasRoom(0, 0)).toEqual(false);
        expect(this.dungeon.hasRoom(0, 1)).toEqual(true);
        expect(this.dungeon.hasRoom(0, 2)).toEqual(true);
    })

    it("place mob", () => {
        this.dungeon.addRoom(0, 1);
        this.dungeon.placeMob(0, 1, kobold);

        expect(this.dungeon.getMobs(0, 1)).toEqual([kobold]);
    })

    it("gets room key", () => {
        this.dungeon.addRoom(0, 1); //todo    actually add key
        expect(this.dungeon.roomKey(0, 1)).toEqual("0,1");
    })

    it("clears dungeon rooms", () => {
        this.dungeon.rooms = new Map([
            ["1", 1],
            ["2", 2],
            ["3", 3]
        ]);
        this.dungeon.clearDungeon();
        expect(this.dungeon.rooms.size).toBe(0);
    })
})