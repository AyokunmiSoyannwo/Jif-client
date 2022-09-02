const search_helpers = require('./search_helpers')
window.addEventListener("load", searchFunc)
const searchTerm = window.location.search
var newWord = searchTerm.slice(searchTerm.search('=')+1)

function searchFunc () {
    console.log("searching")
    fetch("https://jif-futureproof.herokuapp.com/ipj")
    .then(res => res.json())
    .then(search_helpers.check)
}


const title = document.querySelector(".title")

window.addEventListener("load", () => {
    title.textContent = `Search results for "${newWord}"`
})
