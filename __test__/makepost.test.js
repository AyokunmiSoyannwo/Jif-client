const renderDOM = require('./helpers');

let dom;
let document;


describe('makeAPost.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('makeAPost.html');
    document = await dom.window.document;
  })

  test('it has a title', () => {
    const title = document.querySelector('title');
    expect(title).toBeTruthy()
  })

  it('Form has input field when website loads', () => {
    const titleInput = document.querySelector('titleInput');
    expect(titleInput).toBeTruthy
  })

  it('it has a gifty search input', () => {
    const gifSearch = document.querySelector('.js-userinput');
    expect(gifSearch).toBeTruthy
  })

  it('it has a gifty search button', () => {
    const serachBtn = document.querySelector('.search');
    expect(serachBtn.textContent).toBe('Search for gif')
  })

  it('it displays 25 gifs when user click search', () => {
    const displaygifs = document.querySelector('container-image');
    const clickSearch = document.querySelector('.search');
    clickSearch.dispatchEvent(new dom.window.Event('click'))
    expect(displaygifs.getElementsByTagName('img').length).toBe(25)
  })

  it('limit user input to 30 characters', () => {
    const ptitle = document.querySelector("#titleInput")
    // const clickSearch = document.querySelector('.search');
    // clickSearch.dispatchEvent(new dom.window.Event('click'))
    expect(ptitle.maxLength).toBe(30)
  })

  it('limit user input to 300 characters', () => {
    const ptitle = document.querySelector("#textInput")
    // const clickSearch = document.querySelector('.search');
    // clickSearch.dispatchEvent(new dom.window.Event('click'))
    expect(ptitle.maxLength).toBe(250)
  })

  it("it has a post button with 'post'", () => {
    const post = document.querySelector("#submit")
    // const clickSearch = document.querySelector('.search');
    // clickSearch.dispatchEvent(new dom.window.Event('click'))
    expect(post.value).toBe("Submit")
  })

//   it('displays morning when the btn is clicked', () => {
//     const btn = document.querySelector('#click')
//     btn.dispatchEvent(new dom.window.Event('click'))
//     const h1 = document.querySelector('h1')

//     expect(h1.innerHTML).toContain('morning')
//   })

//   it('adds the content of the input to the h1', () => {
//     const form = document.querySelector('form');
//     const h1 = document.querySelector('h1');
//     const input = document.querySelector('#name');
//     const btn = document.querySelector('#click')

//     input.value = 'mike'
//     form.dispatchEvent(new dom.window.Event('submit'))
//     // btn.dispatchEvent(new dom.window.Event('click')) // morning

//     expect(h1.innerHTML).toContain('mike')
//   })
})
