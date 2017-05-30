var express = require('express')
var routes = express.Router()

//...
routes.get('/user', function(req, res){
  res.json({msg: "funcionou!"})
})

module.exports = routes
