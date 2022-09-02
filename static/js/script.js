const helpers = require('./home_helpers')

function genAllCards () {
    console.log("I am running")
    fetch("https://jif-futureproof.herokuapp.com/ipj")
    .then(res => res.json())
    .then(helpers.renderAllCards)
}
helpers.renderAllCards


window.addEventListener("load", genAllCards)

function counter(x,emoji) {
    let y;
    if (x === emoji) {
        y = y+1
    } return y
    }
    
const sort = document.querySelector("#sort")
    
sort.addEventListener("input", () => {
    fetch("https://jif-futureproof.herokuapp.com/ipj")
    .then(res => res.json())
    .then(helpers.sortOrder)
})

helpers.sortOrder



