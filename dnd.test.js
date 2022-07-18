
gameLog = "";
MockUI = {};
MockUI.name = "Mock UI";
MockUI.addToGameLog = function (message) {
    gameLog += message;
}

let dnd = DndController;

describe('DND', () => {

    beforeEach(() => {
        dnd.setUI(MockUI);
        gameLog = "";
    })

    it("mockNorth[0,0]", () => {
        dnd.northClicked(0, 0);
        // test location
        expect(gameLog).toEqual("1,0");
    })

    // it("mockNorth[1,0]", () => {
    //     dnd.ui = MockUI;
    //     dnd.setUI(MockUI);
    //     //console.log(dnd.ui);
    //     dnd.northClicked(1, 0);
    //     expect(gameLog).toEqual("Can't go that direction");
    // })
    //
    // it("mockEast[0,0]", () => {
    //     dnd.ui = MockUI;
    //     dnd.setUI(MockUI);
    //     dnd.eastClicked(0, 0);
    //     expect(gameLog).toEqual("0,1");
    // })
    //
    // it("mockEast[0,3]", () => {
    //     dnd.ui = MockUI;
    //     dnd.setUI(MockUI);
    //     dnd.eastClicked(0, 3);
    //     expect(gameLog).toEqual("Can't go that direction");
    // })
    //
    // it("mockSouth[0,0]", () => {
    //     dnd.ui = MockUI;
    //     dnd.setUI(MockUI);
    //     dnd.southClicked(0, 0);
    //     expect(gameLog).toEqual("Can't go that direction");
    // })
    //
    // it("mockSouth[1,0]", () => {
    //     dnd.ui = MockUI;
    //     dnd.setUI(MockUI);
    //     dnd.southClicked(1, 0);
    //     expect(gameLog).toEqual("0,0");
    // })
    //
    // it("mockWest[0,1]", () => {
    //     dnd.ui = MockUI;
    //     dnd.setUI(MockUI);
    //     dnd.westClicked(0, 1);
    //     expect(gameLog).toEqual("0,0");
    // })
    //
    // it('northClickedDoesNotMove', () => {
    //     expect(dnd.northClicked()).toBe("Can't go that direction");
    // });
    //
    // it('eastClickedDoesNotMove', () => {
    //     expect(dnd.eastClicked()).toBe("Can't go that direction");
    // });
    //
    // it('southClickMoves', () => {
    //     expect(dnd.southClicked()).toEqual([0, 0]);
    // });
    //
    // it('southClickedDoesNotMove', () => {
    //     expect(dnd.southClicked()).toBe("Can't go that direction");
    // });
    //
    // it('eastClickedMoves', () => {
    //     expect(dnd.eastClicked()).toEqual([0, 1]);
    // });
    //
    // it('westClickedMoves', () => {
    //     expect(dnd.westClicked()).toEqual([0, 0]);
    // });
    //
    // it('westClickedDoesNotMove', () => {
    //     expect(dnd.westClicked()).toBe("Can't go that direction");
    // });

});