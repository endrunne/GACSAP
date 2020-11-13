const schemaAssignGroup = require('./schemaAssignGroup.js')

schemaAssignGroup.methods(['get', 'put', 'post', 'delete'])
schemaAssignGroup.updateOptions({ new: true, runValidators: true})

module.exports = schemaAssignGroup