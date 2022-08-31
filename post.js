const commentBtn = document.querySelector("#btncomment")
const addComment = document.querySelector("#postBtn")
const commentTextbox = document.querySelector("#comment")
const commentForm = document.querySelector("#commentForm")

window.addEventListener("load", (req,res) => {
    ID = window.localStorage.getItem('id')
    fetch(`http://localhost:3000/ipj/${ID}`)
    .then(res => res.json())
    .then(renderCard)

})



function renderCard (data) {
    const col2 = document.querySelector(".col2")
    const div = document.createElement("div")
        div.setAttribute("class", "card")
        const postID = (data.id).toString()
        div.setAttribute("id", postID)
        const gif = (data.gif).toString()
        const title = data.title
        const text = data.text
        // const img = document.createElement("img")
        // img.setAttribute("class", "image")
        // img.setAttribute("src" `${gif}`)
        const h2 = document.createElement("h2")
        h2.textContent = title
        const p = document.createElement("p")
        p.textContent = text
        const reactions = document.createElement("div")
        reactions.setAttribute("class", "reactions")
        // const commentB = document.createElement("button")
        // commentB.textContent = "Leave a comment"
        // commentB.setAttribute("id","comment-button")
        const e1 = document.createElement("button")
        e1.innerHTML = "&#128077;"
        const e2 = document.createElement("button")
        e2.innerHTML = "&#128078;"
        const e3 = document.createElement("button")
        e3.innerHTML = "&#129505;"
        const comments = data.comment;
        console.log(comments)
        comments.forEach((x) => {
            const comment = document.createElement("p")
            comment.setAttribute("class", "comments")
            const col1 = document.querySelector(".col1")
            comment.textContent = x
            col1.append(comment)
        })
        // reactions.append(commentB)
        reactions.append(e1)
        reactions.append(e2)
        reactions.append(e3)
        // divs[i].append(img)
        div.append(h2)
        div.append(p)
        div.append(reactions)
        col2.append(div)
}

function makeCommentAppear(){
    commentTextbox.removeAttribute("hidden")
    addComment.removeAttribute("hidden")
    
    commentBtn.setAttribute("hidden", "hidden")
}

commentBtn.addEventListener("click", makeCommentAppear)


// console.log(window.localStorage.getItem('id'))

commentForm.addEventListener('submit', postComment)

function postComment(e){
    e.preventDefault();

    const newComment = {
        id: window.localStorage.getItem('id'),
        comment: e.target.comment.value
    };
    console.log(newComment)
    const options = { 
        method: 'POST',
        body:JSON.stringify(newComment),
        headers: {
            // Accept: 'application.json',
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log(options.body)
    fetch('http://localhost:3000/comment',options)
        .then(r => r.text())
        .then(addNewComment)
        .catch(console.warn)
};

function addNewComment(data){
    const comment = document.createElement("p")
    comment.setAttribute("class", "comments")
    const col1 = document.querySelector(".col1")
    comment.textContent = data
    col1.append(comment)
}

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
