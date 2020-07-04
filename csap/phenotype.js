export function csapPhenotype(){
    var phentoypePattern = {
        classroomGroupId: 1,
        classrooms: {
            classroomId: 1,
            normalSpacesQty: 30,
            acessableSpacesQty: 2,
            attributes: [
                false, // isAcessable
                false, // hasWideDoor
                false, // hasComputers
                false  // hasSlideProjector
            ]
        }
    }

    return phentoypePattern
}
