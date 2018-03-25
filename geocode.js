var geocoder = require('geocoder');

var nodeArgs = process.argv;

// variable to store the address on one line as a string
var address = "";


// for loop to make all input words in one string
for (var i=2; i<nodeArgs.length; i++) {
    
    address = address + " " + nodeArgs[i];

}

console.log(address);

// Geocoding 
geocoder.geocode(address, function ( err, data ) {
    // do something with data 
    console.log(JSON.stringify(data, null, 2));
  });