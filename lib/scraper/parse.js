const ratings = {
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
};
const parse = document => {
  return [...document.querySelectorAll('.product_pod')]
    .map(book => {
      return {
        title: book.querySelector('h3 > a').getAttribute('title'),
        image: book.querySelector('img').src,
        rating: ratings[book.querySelector('.star-rating').classList.item(1)],
        price: book.querySelector('.price_color').textContent,
        inStock: book.querySelector('.instock').textContent.includes('In stock')
      };
    });
};

module.exports = parse;
