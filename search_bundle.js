(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./search_helpers":2}],2:[function(require,module,exports){
const cardHolder = document.querySelector(".cardHolder")
const searchTerm = window.location.search
var newWord = searchTerm.slice(searchTerm.search('=')+1)

function renderAllCards (data) {
    window.localStorage.setItem('dataLength',data.length)
    let divs =[];
    let reactionarr = []
    let imagearr = []
    console.log(data.length)
    for (let i=0; i < data.length ; i++) {
        console.log('this is i:'+ i + 'This is id:'+ data[i].id)
        const link = document.createElement("a")
        link.setAttribute("href", "./specificPost.html")
        link.setAttribute("class", "cardlink")
        const div = document.createElement("div")
        div.setAttribute("class", "card")

        var postID = parseInt(data[i].id)
        //window.localStorage.setItem('id', postID);
        console.log(postID)
        divs.push(div)
        divs[i].setAttribute("id", postID)
        divs[i].addEventListener("click", (event) => {

            window.localStorage.setItem('id', event.target.id);
            

        })
        const gif = data[i].gif
        const title = data[i].title
        const text = data[i].text
        const img = document.createElement("img")
        img.setAttribute("class", "image")
        img.src = gif 
        imagearr.push(img)
        imagearr[i].setAttribute("id", postID)
        const h2 = document.createElement("h2")
        h2.setAttribute("id",postID)
        h2.textContent = title
        const p = document.createElement("p")
        p.setAttribute("id",postID)
        p.textContent = text
        const reactions = document.createElement("div")
        reactions.setAttribute("class", "reactions")
        reactionarr.push(reactions)
        reactionarr[i].setAttribute("id", postID)

        divs[i].append(h2)
            divs[i].append(imagearr[i])
            divs[i].append(p)
            divs[i].append(reactionarr[i])
            link.append(divs[i])
            cardHolder.append(link)

        // emoji stuff
        
        const emojis = data[i].emoji;
        console.log(emojis)

       
            const e1Counter = emojis.filter((x) => {
                return x === "&#128077;"
            })
            const e2Counter = emojis.filter((x) => {
                return x === "&#128078;"
            })
            const e3Counter = emojis.filter((x) => {
                return x === "&#129505;"
            })
            
            
            const e1Num = document.createElement('p')
            const e2Num = document.createElement('p')
            const e3Num = document.createElement('p')
            e1Num.setAttribute("class", "emojiCounter")
            e2Num.setAttribute("class", "emojiCounter")
            e3Num.setAttribute("class", "emojiCounter")

            e1Num.textContent = e1Counter.length;
            e2Num.textContent = e2Counter.length;
            e3Num.textContent = e3Counter.length;

            const e1 = document.createElement("button")
            e1.innerHTML = "&#128077;"
            const e2 = document.createElement("button")
            e2.innerHTML = "&#128078;"
            const e3 = document.createElement("button")
            e3.innerHTML = "&#129505;"
            e1.setAttribute("class", "emojibutton")
            e2.setAttribute("class", "emojibutton")
            e3.setAttribute("class", "emojibutton")


            reactionarr[i].append(e1Num)
            reactionarr[i].append(e1)
            reactionarr[i].append(e2Num)
            reactionarr[i].append(e2)
            reactionarr[i].append(e3Num)
            reactionarr[i].append(e3)
            
           
            divs[i].append(reactionarr[i])


}
}

function check (data) {
    if (newWord ) {
    const results = data.filter((x) => (x.title.toLowerCase()).includes(newWord.toLowerCase()))
    renderAllCards(results)
    } else {
        alert("please search something")
    }}

module.exports = {
    check
}

},{}]},{},[1]);
