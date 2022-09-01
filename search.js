const searchTerm = window.location.search
var newWord = searchTerm.slice(searchTerm.search('=')+1)
const cardHolder = document.querySelector(".cardHolder")

window.addEventListener("load", searchFunc)

function searchFunc () {
    console.log("searching")
    fetch("http://localhost:3000/ipj")
    .then(res => res.json())
    .then(check)
}

function check (data) {
    if (newWord ) {
    const results = data.filter((x) => (x.title.toLowerCase()).includes(newWord.toLowerCase()))
    renderAllCards(results)
    } else {
        alert("please search something")
    }}

    function renderAllCards (data) {
        let divs =[];
        for (let i=0; i < data.length ; i++) {
            const link = document.createElement("a")
            link.setAttribute("href", "./specificPost.html")
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
            img.src =gif
            const h2 = document.createElement("h2")
            h2.setAttribute("id",postID)
            h2.textContent = title
            const p = document.createElement("p")
            p.setAttribute("id",postID)
            p.textContent = text
            const reactions = document.createElement("div")
            reactions.setAttribute("class", "reactions")
            const e1 = document.createElement("button")
            e1.innerHTML = "&#128077;"
            const e2 = document.createElement("button")
            e2.innerHTML = "&#128078;"
            const e3 = document.createElement("button")
            e3.innerHTML = "&#129505;"
            reactions.append(e1)
            reactions.append(e2)
            reactions.append(e3)
            divs[i].append(h2)
            divs[i].append(img)
            divs[i].append(p)
            divs[i].append(reactions)
            link.append(divs[i])
            cardHolder.append(link)
    
    }
    }
const title = document.querySelector(".title")

window.addEventListener("load", () => {
    title.textContent = `Search results for "${newWord}"`
})
