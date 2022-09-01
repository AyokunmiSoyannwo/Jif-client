const renderDOM = require("./helpers")

let dom;
let document;

describe('searchResults.html', () => {
    beforeEach(async() => {
        dom = await renderDOM('searchResults.html')
        document = await dom.window.document
    })
    test("shows search results text at top of page", () => {
        const title = document.querySelector(".title")
        expect(title.textContent.includes("search results for"))
    })
    test("it has a card holder", () => {
        const cardHolder = document.querySelector(".cardHolder")
        expect(cardHolder).toBeTruthy
    })
})
