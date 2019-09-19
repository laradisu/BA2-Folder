/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listings = require('./ListingSchema.js'),
     config =  require('./config.js');

  mongoose.connect(config.db.uri, {useUnifiedTopology: true, useNewUrlParser: true});
    
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listings.findOne({name: 'Library West'}, function(err,data){
    if (err) 
      throw err;
      console.log(data);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This coresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listings.findOneAndDelete({code: 'CABL'}, function(err,data){
    if (err) 
      throw err;
      console.log(data);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    Listings.findOneAndUpdate({name: 'Phelps Laboratory'}, {set$:{address: '1953 Museum Rd, Gainesville, FL 32603' }}, {new: true}, function(err,data) {
    
    if (err) {
      console.log("Something wrong when updating data!");
    }
      console.log(data);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listings.find({}, function(err,listings){
    if (err) throw err;
    console.log(listings);
  });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();