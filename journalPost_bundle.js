(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const newJournal = document.querySelector("#new-journal-form")

const journalPost_helpers = require('./journalPost_helpers')

newJournal.addEventListener('submit', journalPost_helpers.postEntry)

const title = document.querySelector("#titleInput")
const ptitle = document.querySelector("#titleLength")

title.addEventListener("input", () => {
    const messageLength = parseInt(title.value.length)
    ptitle.textContent = `${messageLength}/30`
    
})

const textarea = document.querySelector("#textInput")
const p = document.querySelector("#messageLength")

textarea.addEventListener("input", () => {
    const messageLength = parseInt(textarea.value.length)
    p.textContent = `${messageLength}/300`
    
})

journalPost_helpers.getUserInput,
journalPost_helpers.displayResults

},{"./journalPost_helpers":2}],2:[function(require,module,exports){
const div = document.querySelector(".newEntry")

const cardDiv = document.querySelector(".card")

function appendEntry(){
    console.log('posting!')
    const newJournal = document.querySelector("#new-journal-form")
    
    alert('Your post has been added')
    location = "https://its-pronounced-jif.netlify.app";
    
};




function postEntry(e){
       e.preventDefault();
        
    
        const journalData = {
            title: e.target.titleInput.value,
            text: e.target.textInput.value,
            gif: e.target.gif.inputValue
            
        };
        console.log(journalData)
        const options = { 
            method: 'POST',
            body: JSON.stringify(journalData),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch('https://jif-futureproof.herokuapp.com/ipj',options)
            .then(r => r.json())
            .then(appendEntry)
            .catch(console.warn)
    };
    



function getUserInput() {
    var inputValue = document.querySelector('.js-userinput').value;
    return inputValue;
}

document.querySelector('.search').addEventListener('click', function () {
    var inputValue = document.querySelector('.js-userinput').value;
    var userInput = getUserInput();
    searchGiphy(userInput)
})

document.querySelector(".js-userinput").addEventListener("keyup", e => {
    if (e.which === 13){
        var userInput = getUserInput();
        searchGiphy(userInput);
    }
})

function searchGiphy (searchQuery){
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=df1eFJpWqUNTLxpPJKHU82efGhRLon6J&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(displayResults)
}

function displayResults(response){
    var img = response.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = "";
    img.forEach(function (image) {
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src='" 
          + src + "' class='container-image' />";
        container.addEventListener('click', displaySelection)
      });   
}


function displaySelection(e){
    selectImg = document.querySelector(".container-image")
    selectImg.addEventListener('click', e => {
        selection = e.getAttribute('src')
    })
    console.log("I'm clicked")
    var selection = document.querySelector('#selection');
    selection.src = e.target.src
    var gif = document.querySelector('#gif');
    gif.inputValue = e.target.src
}



module.exports = {
    postEntry,
    getUserInput,
    displayResults
}

},{}]},{},[1]);
