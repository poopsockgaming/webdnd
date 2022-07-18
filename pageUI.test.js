// TODO - research Model View Controller pattern

let buttonsClicked = [];

let MockController = {}
MockController.northClicked = function (e) {
    buttonsClicked.add("north");
}

let iframe = null;

describe('PageUI', () => {
    // beforeEach( async () => {
    //     // await page.goto('file:////Users/calebmooi/projects/webdnd/index.html');
    //     PageUI.controller = MockController;
    //     // let selector = async function (selector) { await page.$selector(selector); }
    //     // console.log("selector:", selector);
    //     // PageUI.wire(selector);
    //     iframe = document.createElement("iframe");
    //     iframe.src = "file:///Users/calebmooi/projects/webdnd/index.html";
    //     document.body.appendChild(iframe);
    //     let boogie = new Promise(() => {
    //         if(iframe.contentDocument.readyState == "complete") {
    //
    //         };
    //     )
    // });
    //
    // afterEach(() => {
    //     // iframe.remove();
    // })
    //
    // it('clicking North', () => {
    //     let button = iframe.contentDocument.querySelector("#north_button");
    //     console.log("button: ", button);
    //     console.log("iframe.contentDocument: ", iframe.contentDocument);
    //     button.click();
    //     expect(buttonsClicked[0]).toEqual("north");
    // });

    // // test('eastClickedMoves', async () => {
    // //     // page.reload();
    // //     var result = await page.evaluate(() => eastClicked());
    // //     expect(result).toEqual([0, 1]);
    // //     var log = await page.evaluate(() => document.getElementById("text_area").value);
    // //     expect(log).toContain("0,1");
    // // });

    // test('nothing', async () => {
    // });
});