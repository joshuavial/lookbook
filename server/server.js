var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var apiRoutes = require('./api-routes')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/outfits', apiRoutes)

module.exports = server
