const renderDOM = require('./helpers');

let dom;
let document;

describe('index.html', () => {
    beforeEach(async () => {
      dom = await renderDOM('index.html');
      document = await dom.window.document;
    })

    test('it has a title', () => {
        const title = document.querySelector('title');
        expect(title).toBeTruthy()
      })
})
