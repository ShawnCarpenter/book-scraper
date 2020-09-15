const fs = require('fs');
const store = require('../lib/store');
const pool = require('../lib/utils/pool');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  it('should insert an array of books into the database', async() => {
    const books = [
      { image: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', title:'A Light in the Attic', rating: 3, price: '£51.77', inStock: true
      },
      { image: 'media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg', title: 'Tipping the Velvet', rating: 1, price: '£53.74',
        inStock: true }
    ];
    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');
    
    expect(rows).toHaveLength(2);
  });
});
