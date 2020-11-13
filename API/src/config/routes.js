const {Router} = require('express')

module.exports = server => {
    const router = Router()

    server.use('/api', router)

    const serviceClassroom = require('../classroom/serviceClassroom.js')
    serviceClassroom.register(router, '/classrooms')

    const serviceAssignGroup = require('../assignGroup/serviceAssignGroup.js')
    serviceAssignGroup.register(router, '/classrooms/assignGroups')

    const serviceGroup = require('../group/serviceGroup.js')
    serviceGroup.register(router, '/groups')
}