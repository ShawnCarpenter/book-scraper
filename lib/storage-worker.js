const store = require('./scraper/store');

module.exports = job => store(job.data.books);
