const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb+srv://anony:anony@001@tempocluster.13edm1t.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Get the latitude and longitude
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Insert the document with the latitude and longitude
    db.collection('locations').insertOne({lat, lon}, function(err, result) {
      if (err) throw err;
      console.log("Document inserted");
      client.close();
    });
  });
});
