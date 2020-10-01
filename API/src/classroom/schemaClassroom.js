const restful  = require('node-restful')

const schemaClassroom = new restful.mongoose.Schema({
    normalSpaces: { type: Number, required: false},
    accessableSpaces: { type: Number, required: false},
    code: { type: String, required: false},
    name: { type: String, required: false},
    assignedGroup: { type: String, required: false},
    attributes: [{
        attributeName: { type: String, required: false},
        attributeDisplayName: { type: String, required: false},
        attributeValue: { type: String, required: false}
    }]
})

module.exports = restful.model('classrooms', schemaClassroom)