import React from 'react'
import { connect } from 'react-redux'

import { BotaoAtribuir } from './botaoAtribuirTurmas'
import { ClassroomList } from './lista'


class atribuirComponent extends React.Component {
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
                    <div className="col-md-12">
                        <BotaoAtribuir />
                    </div>
                    <div className="col-md-12">
                        <ClassroomList
                            isAdmin={false} />
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

const conectado = connect(mapStoreToProps, null)(atribuirComponent)

export { conectado as Atribuir }

