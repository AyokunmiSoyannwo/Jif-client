/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8") 

describe("home page", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();  //beforeEach can be used if an action needs to be repeated before each test
    })
    it('h1 shows "Featured" when website loads', () => {
        const h1 = document.querySelector('h1');
        expect(h1.innerHTML).toBe("Welcome to Jif")
      })

    describe("Nav bar", () => {  //usually the first test is to that the object exists, i can use expect(object).toBeTruthy(); to do this

        test("it has a navbar", () => {
            let navbar = document.querySelector("nav")
            expect(navbar).toBeTruthy()
        })

        test("it has a searchbar", () => {
            let serachbar = document.querySelector("searchbar")
            expect(searchbar).toBeTruthy()
        })

        test("it has navButtons class", () => {
            let navButtons = document.getElementsByClassName("navButton")
            expect(navButtons).toBeTruthy()
        })

    })

    describe('Card Holder', () => {
        test("it has a card holder", () => {
            let cardHolder = document.getElementsByClassName("cardHolder")
            expect(cardHolder).toBeTruthy()
        })
    })

    describe('Individual Card', () => {
        test("it has a card div", () => {
            let cardDiv = document.getElementsByClassName("card")
            expect(cardDiv).toBeTruthy()
        })

        test("it has a H2 title", () => {
            let h2 = document.getElementsByTagName("h2")[1]
            expect(h2.innerHTML).toBe('title')
        })

        test("it has a paragraph", () => {
            let cardText = document.getElementsByClassName("cardText")[1]
            expect(cardText.innerHTML).toBeTruthy
        })

        test("it has 3 reaction buttons", () => {
            let cardText = document.getElementsByClassName("reactions")[1]
            expect(cardText.getElementsByTagName("button").length).toBe(3)
        })
    })
    })


describe('Specific Post.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    test('card loads when window is loaded', () => {
        const card = document.querySelector(".card")
        // const commentTextbox = document.querySelector("#comment")
        window.dispatchEvent(new Event('load'))
        const image = document.querySelector("img")
        expect(image).toBe('true')
    })
})
