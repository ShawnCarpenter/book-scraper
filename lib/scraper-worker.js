const parse = require('./scraper/parse');
const request = require('./scraper/request');
// const store = require('./scraper/store');

module.exports = job => {
  // eslint-disable-next-line no-console
  console.log(`Scraping page ${job.data.page}`);
  return request(job.data.page)
    .then(parse);
};
