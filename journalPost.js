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
        text: e.target.textInput.value
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

const searchbar = document.querySelector("#searchbar")

searchbar.addEventListener("search", searchFunc )

function searchFunc () {
    console.log("searching")
    fetch("http://localhost:3000/ipj")
    .then(res => res.json())
    .then(check)
}

function removeAllCards () {
    const cards = document.querySelectorAll(".card")
    cards.forEach(card => card.remove())
}


function check (data) {
    if (searchbar.value ) {
    const results = data.filter((x) => (x.title.toLowerCase()).includes(searchbar.value.toLowerCase()))
    removeAllCards(); 
    renderAllCards(results)
    } else {
        alert("please search something")
    }}
