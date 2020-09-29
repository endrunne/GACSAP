const schemaGroup = require('./schemaGroup.js')

schemaGroup.methods(['get', 'post', 'put', 'delete'])
schemaGroup.updateOptions({ new: true, runValidators: true})

module.exports = schemaGroup