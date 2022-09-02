const commentBtn = document.querySelector("#btncomment")
const addComment = document.querySelector("#postBtn")
const commentTextbox = document.querySelector("#comment")
const commentForm = document.querySelector("#commentForm")
const e1Num = document.querySelector('#thumbupCounter')
const e2Num = document.querySelector('#thumbdownCounter')
const e3Num = document.querySelector('#heartCounter')
const reactions = document.querySelector('.reactions')
const randomPost_helpers = require('./randomPost_helpers')

window.addEventListener("load", (req,res) => {

    
    fetch(`https://jif-futureproof.herokuapp.com/ipj/random`)
    .then(res => res.json())
    .then(randomPost_helpers.renderCard)

})


randomPost_helpers.renderCard


commentBtn.addEventListener("click", randomPost_helpers.makeCommentAppear)



commentForm.addEventListener('submit', randomPost_helpers.postComment)


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
