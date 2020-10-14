import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getClassroomList,
    deleteClassroom
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
                        <td>{classroom.accessableSpaces}</td>
                    </>
                    {props.isAdmin ?
                    <>
                        <td>
                            <button className="btn btn-success mr-2"
                                onClick={() => props.editar(classroom)}>
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
                        {props.isAdmin ? 
                            <>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </>
                            :
                            <>
                                <th></th>
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
    deleteClassroom
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionsToProps)(ClassroomList)

export { conectado as ClassroomList}