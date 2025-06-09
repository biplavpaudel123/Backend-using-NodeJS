
const { parse } = require('csv-parse');
const fs = require('fs');
const results = [];

const parser = parse({
  comment: '#',
  columns: true
});

fs.createReadStream('kepler_data.csv')
  .pipe(parser)
  .on('error', (error) => {
    console.error('Stream error:', error.message);
  });

parser.on('readable', () => {
  let record;
  while ((record = parser.read()) !== null) {
    results.push(record);
  }
});

parser.on('end', () => {
  console.log('Reached the end of the file.');
  console.log(results);
});
