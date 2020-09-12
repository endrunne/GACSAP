import React from 'react'
import { connect } from 'react-redux'

import { ClassroomForm } from './formulario'
import { ClassroomList } from './lista'

class ClassroomCRUD extends React.Component {
    render() {
        const { msgSucesso, msgErro } = this.props

        return (
            <div>
                {msgSucesso ?
                    <div className="alert alert-success" role="alert">
                        <strong>Parabéns</strong> {msgSucesso}
                    </div>
                    : null
                }

                {msgErro ?
                    <div className="alert alert-danger" role="alert">
                        <strong>Ops!</strong> {msgErro}
                    </div>
                    : null
                }
                <div className="row border-bottom">
                    <div className="col-md-6">
                        <ClassroomForm />
                    </div>
                    <div className="col-md-6">
                        <ClassroomList
                            isAdmin={true} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = store => ({
    msgErro: store.classroom.msgErro,
    msgSucesso: store.classroom.msgSucesso
})

const conectado = connect(mapStoreToProps, null)(ClassroomCRUD)

export { conectado as ClassroomCRUD }