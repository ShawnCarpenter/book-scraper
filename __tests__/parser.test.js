
const parse = require('../lib/parse');
const request = require('../lib/request');

describe('parser for books', () => {
  
  it('returns an array of books', async() => {
    const document = await request();
    const booklist = parse(document);
    expect(booklist).toEqual(expect.arrayContaining([
      { image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', title:'A Light in the Attic', rating: 3, price: '£51.77', inStock: true
      },
      { image: 'media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg', title: 'Tipping the Velvet', rating: 1, price: '£53.74',
        inStock: true }
    ]));
  });
});
