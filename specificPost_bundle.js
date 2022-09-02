(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const commentBtn = document.querySelector("#btncomment")
const commentForm = document.querySelector("#commentForm")

const post_helpers = require('./post_helpers')


window.addEventListener("load", (req,res) => {
    ID = window.localStorage.getItem('id')
    fetch(`https://jif-futureproof.herokuapp.com/ipj/${ID}`)
    .then(res => res.json())
    .then(post_helpers.renderCard)

})


commentBtn.addEventListener("click", post_helpers.makeCommentAppear)

commentForm.addEventListener('submit', post_helpers.postComment)



const thumbsup = document.querySelector("#thumbsup")
thumbsup.addEventListener("click", post_helpers.postThumbsUpEmoji)
const thumbsdown = document.querySelector("#thumbsdown")
thumbsdown.addEventListener("click", post_helpers.postThumbsDownEmoji)
const heart = document.querySelector("#heart")
heart.addEventListener("click", post_helpers.postHeartEmoji)

},{"./post_helpers":2}],2:[function(require,module,exports){
const commentBtn = document.querySelector("#btncomment")
const addComment = document.querySelector("#postBtn")
const commentTextbox = document.querySelector("#comment")
const e1Num = document.querySelector('#thumbupCounter')
const e2Num = document.querySelector('#thumbdownCounter')
const e3Num = document.querySelector('#heartCounter')

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

        const reactions = document.createElement("div")
        reactions.setAttribute("class", "reactions")

        const emojis = data.emoji;
        console.log(emojis.length)
        if(emojis){
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

           

        } else {
            

            e1Num.textContent = 0;
            e2Num.textContent = 0;
            e3Num.textContent = 0;

        }
        
        if(data.comment){const comments = data.comment;
        
        comments.forEach((x) => {
            const comment = document.createElement("p")
            comment.setAttribute("class", "comments")
            const col1 = document.querySelector(".col1")
            comment.textContent = x
            col1.append(comment)
        })
        }   
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
            'Content-Type': 'application/json',
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

function postThumbsUpEmoji(e){
    
    console.log('I am running')

    const newEmoji = {
        id: window.localStorage.getItem('id'),
        emoji: '&#128077;'
    };
   
    const options = { 
        method: 'POST',
        body:JSON.stringify(newEmoji),
        headers: {
            'Content-Type': 'application/json',
        }
        
    };
    console.log('this is options.body:' + options.body)
    fetch( 'https://jif-futureproof.herokuapp.com/emoji',options)
        .then(r => r.text())
        .then(emojiReact)
        .catch(console.warn)
};

function postThumbsDownEmoji(e){
    console.log('I am running')

    const newEmoji = {
        id: window.localStorage.getItem('id'),
        emoji: '&#128078;'
    };
   
    const options = { 
        method: 'POST',
        body:JSON.stringify(newEmoji),
        headers: {
            'Content-Type': 'application/json',
        }
        
    };
    console.log('this is options.body:' + options.body)
    fetch( 'https://jif-futureproof.herokuapp.com/emoji',options)
        .then(r => r.text())
        .then(emojiReact)
        .catch(console.warn)
};
function postHeartEmoji(e){   
    console.log('I am running')

    const newEmoji = {
        id: window.localStorage.getItem('id'),
        emoji: '&#129505;'
    };
   
    const options = { 
        method: 'POST',
        body:JSON.stringify(newEmoji),
        headers: {
            'Content-Type': 'application/json',
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
    window.location.href = './specificPost.html'
}

module.exports = {
    renderCard,
    makeCommentAppear,
    postComment,
    postThumbsUpEmoji,
    postThumbsDownEmoji,
    postHeartEmoji
}

},{}]},{},[1]);
