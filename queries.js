/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
var mongoose = require('mongoose'),
    Listings = require('./ListingSchema.js'),
     config =  require('./config')
    
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listings.findOne({name: 'Libary West'}, function(err,data){
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
  Listings.findOneAndUpdate({name: "Phelps Laboratory", function(err,data) {

    if (err) 
      throw err;
      console.log(data);
    data.address = "1953 Museum Rd, Gainesville, FL 32603";
    data.save(function(err){
      if (err) 
      throw err;
      console.log(data);
    })
  }
});

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   if (err) {
      throw err;
      console.log(data);
  }
  Listings.find({}, function(err,data){
    if (err) 
      throw err;
      console.log(data);
  });
  console.log(err);     
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();