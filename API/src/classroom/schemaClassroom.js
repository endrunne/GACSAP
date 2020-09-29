const restful  = require('node-restful')

const schemaClassroom = new restful.mongoose.Schema({
    normalSpaces: { type: Number, required: true},
    accessableSpaces: { type: Number, required: true},
    code: { type: String, required: true},
    name: { type: String, required: false},
    assignedGroup: { type: String, required: false},
    /*Não tenho certeza se os attributes estão certos, verificar depois*/
    attributes: [{
        attributeName: { type: String, required: true},
        attributeDisplayName: { type: String, required: true},
        attributeValue: { type: String, required: false}
    }]
})

module.exports = restful.model('classrooms', schemaClassroom)