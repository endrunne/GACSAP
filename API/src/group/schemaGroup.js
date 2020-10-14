const restful  = require('node-restful')

const schemaGroup = new restful.mongoose.Schema({
    students: { type: Number, required: true},
    specialStudents: { type: Number, required: true},
    code: { type: String, required: true},
    name: { type: String, required: false},
    category: { type: String, required: true},
    /*Não tenho certeza se os attributes estão certos, verificar depois*/
    attributes: [{
        attributeName: { type: String, required: true},
        attributeDisplayName: { type: String, required: true},
        attributeValue: { type: String, required: false}
    }]
})

module.exports = restful.model('groups', schemaGroup)