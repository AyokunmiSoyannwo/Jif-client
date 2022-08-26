/**
 * @jest-environnment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8") 

describe("webpage", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();  //beforeEach can be used if an action needs to be repeated before each test
    })

    describe("main page", () => {  //usually the first test is to that the object exists, i can use expect(object).toBeTruthy(); to do this

        test("it has a navbar", () => {
            let navbar = document.querySelector("nav")
            expect(navbar).toBeTruthy()
        })

    })
})
