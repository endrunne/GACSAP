const mongoose = require('mongoose')

mongoose.Promise = global.Promise

/*Mudar DB*/
module.exports = mongoose.connect('mongodb://mongodb:27017/csap_db', { useNewUrlParser: true, useUnifiedTopology: true})