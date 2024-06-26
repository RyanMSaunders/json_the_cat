
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  // if error from url
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    const breed = data[0];
    
    // if breed is valid, if it isnt
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found");
    }
    
  
  });
};

module.exports = { fetchBreedDescription };