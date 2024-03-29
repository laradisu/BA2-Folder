'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
mongoose.connect(config.db.uri, {useUnifiedTopology: true, useNewUrlParser: true});
//See https://docs.atlas.mongodb.com/driver-connection/

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

fs.readFile('listings.json', 'utf8', function(err, data) {
    //Check for errors
    if (err) {
      throw err;
      console.log(data);
    }
    try {
        var listings = JSON.parse(data);
        listings.entries.forEach(function(listing) {
          var listingModel = new Listing(listing);
          listingModel.save(function(err){
            if (err) {
              throw err;
            }
            console.log(listing);
          });
        });
        
      }
    catch(err) {
        console.error(err)
      }
    });

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */