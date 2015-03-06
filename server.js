var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World, from '+process.env.HOSTNAME)
})

app.listen(process.env.PORT)
console.log('listening on http://localhost:' + process.env.PORT);
