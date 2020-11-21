const schemaAssignGroup = require('./schemaAssignGroup.js')

schemaAssignGroup.methods(['get'])
schemaAssignGroup.updateOptions({ new: true, runValidators: true})

module.exports = schemaAssignGroup