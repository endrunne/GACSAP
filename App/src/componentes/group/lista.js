import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getGroupList,
    deleteGroup,
    selectGroup
} from '../../actions/group'

const GroupList = props => {
    const {getGroupList} = props

    useEffect(() => {
        getGroupList()
    }, [getGroupList])

    const exibirLinhas = () => {
        //retorna a lista de props se existir
        const groups = Object.values(props.groups) || []
        
        return groups.map((group, index) => (
            <tr key={index}>
                    <>
                        <td>{group.code}</td>
                        <td>{group.name}</td>
                        <td>{group.category}</td>
                        <td>{group.students}</td>
                        <td>{group.specialStudents}</td>
                    </>
                    {props.isAdmin ?
                    <>
                        <td>
                            <button className="btn btn-success mr-2"
                                onClick={() => props.selectGroup(group)}>
                                <i className="fa fa-check"></i>
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-danger"
                                onClick={() => props.deleteGroup(group._id)}>
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
            <h3>Lista de Turmas</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Alunos</th>
                        <th>Alunos Especiais</th>
                        {props.isAdmin ? 
                            <>
                                <th>Editar</th>
                                <th>Excluir</th>
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
    groups: store.group.groups
})

const mapActionsToProps = dispatch => bindActionCreators({
    getGroupList,
    deleteGroup,
    selectGroup
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionsToProps)(GroupList)

export { conectado as GroupList}