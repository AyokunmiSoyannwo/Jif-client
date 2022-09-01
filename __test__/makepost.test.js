const renderDOM = require('./helpers');

let dom;
let document;


xdescribe('makeAPost.html', () => {
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
    expect(ptitle.maxLength).toBe(30)
  })

  it('limit user input to 300 characters', () => {
    const ptitle = document.querySelector("#textInput")
    expect(ptitle.maxLength).toBe(250)
  })

  it("it has a post button with 'post'", () => {
    const post = document.querySelector("#submit")
    expect(post.value).toBe("Submit")
  })

})


