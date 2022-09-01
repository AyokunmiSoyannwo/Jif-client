const div = document.querySelector(".newEntry")
const newJournal = document.querySelector("#new-journal-form")
const cardDiv = document.querySelector(".card")

newJournal.addEventListener('submit', postEntry)

function appendEntry(journalData){
    // const newHeader = document.createElement('h2');
    // newHeader.textContent = journalData.title
    // console.log(`This is ${journalData.title}`)
    // const newp = document.createElement('p');
    // newp.textContent = journalData.text;
    // div.append(newHeader);
    // div.append(newp);
    alert('Your post has been added')

    



};

function postEntry(e){
    

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
    fetch('http://localhost:3000/ipj',options)
        .then(r => r.json())
        .then(appendEntry)
        .catch(console.warn)
};

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


// --------------------- SERACH GIF ------------------//
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
        console.log(selection)
        
    })
    console.log("I'm clicked")
    var selection = document.querySelector('#selection');
    selection.src = e.target.src
    var gif = document.querySelector('#gif');
    gif.inputValue = e.target.src
    console.log(gif.inputValue)
}

