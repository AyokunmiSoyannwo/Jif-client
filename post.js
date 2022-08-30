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
        const commentB = document.createElement("button")
        commentB.textContent = "Leave a comment"
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
            const col1 = document.querySelector(".col1")
            comment.textContent = x
            col1.append(comment)
        })
        reactions.append(commentB)
        reactions.append(e1)
        reactions.append(e2)
        reactions.append(e3)
        // divs[i].append(img)
        div.append(h2)
        div.append(p)
        div.append(reactions)
        col2.append(div)
}



console.log(window.localStorage.getItem('id'))

