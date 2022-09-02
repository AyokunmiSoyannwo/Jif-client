const body = document.querySelector("body")
const cardHolder = document.querySelector(".cardHolder")
const searchbar = document.querySelector("#searchbar")

function renderAllCards (data) {
    window.localStorage.setItem('dataLength',data.length)
    let divs =[];
    let reactionarr = []
    let imagearr = []
    for (let i=0; i < data.length ; i++) {
        console.log('this is i:'+ i + 'This is id:'+ data[i].id)
        const link = document.createElement("a")
        link.setAttribute("href", "./specificPost.html")
        link.setAttribute("class", "cardlink")
        const div = document.createElement("div")
        div.setAttribute("class", "card")

        var postID = parseInt(data[i].id)
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
        const reactions = document.createElement("div")
        reactions.setAttribute("class", "reactions")
        reactionarr.push(reactions)
        reactionarr[i].setAttribute("id", postID)

        divs[i].append(h2)
            divs[i].append(imagearr[i])
            divs[i].append(p)
            divs[i].append(reactionarr[i])
            link.append(divs[i])
            cardHolder.append(link)

        // emoji stuff
        
        const emojis = data[i].emoji;

       
            const e1Counter = emojis.filter((x) => {
                return x === "&#128077;"
            })
            const e2Counter = emojis.filter((x) => {
                return x === "&#128078;"
            })
            const e3Counter = emojis.filter((x) => {
                return x === "&#129505;"
            })
            
            
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


            reactionarr[i].append(e1Num)
            reactionarr[i].append(e1)
            reactionarr[i].append(e2Num)
            reactionarr[i].append(e2)
            reactionarr[i].append(e3Num)
            reactionarr[i].append(e3)
            
           
            divs[i].append(reactionarr[i])


}
}

function sortOrder (data2) {
    let sorted = []
    let thumbsU = []
    let thumbsD = []
    let h = []
    if (sort.value === "thumbsup") {
    for (let i=0; i < data2.length; i++) {
        const emojis = data2[i].emoji;
        console.log(emojis)       
        const e1Counter = emojis.filter((x) => {
            return x === "&#128077;"
        })
        thumbsU.push({id: i, number: e1Counter.length})
        console.log(thumbsU)
    }
    
    thumbsU.sort((a, b) => {
        return b.number - a.number
    })
    
    thumbsU.forEach((e) => {
        sorted.push(e.id)
    })
} else if (sort.value === "thumbsdown") {
    for (let i=0; i < data2.length; i++) {
        const emojis = data2[i].emoji;
        console.log(emojis)       
        const e2Counter = emojis.filter((x) => {
            return x === "&#128078;"
        })
        thumbsD.push({id: i, number: e2Counter.length})
        console.log(thumbsD)
    }
    
    thumbsD.sort((a, b) => {
        return b.number - a.number
    })
    
    thumbsD.forEach((e) => {
        sorted.push(e.id)
    }) 
} else if (sort.value=== "heart"){
    for (let i=0; i < data2.length; i++) {
        const emojis = data2[i].emoji;
        console.log(emojis)       
        const e3Counter = emojis.filter((x) => {
            return x === "&#129505;"
        })
        h.push({id: i, number: e3Counter.length})
        console.log(h)
    }
    
    h.sort((a, b) => {
        return b.number - a.number
    })
    
    h.forEach((e) => {
        sorted.push(e.id)
    }) 
} else{
    for(let i =0; i < data2.length ; i++){
        sorted.push(i)
    }
    
}
    
    const links = document.querySelectorAll(".cardlink")
    links.forEach(x => x.remove())
        let data =[]
        for (let i =0; i < data2.length ; i++) {
            console.log(sorted)
            data.push(data2[sorted[i]])
        }
        console.log(data)
        let divs =[];
            let reactionarr = []
            let imagearr = []
            console.log(data.length)
            for (let i=0; i < data.length ; i++) {
                const link = document.createElement("a")
                link.setAttribute("href", "./specificPost.html")
                link.setAttribute("class", "cardlink")
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
            const reactions = document.createElement("div")
            reactions.setAttribute("class", "reactions")
            reactionarr.push(reactions)
            reactionarr[i].setAttribute("id", postID)
            
            divs[i].append(h2)
            divs[i].append(imagearr[i])
            divs[i].append(p)
            divs[i].append(reactionarr[i])
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
                divs[i].append(reactions)
            } 
            // else {
            }
            //     const e1Num = document.createElement('p')
            //     const e2Num = document.createElement('p')
            //     const e3Num = document.createElement('p')
            //     e1Num.setAttribute("class", "emojiCounter")
            //     e2Num.setAttribute("class", "emojiCounter")
            //     e3Num.setAttribute("class", "emojiCounter")
            
            //     e1Num.textContent = 0;
            //     e2Num.textContent = 0;
            //     e3Num.textContent = 0;
            
            
            //     const e1 = document.createElement("button")
            //     e1.innerHTML = "&#128077;"
            //     const e2 = document.createElement("button")
            //     e2.innerHTML = "&#128078;"
            //     const e3 = document.createElement("button")
            //     e3.innerHTML = "&#129505;"
            
            //     reactions.append(e1Num)
            //     reactions.append(e1)
            //     reactions.append(e2Num)
            //     reactions.append(e2)
            //     reactions.append(e3Num)
            //     reactions.append(e3)
            //     divs[i].append(reactions)
            // }
            // divs[i].append(img)
            
            
        }

module.exports = {
    renderAllCards,
    sortOrder
}
