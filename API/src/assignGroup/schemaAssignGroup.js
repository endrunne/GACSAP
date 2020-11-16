const restful  = require('node-restful')

const schemaAssignGroup = new restful.mongoose.Schema({
    assignedGroup: { type: String},    
})

module.exports = restful.model('assignGroups', schemaAssignGroup)