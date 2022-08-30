/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8") 

describe("webpage", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();  //beforeEach can be used if an action needs to be repeated before each test
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
            console.log(cardText.innerHTML)
            expect(cardText.innerHTML).toBeTruthy
        })
    })
})
