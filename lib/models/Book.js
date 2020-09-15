const pool = require('../utils/pool');

class Book  {
  id;
  title;
  image;
  rating;
  price;
  inStock;
  
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.image = row.image;
    this.rating = row.rating;
    this.price = row.price;
    this.inStock = row.in_stock;
  }

  static async insert(book) {
    const { rows } = await pool.query(`
    INSERT INTO books (title, image, rating, price, in_stock)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *`, [book.title, book.image, book.rating, book.price, book.inStock]);
    return new Book(rows[0]);
  }
}

module.exports = Book;

