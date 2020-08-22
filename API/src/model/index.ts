export interface Classroom {
    _classroomGroupId?: number,
    classrooms: {
        _classroomId?: number,
        normalSpacesQty: number,
        accessableSpacesQty: number,
        attributes: [
            boolean,
            boolean,
            boolean,
            boolean
        ]
    }
}
