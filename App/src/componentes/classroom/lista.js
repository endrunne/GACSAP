import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getClassroomList,
    deleteClassroom,
    selectClassroom
} from '../../actions/classroom'

const ClassroomList = props => {
    const {getClassroomList} = props

    useEffect(() => {
        getClassroomList()
    }, [getClassroomList])

    const exibirLinhas = () => {
        //retorna a lista de props se existir
        const classrooms = Object.values(props.classrooms) || []
        
        return classrooms.map((classroom, index) => (
            <tr key={index}>
                    <>
                        <td>{classroom.code}</td>
                        <td>{classroom.name}</td>
                        <td>{classroom.normalSpaces}</td>
                        <td>{classroom.accessibleSpaces}</td>
                        <td>{classroom.assignedGroup}</td>
                    </>
                {props.isAdmin ?
                    <>
                        <td>
                            <button className="btn btn-success mr-2"
                                onClick={() => props.selectClassroom(classroom)}>
                                <i className="fa fa-check"></i>
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-danger"
                                onClick={() => props.deleteClassroom(classroom._id)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </td>
                    </>
                    :
                        <>
                        </>
                }
                {props.isAssignment ?
                    <>
                        <td>
                        
                            <button className="btn btn-warning mr-2"
                                onClick={() => props.searchGroup(classroom)}>
                                <i className="fa fa-bookmark"></i>
                            </button>
                        </td>
                    </>
                    :
                    <>
                    </>
                }
            </tr>
        ))
    }
    return (
        <div>
            <h3>Lista de Salas</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Lugares</th>
                        <th>Lugares Acessiveis</th>
                        <th>Turma Atribuída</th>
                        {props.isAdmin ? 
                            <>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </>
                            :
                            <>
                            </>
                        }
                        {props.isAssignment ?
                            <>
                                <th>Escolher Turma</th>
                            </>
                            :
                            <>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    )
}

const mapStoreToProps = store => ({
    classrooms: store.classroom.classrooms
})

const mapActionsToProps = dispatch => bindActionCreators({
    getClassroomList,
    deleteClassroom,
    selectClassroom
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionsToProps)(ClassroomList)

export { conectado as ClassroomList}