const restful  = require('node-restful')

const schemaClassroom = new restful.mongoose.Schema({
    normalSpaces: { type: Number, required: true, min: 0},
    accessibleSpaces: { type: Number, required: true, min: 0},
    code: { type: String, required: true,},
    name: { type: String},
    assignedGroup: { type: String},
    attributes: [{
        attributeName: { type: String},
        attributeDisplayName: { type: String},
        attributeValue: { type: String}
    }]
})

module.exports = restful.model('classrooms', schemaClassroom)