const script = require("./script")
const postID = script.postID
const renderAllCards = script.renderAllCards

window.addEventListener("load", () => {
    fetch(`http://localhost:3000/ipj/${postID}`)
    .then(res=>res.json)
    .then(renderAllCards)
})

