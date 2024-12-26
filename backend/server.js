var express = require('express');
var server = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes')
var cors = require('cors')
// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/est', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db started');
  })
  .catch((error) => {
    console.log('Error connecting to the database:', error);
  });
  
server.use(cors())
// Middleware to parse JSON
server.use(express.json());
server.use(routes)



// Start the server
server.listen(8000, function check(error) {
  if (error) {
    console.log('Error starting the server');
  } else {
    console.log('Server started on port 8000');
  }
});
