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
