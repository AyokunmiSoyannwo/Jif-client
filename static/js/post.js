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
