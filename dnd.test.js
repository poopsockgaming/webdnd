const dnd = require('./dnd');

//TODO - make tests independent.
//TODO - test run in web page?
//TODO - test text in the text area
//TODO - use real data structure for rooms

test('northClickedMoves', () => {
    expect(dnd.northClicked()).toBe("1,0");
});

test('northClickedDoesNotMove', () => {
    expect(dnd.northClicked()).toBe("Can't go that direction");
});

test('eastClickedDoesNotMove', () => {
    expect(dnd.eastClicked()).toBe("Can't go that direction");
});

test('southClickMoves', () => {
    expect(dnd.southClicked()).toBe("0,0");
});

test('southClickedDoesNotMove', () => {
    expect(dnd.southClicked()).toBe("Can't go that direction");
});

test('eastClickedMoves', () => {
    expect(dnd.eastClicked()).toBe("0,1");
});

test('westClickedMoves', () => {
    expect(dnd.westClicked()).toBe("0,0");
});

test('westClickedDoesNotMove', () => {
    expect(dnd.westClicked()).toBe("Can't go that direction");
});