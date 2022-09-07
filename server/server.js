const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;


//use client folder
`app.use(express.static(’../client/dist/’))`

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require html route
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});