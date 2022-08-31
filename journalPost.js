const div = document.querySelector(".newEntry")
const newJournal = document.querySelector("#new-journal-form")

newJournal.addEventListener('submit', postEntry)

function appendEntry(journalData){
    console.log(journalData)
    console.log('printing entry')
    const newHeader = document.createElement('h2');
    newHeader.textContent = journalData.title
    console.log(`This is ${journalData.title}`)
    const newp = document.createElement('p');
    newp.textContent = journalData.text;
    div.append(newHeader);
    div.append(newp);


};

function postEntry(e){
    e.preventDefault();

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
