import DB from "../../db.ts"
import {Classroom} from "../model/index.ts"

const classrooms = DB.collection("classrooms")

export const getClassrooms = async (req: any) => {
    const allClassrooms: Classroom[] | [] = await classrooms.find({});

    return { classrooms: allClassrooms };
}

export const getSingleClassroom = async ({ req }: { req: any }) => {
    const classroom: Classroom | undefined = await classrooms.findOne({
        _classroomGroupId: {
            "$oid": req.params.id
        }
    });

    if (!classroom) {
        return {
            items: []
        }
    }

    return { classroom: classroom };
}

export const saveClassroom = async ({ req, res }: { req: any, res: any }) => {
    const 
    {
        normalSpacesQty, 
        accessableSpacesQty,
        attributes
    } = req.body;

    const newClassrooms = await classrooms.insertOne({
        normalSpacesQty, 
        accessableSpacesQty,
        attributes
    });

    res.status = 201;
    return {
        posts: newClassrooms
    }

}

export const updateClassroom = async ({req,res}: {req: any, res: any}) => {
    const foundClassroom = await classrooms.findOne({
        _classroomGroupId: {
            "$oid": req.params.id
        } 
    })

    let updatedClassroom;
    if (foundClassroom){
        updatedClassroom = await classrooms.updateOne({
            _classroomGroupId: {
                "$oid": req.params.id
            }
        },
        
        req.body
        
        );
    }
    else {
        res.status = 404;
        return {
            message: 'No such classroom'
        }
    }

    return {classroom: updatedClassroom}
}

export const deleteClassroom = async ({ req, res }: { req: any, res: any }) => {
    const foundClassroom = await classrooms.findOne({
        _classroomGroupId: {
            "$oid": req.params.id
        }
    })

    if (foundClassroom) {
        await classrooms.deleteOne({
            _classroomGroupId: {
                "$oid": req.params.id
            }
        }
        );
    } 
    else {
        res.status = 404;
        return {
            message: 'No such classroom'
        }
    }

    return { message: 'Classroom deleted successfully!' };
}
