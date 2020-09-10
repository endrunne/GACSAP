export interface Classroom {
    _id?: number,
    normalSpaces: number,
    accessableSpaces: number,
    code: string,
    name: string,
    assignedGroup: string,
    attributes: [{
        attributeName: string,
        attributeDisplayName: string,
        attributeValue: any
    }]
}

export interface Group {
    _id?: number,
    students: number,
    specialStudents: number,
    code: string,
    name: string,
    category: string,
    attributes: [{
        attributeName: string,
        attributeDisplayName: string,
        attributeValue: any
    }]
}