const dnd = require('./dnd');

//TODO - make tests independent.
//TODO - test run in web page?
//TODO - test text in the text area
//TODO - use real data structure for rooms

gameLog = "";
MockUI = {};
MockUI.addToGameLog = function (message) {
    gameLog += message;
}

describe('DND', () => {
    beforeAll(async () => {
        await page.goto('file:////Users/calebmooi/projects/webdnd/index.html');
    });

    // test('northClickedMoves', async () => {
    //     var result = await page.evaluate(() => northClicked());
    //     expect(result).toEqual([1, 0]);
    //     var log = await page.evaluate(() => document.getElementById("text_area").value);
    //     expect(log).toContain("1,0");
    // });

    test("mock", () => {
        dnd.ui = MockUI;
        //MockUI.addToGameLog("goo");
        //dnd.northClicked(MockUI);
        //expect(gameLog).toEqual([1, 0]);
        expect(dnd.northClicked(MockUI)).toEqual([1, 0]);
    })

    // test('northClickedDoesNotMove', () => {
    //     expect(dnd.northClicked()).toBe("Can't go that direction");
    // });
    //
    // test('eastClickedDoesNotMove', () => {
    //     expect(dnd.eastClicked()).toBe("Can't go that direction");
    // });
    //
    // test('southClickMoves', () => {
    //     expect(dnd.southClicked()).toEqual([0, 0]);
    // });
    //
    // test('southClickedDoesNotMove', () => {
    //     expect(dnd.southClicked()).toBe("Can't go that direction");
    // });
    //
    // test('eastClickedMoves', () => {
    //     expect(dnd.eastClicked()).toEqual([0, 1]);
    // });
    //
    // test('westClickedMoves', () => {
    //     expect(dnd.westClicked()).toEqual([0, 0]);
    // });
    //
    // test('westClickedDoesNotMove', () => {
    //     expect(dnd.westClicked()).toBe("Can't go that direction");
    // });

});