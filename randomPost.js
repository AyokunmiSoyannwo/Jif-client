const commentBtn = document.querySelector("#btncomment")
const addComment = document.querySelector("#postBtn")
const commentTextbox = document.querySelector("#comment")
const commentForm = document.querySelector("#commentForm")
const e1Num = document.querySelector('#thumbupCounter')
const e2Num = document.querySelector('#thumbdownCounter')
const e3Num = document.querySelector('#heartCounter')
const reactions = document.querySelector('.reactions')

window.addEventListener("load", (req,res) => {
    dataLength = window.localStorage.getItem('dataLength')
    var ID = (Math.floor(Math.random() * dataLength))+1

    
    fetch(`https://jif-futureproof.herokuapp.com/ipj/${ID}`)
    .then(res => res.json())
    .then(renderCard)

})



function renderCard (data) {
    const col2 = document.querySelector(".col2")
    const div = document.createElement("div")
        div.setAttribute("class", "card")
        const postID = (data.id).toString()
        div.setAttribute("id", postID)
        const gif = data.gif
        const title = data.title
        const text = data.text
        const img = document.createElement("img")
        img.setAttribute("class", "image")
        img.src = gif
        const h2 = document.createElement("h2")
        h2.textContent = title
        const p = document.createElement("p")
        p.textContent = text

        const reactions = document.querySelector('.reactions')
        reactions.setAttribute("id", postID)

        const emojis = data.emoji;
        
            console.log('emoji present here!')
            const e1Counter = emojis.filter((x) => {
                return x === "&#128077;"
            })
            const e2Counter = emojis.filter((x) => {
                return x === "&#128078;"
            })
            const e3Counter = emojis.filter((x) => {
                return x === "&#129505;"
            })

            e1Num.textContent = e1Counter.length;
            e2Num.textContent = e2Counter.length;
            e3Num.textContent = e3Counter.length;

           

        
        
        
        const comments = data.comment;
        
        comments.forEach((x) => {
            const comment = document.createElement("p")
            comment.setAttribute("class", "comments")
            const col1 = document.querySelector(".col1")
            comment.textContent = x
            col1.append(comment)
        })
          
        // reactions.append(commentB)
        
        div.append(h2)
        div.append(img)
        div.append(p)
        col2.prepend(div)
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
            'Content-Type': 'application/json',
            // 'Content-Length': '34'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
        
    };
    console.log(options.body.length)
    console.log('this is options.body:' + options.body)
    fetch( 'https://jif-futureproof.herokuapp.com/comment',options)
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
    commentTextbox.value = '';
    

}


// Add an emoji
const thumbsup = document.querySelector("#thumbsup")
thumbsup.addEventListener("click", postThumbsUpEmoji)
const thumbsdown = document.querySelector("#thumbsdown")
thumbsdown.addEventListener("click", postThumbsDownEmoji)
const heart = document.querySelector("#heart")
heart.addEventListener("click", postHeartEmoji)

function postThumbsUpEmoji(e){
    // e.preventDefault();
    
    console.log('I am running')

    const newEmoji = {
        id: window.localStorage.getItem('id'),
        emoji: '&#128077;'
    };
   
    const options = { 
        method: 'POST',
        body:JSON.stringify(newEmoji),
        headers: {
            // Accept: 'application.json',
            'Content-Type': 'application/json',
            // 'Content-Length': '34'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
        
    };
    console.log('this is options.body:' + options.body)
    fetch( 'https://jif-futureproof.herokuapp.com/emoji',options)
        .then(r => r.text())
        .then(emojiReact)
        .catch(console.warn)
};

function postThumbsDownEmoji(e){
    // e.preventDefault();
    console.log('I am running')

    const newEmoji = {
        id: window.localStorage.getItem('id'),
        emoji: '&#128078;'
    };
   
    const options = { 
        method: 'POST',
        body:JSON.stringify(newEmoji),
        headers: {
            // Accept: 'application.json',
            'Content-Type': 'application/json',
            // 'Content-Length': '34'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
        
    };
    console.log('this is options.body:' + options.body)
    fetch( 'https://jif-futureproof.herokuapp.com/emoji',options)
        .then(r => r.text())
        .then(emojiReact)
        .catch(console.warn)
};

function postHeartEmoji(e){
    // e.preventDefault();
   
    console.log('I am running')

    const newEmoji = {
        id: window.localStorage.getItem('id'),
        emoji: '&#129505;'
    };
   
    const options = { 
        method: 'POST',
        body:JSON.stringify(newEmoji),
        headers: {
            // Accept: 'application.json',
            'Content-Type': 'application/json',
            // 'Content-Length': '34'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }
        
    };
    console.log('this is options.body:' + options.body)
    fetch( 'https://jif-futureproof.herokuapp.com/emoji',options)
        .then(r => r.text())
        .then(emojiReact)
        .catch(console.warn)
};

function emojiReact() {
    console.log('you have reacted!')
    const ID = reactions.getAttribute("id")
    window.localStorage.setItem('id',ID)
    window.location.href = './specificPost.html'
    
    
}
