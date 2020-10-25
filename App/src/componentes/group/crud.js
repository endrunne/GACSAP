import React from 'react'
import { connect } from 'react-redux'

import { GroupForm } from './formulario'
import { GroupList } from './lista'

class GroupCRUD extends React.Component {
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
                        <GroupForm />
                    </div>
                    <div className="col-md-6">
                        <GroupList
                            isAdmin={true} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = store => ({
    msgErro: store.group.msgErro,
    msgSucesso: store.group.msgSucesso
})

const conectado = connect(mapStoreToProps, null)(GroupCRUD)

export { conectado as GroupCRUD }