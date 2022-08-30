(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const body = document.querySelector("body")
const cardHolder = document.querySelector(".cardHolder")

function genAllCards () {
    console.log("I am running")
        fetch("http://localhost:3000/ipj")
        .then(res => res.json())
        .then(renderAllCards)
    }

function renderAllCards (data) {
    let divs =[];
    for (let i=0; i < data.length ; i++) {
        const link = document.createElement("a")
        link.setAttribute("href", "./specificPost.html")
        const div = document.createElement("div")
        div.setAttribute("class", "card")
        const postID = (data[i].id).toString()
        divs.push(div)
        divs[i].setAttribute("id", postID)
        divs[i].addEventListener("click", () => {
            module.exports = divs[i].getAttribute("id")
        })
        const gif = (data[i].gif).toString()
        const title = data[i].title
        const text = data[i].text
        // const img = document.createElement("img")
        // img.setAttribute("class", "image")
        // img.setAttribute("src" `${gif}`)
        const h2 = document.createElement("h2")
        h2.textContent = title
        const p = document.createElement("p")
        p.textContent = text
        const reactions = document.createElement("div")
        reactions.setAttribute("class", "reactions")
        const commentB = document.createElement("button")
        commentB.textContent = "Leave a comment"
        const e1 = document.createElement("button")
        e1.innerHTML = "&#128077;"
        const e2 = document.createElement("button")
        e2.innerHTML = "&#128078;"
        const e3 = document.createElement("button")
        e3.innerHTML = "&#129505;"
        reactions.append(commentB)
        reactions.append(e1)
        reactions.append(e2)
        reactions.append(e3)
        // divs[i].append(img)
        divs[i].append(h2)
        divs[i].append(p)
        divs[i].append(reactions)
        link.append(divs[i])
        cardHolder.append(link)
//         cards.forEach(card => card.addEventListener("click", () => {
//             const postID = card.getAttribute("id")
//             console.log(postID)
//             module.exports= postID
//         }))
}
}
window.addEventListener("load", genAllCards)





},{}]},{},[1]);
