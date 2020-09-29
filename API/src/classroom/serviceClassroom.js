const schemaClassroom = require('./schemaClassroom.js')

schemaClassroom.methods(['get', 'post', 'delete'])
schemaClassroom.updateOptions({ new: true, runValidators: true})

module.exports = schemaClassroom