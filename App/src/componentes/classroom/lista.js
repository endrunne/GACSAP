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
        const classrooms = props.classrooms || []
        return classrooms.map(classroom => (
            <tr key={classroom._id}>

                {props.isAdmin ?
                    <td>
                        <button className="btn btn-success mr-2"
                            onClick={() => props.editar(classroom)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => props.deleteClassroom(classroom._id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                :
                    <>
                        <td>{classroom.cargaHoraria}</td>
                        <td>{classroom.preco}</td>
                        <td>{classroom.categoria}</td>
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
                        <th>Descrição</th>
                        {props.isAdmin ? <th></th> :
                            <>
                                <th>FOO</th>
                                <th>BAR</th>
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