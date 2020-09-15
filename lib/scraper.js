const parse = require('./parse');
const request = require('./request');
const store = require('./store');

request()
  .then(document => parse(document))
  .then(books => store(books))
  // eslint-disable-next-line no-console
  .then(results => console.log(results.length));


