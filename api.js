var app = require('express')();

app.get('/', function(req, res) {
  res.json({message: 'Hello World!'});
})

app.get('/', function(req, res) {
  res.json({message: 'Testovej den!'});
})


app.listen(3000);


