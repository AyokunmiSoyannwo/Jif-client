const body = document.querySelector("body")
const cardHolder = document.querySelector(".cardHolder")
const searchbar = document.querySelector("#searchbar")

function genAllCards () {
    console.log("I am running")
    fetch("http://localhost:3000/ipj")
    .then(res => res.json())
    .then(renderAllCards)
}

function renderAllCards (data) {
    let divs =[];
    let reactionarr = []
    let imagearr = []
    console.log(data.length)
    for (let i=0; i < data.length ; i++) {
        console.log('this is i:'+ i + 'This is id:'+ data[i].id)
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
        img.src = gif 
        imagearr.push(img)
        imagearr[i].setAttribute("id", postID)
        const h2 = document.createElement("h2")
        h2.setAttribute("id",postID)
        h2.textContent = title
        const p = document.createElement("p")
        p.setAttribute("id",postID)
        p.textContent = text
        // const reactions = document.createElement("div")
        // reactions.setAttribute("class", "reactions")
        // reactionarr.push(reactions)
        // reactionarr[i].setAttribute("id", postID)

        divs[i].append(h2)
            divs[i].append(imagearr[i])
            divs[i].append(p)
            // divs[i].append(reactionarr[i])
            link.append(divs[i])
            cardHolder.append(link)

        // emoji stuff
        
        const emojis = data[i].emoji;
        console.log(emojis)

        if(emojis){
            const e1Counter = emojis.filter((x) => {
                return x === "&#128077;"
            })
            const e2Counter = emojis.filter((x) => {
                return x === "&#128078;"
            })
            const e3Counter = emojis.filter((x) => {
                return x === "&#129505;"
            })
            
            const reactions = document.createElement("div")
            reactions.setAttribute("class", "reactions")
            reactionarr.push(reactions)
            reactionarr[i].setAttribute("id", postID)

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
            
            reactions.append(e1Num)
            reactions.append(e1)
            reactions.append(e2Num)
            reactions.append(e2)
            reactions.append(e3Num)
            reactions.append(e3)
            divs[i].append(reactionarr[i])
           
        } else {

            const reactions = document.createElement("div")
            reactions.setAttribute("class", "reactions")
            reactionarr.push(reactions)
            reactionarr[i].setAttribute("id", postID)

            const e1Num = document.createElement('p')
            const e2Num = document.createElement('p')
            const e3Num = document.createElement('p')
            e1Num.setAttribute("class", "emojiCounter")
            e2Num.setAttribute("class", "emojiCounter")
            e3Num.setAttribute("class", "emojiCounter")

            e1Num.textContent = 0;
            e2Num.textContent = 0;
            e3Num.textContent = 0;

           
            const e1 = document.createElement("button")
            e1.innerHTML = "&#128077;"
            const e2 = document.createElement("button")
            e2.innerHTML = "&#128078;"
            const e3 = document.createElement("button")
            e3.innerHTML = "&#129505;"
            
            reactionarr[i].append(e1Num)
            reactionarr[i].append(e1)
            reactionarr[i].append(e2Num)
            reactionarr[i].append(e2)
            reactionarr[i].append(e3Num)
            reactionarr[i].append(e3)
            divs[i].append(reactionarr[i])
        }
        // divs[i].append(img)
        

}
}
window.addEventListener("load", genAllCards)


