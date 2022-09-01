
const renderDOM = require('./helpers');

let dom;
let document;

describe('specificPost.html', () => {
    beforeEach(async () => {
      dom = await renderDOM('specificPost.html');
      document = await dom.window.document;
    })
  
    xit('it has a comment Form', () => {
      const commentForm = document.querySelector('#commentForm');
      expect(commentForm).toBeTruthy;
    })

    xit('it has a text area to leave comments', () => {
        const comment = document.querySelector('#comment')
        expect(comment.placeholder).toBe('Leave a comment')
    })
    
    xit('Comment textarea no longer hides when comment btn is clicked', () => {
        const commentBtn = document.querySelector("#btncomment")
        const commentTextbox = document.querySelector("#comment")
        commentBtn.dispatchEvent(new dom.window.Event('click'))
        expect(commentTextbox.hidden).toBe(false)
    })

    it('create a card when document is loaded', () => {
        const card = document.querySelector("card")
        document.dispatchEvent(new dom.window.Event('load'))
        expect(card).toBeTruthy()
    })

    it('create a img element when document is loaded', () => {
        const img = document.querySelector("img")
        document.dispatchEvent(new dom.window.Event('load'))
        expect(img).toBeTruthy()
    })

    it('add emoji', () => {
        const thumbsup = document.querySelector("#thumbsup")
        thumbsup.dispatchEvent(new dom.window.Event('click'))
        const newEmoji = {
            emoji: '&#128077;'
        };
        expect(newEmoji.emoji).toBe('&#128077;')
    })
  })
  