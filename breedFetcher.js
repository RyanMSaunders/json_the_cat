
const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


if (!breedName) {
  console.error('You must provide a valid breed name.');
  process.exit(1); // Exits the program indicating that an error occurred
}


request(url, (error, response, body) => {
  
  if (error !== undefined) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
 
    if (data.length === 0) {
      console.log("breed not found");
    } else {
      console.log((data[0].description));
    }
  }
  
});