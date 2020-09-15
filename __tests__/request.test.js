const request = require('../lib/request');

describe('request function', () => {
  it('makes a request to the books.toscrape.com and returns html', async() => {
    const document = await request();
    expect(document.querySelector('.col-sm-8 > a').textContent).toEqual('Books to Scrape');
  });
}); 
